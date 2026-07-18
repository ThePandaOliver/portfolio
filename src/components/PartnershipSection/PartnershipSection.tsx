import { partnership } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PartnershipSection.module.css";

export default function PartnershipSection() {
  return (
    <section id="partnership" className={styles.section}>
      <SectionHeading
        label="Collaboration"
        title="Partnership"
        subtitle="I team up with companies that align with the community I serve."
      />

      <div className={styles.card}>
        {/* Glow accent */}
        <div className={styles.cardGlow} aria-hidden="true" />

        <div className={styles.cardContent}>
          <div className={styles.partnerBadge}>Official Partner</div>

          <h3 className={styles.partnerName}>{partnership.company}</h3>
          <p className={styles.tagline}>"{partnership.tagline}"</p>
          <p className={styles.description}>{partnership.description}</p>

          <a
            href={partnership.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerLink}
            id="partnership-visit-btn"
          >
            Visit {partnership.company}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
