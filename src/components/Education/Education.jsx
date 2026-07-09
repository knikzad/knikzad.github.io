import education from "../../data/education";
import styles from "./Education.module.css";

function Education() {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <h2>Education</h2>
                    <p>Academic background and qualifications.</p>
                </div>

                <div className={styles.timeline}>

                    {education.map((item, index) => (
                        <div className={styles.card} key={index}>

                            <span className={styles.period}>
                                {item.period}
                            </span>

                            <h3>{item.degree}</h3>

                            <h4>{item.university}</h4>

                            <p>{item.location}</p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Education;