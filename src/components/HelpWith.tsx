import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const CATEGORIES = [
  {
    label: 'Anxiety & Stress',
    items: [
      'Worry and overthinking',
      'Panic and fear',
      'Stress management',
      'Social anxiety',
    ],
  },
  {
    label: 'Relationships',
    items: [
      'Communication patterns',
      'Conflict and tension',
      'Family dynamics',
      'Boundaries',
    ],
  },
  {
    label: 'Life Transitions',
    items: [
      'Career and identity shifts',
      'Grief and loss',
      'Divorce or separation',
      'New parenthood',
    ],
  },
  {
    label: 'Burnout & Overwhelm',
    items: [
      'Emotional exhaustion',
      'Difficulty feeling present',
      'Work-life balance',
      'Feeling stuck',
    ],
  },
  {
    label: 'Self-Esteem & Identity',
    items: [
      'Self-worth and confidence',
      'Purpose and direction',
      'Depression',
      'Trauma-informed support',
    ],
  },
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
          <p className={styles['kbc-helpwith-intro']}>
            Therapy can support a wide range of experiences. Below are some
            common areas Kelly works with — though this is not an exhaustive
            list. If you are wondering whether something is a fit, the best
            step is to reach out.
          </p>
        </div>
        <div className={styles['kbc-helpwith-categories']}>
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={styles['kbc-helpwith-cat']}>
              <div className={styles['kbc-helpwith-cat-label']}>{cat.label}</div>
              <ul className={styles['kbc-helpwith-cat-list']}>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
