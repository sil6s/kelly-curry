import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const CHIPS = [
  'Anxiety & stress',
  'Life transitions',
  'Relationship conflict',
  'Communication patterns',
  'Grief and loss',
  'Family dynamics',
  'Burnout',
  'Emotional regulation',
  'Self-worth & identity',
  'Boundaries',
  'Trauma-informed support',
  'Parenting stress',
  'Depression',
  'Identity & purpose',
];

export default function HelpWith() {
  return (
    <section className={styles['kbc-helpwith']} id="help-with">
      <div className={styles['kbc-helpwith-inner']}>
        <div className={styles['kbc-helpwith-header']}>
          <SectionEyebrow>Areas of Focus</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            What therapy can <em>help with</em>.
          </h2>
        </div>
        <div className={styles['kbc-helpwith-grid']}>
          <p className={styles['kbc-helpwith-intro']}>
            Therapy can be helpful for a wide range of life experiences. Below
            are some common areas Kelly works with — though this is not an
            exhaustive list. If you are wondering whether something is a fit,
            the best step is to reach out.
          </p>
          <div className={styles['kbc-helpwith-chips']}>
            {CHIPS.map((chip) => (
              <span key={chip} className={styles['kbc-chip']}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
