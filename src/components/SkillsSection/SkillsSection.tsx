import { skillCategories } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeading
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A snapshot of the languages, frameworks, and tools I work with every day."
      />

      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon} aria-hidden="true">
                {cat.icon}
              </span>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
            </div>
            <ul className={styles.skillList} aria-label={`${cat.name} skills`}>
              {cat.skills.map((skill) => (
                <li key={skill} className={styles.skillChip}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
