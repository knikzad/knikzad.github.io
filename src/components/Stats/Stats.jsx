import { Container, Row, Col } from "react-bootstrap";
import {
    FaBriefcase,
    FaGraduationCap,
    FaPython,
} from "react-icons/fa";

import styles from "./Stats.module.css";

function Stats() {

    return (

        <section className={styles.stats}>

            <Container>

                <Row className="g-4">

                    <Col lg={4}>

                        <div className={styles.card}>

                            <FaBriefcase className={styles.icon}/>

                            <h2>7+</h2>

                            <p>Years of Professional Experience</p>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className={styles.card}>

                            <FaGraduationCap className={styles.icon}/>

                            <h2>MSc</h2>

                            <p>Computer Science<br/>University of Vienna</p>

                        </div>

                    </Col>

                    <Col lg={4}>

                        <div className={styles.card}>

                            <FaPython className={styles.icon}/>

                            <h2>Python</h2>

                            <p>FastAPI • Django • REST APIs</p>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default Stats;