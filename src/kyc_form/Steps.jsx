import React, { useState, useEffect, useRef } from "react";
import styles from "./Steps.module.css";
import { Link } from "react-router-dom"; // Import Link for routing

const Steps = () => {
    const [showSteps, setShowSteps] = useState(false); // State to control visibility

    // Define steps array with the correct step data
    const steps = [
        {
            number: 1,
            title: "Verification",
            content: "Authenticate identities with secure methods.",
            link: "/user", // Add link for step 1
        },
        {
            number: 2,
            title: "KYC",
            content: "Verify customer information for compliance",
            link: "/kyc", // Add link for step 2
        },
        {
            number: 3,
            title: "Transaction",
            content: "Process secure payments and transfers",
            link: "/transaction", // Add link for step 3
        },
        {
            number: 4,
            title: "Coming Soon",
            content: "More steps will be added soon",
            link: "", // Add link for step 4 (if any)
        },
    ];

    const stepRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.fadeInUp);
                } else {
                    entry.target.classList.remove(styles.fadeInUp);
                }
            });
        }, options);

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.stepsContainer}>
            <h1>Our Service</h1>
            <div className={styles.stepsWrapper}>
                {steps.map((step, index) => (
                    <div key={step.number} className={styles.stepRow}>
                        <div
                            className={`${styles.step} ${styles.sideBySide} ${
                                // Add logic to conditionally hide specific steps, if necessary
                                step.number === 4 ? styles.hidden : ""
                            }`}
                            ref={(el) => (stepRefs.current[index] = el)}
                        >
                            <div className={styles.stepNumber}>
                                {/* Add Link for each step */}
                                {step.link ? (
                                    <Link to={step.link}>{step.number}</Link>
                                ) : (
                                    <span>{step.number}</span> // No link if no destination
                                )}
                            </div>
                            <div className={styles.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.content}</p>
                            </div>
                        </div>
                        {index !== steps.length - 1 && <div className={styles.verticalLine}></div>} {/* Add vertical line except after last step */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
