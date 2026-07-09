import styles from "./About.module.css";

function About() {
    return (
        <section id="about" className={styles.about}>

            <div className={styles.container}>

                <div className={styles.left}>

                    <h2>About Me</h2>

                    <p>
                        I'm a Backend Software Engineer with more than eight years
                        of professional experience developing enterprise web
                        applications, backend systems, and data-driven platforms.
                    </p>

                    <p>
                        I'm currently completing my Master's degree in Computer
                        Science at the University of Vienna, where I focus on
                        Software Engineering, Distributed Systems, Cloud
                        Computing, and Backend Development.
                    </p>

                    <p>
                        I enjoy designing scalable systems, building REST APIs,
                        solving complex technical problems, and turning business
                        requirements into reliable software solutions.
                    </p>

                </div>

                <div className={styles.right}>

                    <div className={styles.card}>

                        <h3>Quick Facts</h3>

                        <ul>

                            <li>📍 Vienna, Austria</li>

                            <li>🎓 MSc Computer Science</li>

                            <li>💼 8+ Years Experience</li>

                            <li>🐍 Python Backend Developer</li>

                            <li>🌍 Open to opportunities across Europe</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;