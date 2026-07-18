import { personal } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {personal.name}. Built with ❤️ and Next.js.
        </p>
        <div className={styles.links}>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={personal.links.curseforge}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="CurseForge"
          >
            CurseForge
          </a>
          <a
            href={personal.links.modrinth}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Modrinth"
          >
            Modrinth
          </a>
        </div>
      </div>
    </footer>
  );
}
