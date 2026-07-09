import { Container, Row, Col } from "react-bootstrap";
import styles from "./TechnicalHighlights.module.css";

const highlights = [
    { title: "8+", subtitle: "Years Experience" },
    { title: "MSc", subtitle: "Computer Science" },
    { title: "Python", subtitle: "Backend Development" },
    { title: "FastAPI", subtitle: "Django & APIs" },
    { title: "Docker", subtitle: "Kubernetes" },
    { title: "System", subtitle: "Design" },
];

function TechnicalHighlights() {
    return (
        <section className={styles.highlights}>
            <Container>
                <Row>
                    {highlights.map((item, index) => (
                        <Col md={4} lg={2} key={index}>
                            <div className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default TechnicalHighlights;