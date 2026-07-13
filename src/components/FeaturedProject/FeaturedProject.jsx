import projects from "../../data/projects";
import styles from "./FeaturedProject.module.css";
import {
    FaGithub,
    FaFilePdf,
    FaChalkboard
} from "react-icons/fa";

function FeaturedProject() {

    const project = projects[0];

    return (

        <section id="featured-project" className={styles.section}>

            <div className={styles.sectionHeader}>

                <h2>Featured Project</h2>

                <p>
                    A customizable fact comparison framework featuring a
                    Domain-Specific Language (DSL), AST-based validation,
                    secure execution, and explainable results.
                </p>

            </div>

            <div className={styles.content}>

                <h3 className={styles.projectTitle}>
                    {project.title}
                </h3>

                <p className={styles.description}>
                    {project.description}
                </p>

                <div className={styles.tech}>

                    {project.technologies.map((item) => (

                        <span
                            key={item}
                            className={styles.techBadge}
                        >
                            {item}
                        </span>

                    ))}

                </div>

                <div className={styles.demoContainer}>

                    <div className={styles.demoSection}>

                        <h3>Live Demonstration</h3>

                        <p>
                            Watch the complete workflow, from creating and validating a
                            comparison formula to executing it and reviewing explainable
                            comparison results.
                        </p>

                        <div className={styles.browser}>

                            <div className={styles.browserHeader}>

                                <div className={styles.browserDots}>

                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>

                                <div className={styles.browserTitle}>

                                    FactCheck Web Application

                                </div>

                            </div>

                            <video
                                className={styles.demoVideo}
                                muted
                                playsInline
                                controls
                                preload="metadata"
                            >

                                <source
                                    src={project.demo}
                                    type="video/mp4"
                                />

                                Your browser does not support the video tag.

                            </video>

                        </div>

                    </div>

                </div>

                <div className={styles.componentsSection}>

                    <h3>Core Engineering Components</h3>

                    <p>
                        The key architectural components that power the framework.
                    </p>

                    <div className={styles.cardGrid}>

                        {project.components.map((component) => {

                            const Icon = component.icon;

                            return (

                                <div
                                    key={component.title}
                                    className={styles.card}
                                >

                                    <div className={styles.cardHeader}>

                                        <Icon className={styles.icon} />

                                        <h4>{component.title}</h4>

                                    </div>

                                    <p>
                                        {component.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>
                <div className={styles.buttons}>

                    <a
                        href={project.github}
                        className={styles.primary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        GitHub Repository
                    </a>

                    <a
                        href={project.report}
                        className={styles.secondary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFilePdf />
                        Technical Report
                    </a>

                    <a
                        href={project.presentation}
                        className={styles.secondary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaChalkboard />
                        Project Presentation
                    </a>

                </div>

            </div>

        </section>

    );

}

export default FeaturedProject;