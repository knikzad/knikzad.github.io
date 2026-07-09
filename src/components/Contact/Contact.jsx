import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";

import personal from "../../data/personal";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <section id="contact" className={styles.contact}>

            <div className={styles.container}>

                <div className={styles.header}>

                    <h2>Let's Connect</h2>

                    <p>
                        I'm currently open to Backend Software Engineering
                        opportunities across Austria and Europe.
                    </p>

                </div>

                <div className={styles.grid}>

                    <a
                        href={`mailto:${personal.email}`}
                        className={styles.card}
                    >
                        <FaEnvelope className={styles.icon} />

                        <h3>Email</h3>

                    </a>

                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.card}
                    >
                        <FaLinkedin className={styles.icon} />

                        <h3>LinkedIn</h3>

                    </a>

                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.card}
                    >
                        <FaGithub className={styles.icon} />

                        <h3>GitHub</h3>

                    </a>

                    <div className={styles.card}>

                        <FaMapMarkerAlt className={styles.icon} />

                        <h3>Location</h3>

                        <p>{personal.location}</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;