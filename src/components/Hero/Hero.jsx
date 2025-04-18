import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vaishnavi</h1>
                <p className={styles.description}>👨‍💻 Security Analyst & Frontend Developer
                Skilled in Flask, React, Node.js ⚡ Passionate about network security, security policies, and risk management 
                🛡️ Seeking an entry-level cybersecurity role to help build a safer digital world! 🚀.
                     Reach out if you'd like to learn more! 
                </p>
                <a href="mailto:vaishnaviub0815@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img 
                src={getImageUrl("hero/heroImage.png")} 
                alt="Hero image of me" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section> 
    );
};