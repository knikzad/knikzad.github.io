import demoVideo from "../assets/videos/demo.mp4";
import {
    TbLanguage,
    TbBinaryTree2,
    TbShieldCheck,
    TbCpu,
    TbHistory,
    TbChartDots
} from "react-icons/tb";

const projects = [
    {
        title: "FactCheck – Customizable Fact Comparison Logic Framework",

        description:
            "Designed and developed a full-stack framework that enables domain experts to define how facts from different data sources should be compared without modifying application code. The framework introduces a Domain-Specific Language (DSL) for creating customizable comparison formulas, which are validated, versioned, stored, and securely executed through an AST-based validation and execution pipeline to produce explainable comparison results with confidence scoring.",

        technologies: [
            "Python",
            "FastAPI",
            "React",
            "MongoDB",
            "Docker",
            "Git"
        ],

        components: [

            {
                icon: TbLanguage,
                title: "Domain-Specific Language",
                description:
                    "Designed a custom language that enables domain experts to define fact comparison formulas without modifying application code."
            },

            {
                icon: TbBinaryTree2,
                title: "AST-Based Processing",
                description:
                    "Implemented lexical analysis, parsing, and Abstract Syntax Tree (AST) generation to safely interpret and execute comparison formulas."
            },

            {
                icon: TbShieldCheck,
                title: "Validation Pipeline",
                description:
                    "Built syntax, semantic, and safety validation to detect errors before formula storage and execution."
            },

            {
                icon: TbCpu,
                title: "Execution Engine",
                description:
                    "Executed validated formulas through a secure evaluation engine backed by a reusable function registry."
            },

            {
                icon: TbHistory,
                title: "Formula Versioning",
                description:
                    "Supported storing, updating, and versioning formulas to ensure traceability and maintainability."
            },

            {
                icon: TbChartDots,
                title: "Explainable Results",
                description:
                    "Generated transparent comparison results with confidence scoring, improving interpretability and trust."
            }

        ],

        github:
            "https://github.com/knikzad/factcheck-customizable-comparison-logic",

        report:
            "https://knikzad.github.io/assets/documents/Technical_Report.pdf",

        presentation:
            "https://knikzad.github.io/assets/documents/Project_Presentation.pdf",

        demo: demoVideo,
    }
];

export default projects;