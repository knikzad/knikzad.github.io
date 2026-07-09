import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import personal from "../../data/personal";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <h2>{personal.name}</h2>

                <p>{personal.title}</p>

                <div className={styles.socials}>

                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href={`mailto:${personal.email}`}
                    >
                        <FaEnvelope />
                    </a>

                </div>

                <p className={styles.copy}>
                    © {new Date().getFullYear()} {personal.name}. All rights reserved.
                </p>

                <p className={styles.tech}>
                    Built with React, Vite and ❤️
                </p>

            </div>

        </footer>
    );
}

export default Footer;