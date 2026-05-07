import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import styles from '../styles/Website.module.css';

type BaseFieldProps = {
  label: string;
  icon?: ReactNode;
};

type TextInputProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    kind?: 'input';
  };

type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    kind: 'textarea';
  };

type SelectFieldProps = BaseFieldProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    kind: 'select';
    options: string[];
  };

type InputFieldProps = TextInputProps | TextareaFieldProps | SelectFieldProps;

type ControlProps =
  | Omit<TextInputProps, 'label' | 'icon'>
  | Omit<TextareaFieldProps, 'label' | 'icon'>
  | Omit<SelectFieldProps, 'label' | 'icon'>;

export default function InputField({ label, icon, ...props }: InputFieldProps) {
  return (
    <label
      className={`${styles['kbc-field']} ${icon ? styles['kbc-field-with-icon'] : ''}`}
    >
      <span className={styles['kbc-field-label']}>{label}</span>
      <span className={styles['kbc-field-control']}>
        {icon ? <span className={styles['kbc-field-icon']}>{icon}</span> : null}
        {renderControl(props)}
      </span>
    </label>
  );
}

function renderControl(props: ControlProps) {
  if (props.kind === 'textarea') {
    const { kind: _kind, ...textareaProps } = props;
    void _kind;
    return <textarea {...textareaProps} />;
  }

  if (props.kind === 'select') {
    const { kind: _kind, options, ...selectProps } = props;
    void _kind;
    return (
      <select {...selectProps}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }

  const { kind: _kind, ...inputProps } = props;
  void _kind;
  return <input {...inputProps} />;
}
