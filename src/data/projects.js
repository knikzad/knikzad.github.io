import factcheckImage from "../assets/images/factcheck.png";
const projects = [
    {
        title: "FactCheck – Customizable Comparison Logic Framework",

        period: "University of Vienna | Mar 2026 – Jun 2026",

        description:
            "A full-stack framework that enables users to define customizable comparison formulas using a Domain-Specific Language (DSL). The system validates, stores, and securely executes formulas to compare heterogeneous data with explainable results.",

        technologies: [
            "Python",
            "FastAPI",
            "React",
            "MongoDB",
            "Docker",
            "Git"
        ],

        features: [
            "Domain-Specific Language (DSL)",
            "AST-based Validation Pipeline",
            "Syntax, Semantic & Safety Validation",
            "Secure AST Execution Engine",
            "Formula Versioning",
            "Execution History",
            "Explainable Results",
            "Confidence Scoring"
        ],

        github: "https://github.com/knikzad/factcheck-customizable-comparison-logic",

        report: "https://github.com/knikzad/factcheck-customizable-comparison-logic/blob/main/docs/Project-Report.pdf",

        presentation: "https://github.com/knikzad/factcheck-customizable-comparison-logic/blob/main/docs/Presentation.pdf",

        image: factcheckImage,
    }
];

export default projects;