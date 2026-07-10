import { Container, Row, Col, Button } from "react-bootstrap";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaEnvelope,
} from "react-icons/fa";

import personal from "../../data/personal";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <Container>

                <Row className="align-items-center">

                    <Col lg={7}>

                        <span className={styles.badge}>
                            👋 Available for Backend Software Engineer | Full-Stack Developer Roles
                        </span>

                        <h1 className={styles.title}>
                            {personal.name}
                        </h1>

                        <h2 className={styles.role}>
                            {personal.title}
                        </h2>

                        <p className={styles.description}>
                            Backend Software Engineer with 8+ years of professional experience building scalable backend systems, REST APIs, and full-stack web applications using Python, FastAPI, Django, React, Docker, and modern software engineering practices.
                        </p>
                        <div className={styles.buttons}>

                            <Button
                                size="lg"
                                as="a"
                                href="https://knikzad.github.io/assets/documents/Khalifa_Nikzad_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDownload />
                                Download CV
                            </Button>

                            <Button
                                variant="outline-dark"
                                size="lg"
                                as="a"
                                href="https://github.com/knikzad"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                GitHub
                            </Button>

                            <Button
                                variant="outline-primary"
                                size="lg"
                                as="a"
                                href="https://www.linkedin.com/in/knikzad/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </Button>

                            <Button
                                variant="outline-secondary"
                                size="lg"
                                as="a"
                                href="mailto:khalifah.nikzad@gmail.com"
                            >
                                <FaEnvelope />
                                Email
                            </Button>

                        </div>


                    </Col>

                    <Col lg={5} className="text-center">

                        <div className={styles.photoWrapper}>

                            <img
                                src={personal.profileImage}
                                alt={personal.name}
                                className={styles.profileImage}
                            />

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default Hero;