import projects from "../../data/projects";
import styles from "./FeaturedProject.module.css";

function FeaturedProject() {

    const project = projects[0];

    return (

        <section id="featured-project" className={styles.section}>
            <div className={styles.sectionHeader}>

            <h2>Featured Project</h2>

            <p>
            The highlight of my recent software engineering work.
            </p>

            </div>
            <div className={styles.container}>

                <div className={styles.left}>

                    <h2>{project.title}</h2>

                    <p className={styles.period}>
                        {project.period}
                    </p>

                    <p className={styles.description}>
                        {project.description}
                    </p>

                    <div className={styles.tech}>

                        {project.technologies.map((item) => (
                            <span key={item}>
                                {item}
                            </span>
                        ))}

                    </div>

                    <h4>Key Features</h4>

                    <ul>

                        {project.features.map((feature) => (
                            <li key={feature}>
                                {feature}
                            </li>
                        ))}

                    </ul>

                    <div className={styles.buttons}>

                        <a
                            href={project.github}
                            className={styles.primary}
                        >
                            GitHub
                        </a>

                        <a
                            href={project.report}
                            className={styles.secondary}
                        >
                            Report
                        </a>

                        <a
                            href={project.presentation}
                            className={styles.secondary}
                        >
                            Presentation
                        </a>

                    </div>

                </div>

                <div className={styles.right}>

                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                    />

                </div>

            </div>

        </section>

    );

}

export default FeaturedProject;