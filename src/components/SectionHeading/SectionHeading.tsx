import styles from "./SectionHeading.module.css";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <header className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
