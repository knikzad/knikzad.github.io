import experience from "../../data/experience";
import styles from "./Experience.module.css";

function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <h2>Professional Experience</h2>
                    <p>
                        More than 7 years of professional experience developing
                        software solutions, backend systems, and enterprise web
                        applications.
                    </p>
                </div>

                {experience.map((job, index) => (
                    <article key={index} className={styles.card}>

                        <div className={styles.cardHeader}>

                            <div>

                                <h3>{job.position}</h3>

                                <h4>{job.company}</h4>

                                {job.subtitle && (
                                    <p className={styles.subtitle}>
                                        {job.subtitle}
                                    </p>
                                )}

                                <span className={styles.location}>
                                    📍 {job.location}
                                </span>

                            </div>

                            <div className={styles.period}>
                                {job.period}
                            </div>

                        </div>

                        <div className={styles.techStack}>
                            {job.technologies.map((tech) => (
                                <span key={tech} className={styles.badge}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className={styles.bullets}>
                            {job.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>

                    </article>
                ))}

            </div>
        </section>
    );
}

export default Experience;