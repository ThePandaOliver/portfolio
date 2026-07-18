import {
  moddingHandle,
  moddingStats,
  personal,
} from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./ModdingSection.module.css";

export default function ModdingSection() {
  return (
    <section id="modding" className={styles.section}>
      <SectionHeading
        label="Minecraft"
        title="Minecraft Mod Development"
        subtitle={`Known in the community as "${moddingHandle}" — I've spent years building mods that players around the world have fallen in love with.`}
      />

      {/* Stats grid */}
      <div className={styles.statsGrid}>
        {moddingStats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statIcon} aria-hidden="true">
              {stat.icon}
            </span>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Platform links */}
      <div className={styles.platforms}>
        <a
          href={personal.links.curseforge}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.platformBtn} ${styles.curseforge}`}
          id="modding-curseforge-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.37 3L11.04 7.45l2.04.86-4.69 5.51 1.57.67-3.26 6.51H22l-3.73-6.51 1.57-.67-4.7-5.51 2.04-.86L13.37 3zM2 9h3.4l1.12 2.2-2.41 4.8H2V9zm0 8h3.09l-1 2H2v-2z" />
          </svg>
          CurseForge
        </a>
        <a
          href={personal.links.modrinth}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.platformBtn} ${styles.modrinth}`}
          id="modding-modrinth-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-5l4.5 2.5-4.5 2.5zm0-9v2.5L15 12l-4.5-4.5z" />
          </svg>
          Modrinth
        </a>
        <a
          href={personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.platformBtn} ${styles.github}`}
          id="modding-github-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.649.5.5 5.648.5 12c0 5.092 3.301 9.41 7.878 10.94.576.107.786-.25.786-.555 0-.273-.01-.997-.015-1.958-3.201.695-3.878-1.544-3.878-1.544-.523-1.33-1.278-1.685-1.278-1.685-1.044-.715.08-.7.08-.7 1.155.08 1.762 1.186 1.762 1.186 1.027 1.759 2.694 1.25 3.352.956.104-.743.402-1.25.73-1.537-2.554-.29-5.241-1.278-5.241-5.686 0-1.257.449-2.285 1.186-3.09-.12-.29-.514-1.464.112-3.051 0 0 .967-.31 3.168 1.18a11.01 11.01 0 012.884-.387c.978.004 1.964.132 2.884.387 2.199-1.49 3.163-1.18 3.163-1.18.629 1.587.233 2.761.114 3.051.74.805 1.185 1.833 1.185 3.09 0 4.42-2.692 5.393-5.255 5.677.413.357.78 1.06.78 2.135 0 1.543-.015 2.786-.015 3.165 0 .308.207.668.792.555C20.202 21.406 23.5 17.09 23.5 12 23.5 5.648 18.351.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}
