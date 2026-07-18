import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <SectionHeading
        label="Work"
        title="Projects"
        subtitle="Things I've built — from school assignments to passion projects shipped to millions."
      />

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            {project.badge && (
              <span className={styles.badge}>{project.badge}</span>
            )}

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                aria-label={`View ${project.title}`}
              >
                View Project
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
