import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import personal from "../../data/personal";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <section id="hero" className={styles.hero}>

            <Container>

                <Row className="align-items-center">

                    <Col lg={7}>
                        <span className={styles.badge}>
                            Available for Backend Software Engineering Roles
                        </span>
                        <p className={styles.subtitle}>
                            Backend Software Engineer
                        </p>

                        <h1 className={styles.title}>
                            Khalifa
                            <br />
                            <span>Nikzad</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Backend Software Engineer | Python Developer
                        </p>
                        <p className={styles.description}>
                            I design and build scalable backend systems with a focus on clean architecture,
                            API development, and modern Python technologies including FastAPI, Django,
                            React, MongoDB, Docker, and Kubernetes.
                        </p>

                        <div className={styles.buttons}>

                            <Button size="lg">
                                <FaDownload />
                                Download Resume
                            </Button>

                            <Button
                                variant="outline-dark"
                                size="lg"
                            >
                                <FaGithub />
                                GitHub
                            </Button>

                            <Button
                                variant="outline-primary"
                                size="lg"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </Button>
                            <Button variant="dark" size="lg">
                                Contact Me
                            </Button>
                        </div>

                    </Col>

                    <Col
                        lg={5}
                        className="text-center"
                    >

                        <img
                            src={personal.profileImage}
                            alt={personal.name}
                            className={styles.profileImage}
                        />

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Hero;