import skills from "../../data/skills";
import styles from "./TechStack.module.css";

function SkillGroup({ title, items }) {
    return (
        <div className={styles.group}>
            <h3>{title}</h3>

            <div className={styles.badges}>
                {items.map((item) => (
                    <span key={item} className={styles.badge}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TechStack() {
    return (
        <section id="tech-stack" className={styles.techStack}>
            <div className={styles.container}>
                <h2>Tech Stack</h2>

                <SkillGroup
                    title="Programming Languages"
                    items={skills.programming}
                />

                <SkillGroup
                    title="Backend"
                    items={skills.backend}
                />

                <SkillGroup
                    title="Frontend"
                    items={skills.frontend}
                />

                <SkillGroup
                    title="Databases"
                    items={skills.databases}
                />

                <SkillGroup
                    title="DevOps & Cloud"
                    items={skills.devops}
                />

                <SkillGroup
                    title="Core Competencies"
                    items={skills.competencies}
                />
            </div>
        </section>
    );
}

export default TechStack;