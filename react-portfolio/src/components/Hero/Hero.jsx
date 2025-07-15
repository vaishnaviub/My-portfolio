import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vaishnavi</h1>
                <p className={styles.description}>Motivated Security Analyst with skills in Flask, React, and Node.js, and a strong interest in network security, risk assessment, and secure development.
                     Seeking an entry-level role to contribute to safer digital systems. 
                     Reach out if you'd like to learn more!
                </p>
                <a href="mailto: vaishnaviub0815@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img 
                src={"/assets/hero/heroImage.png"} 
                alt="Hero image of me" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section> 
    );
};