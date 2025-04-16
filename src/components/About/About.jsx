import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="me sitting with a laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Security Analyst</h3>
                            <p>Passionate about cybersecurity, I strive to learn and contribute to securing 
                                systems and mitigating risks.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Web Developer</h3>
                            <p>Skilled in building dynamic and responsive 
                                web applications using React, Node.js, and Flask.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};