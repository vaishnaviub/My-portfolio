import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
    return ( 
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills | Certificates</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skills, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={(skills.imageSrc)} alt={skills.title} />
                        </div>
                        <p>{skills.title}</p>
                    </div> 
                    );               
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                        <li key={id} className={styles.historyItem}>
                            <img 
                                src={(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} Logo`} 
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation} `}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate} `}</p>
                                <ul>
                                    {historyItem.experiences.map((Experience, id) => {
                                        return <li key={id}>{Experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
    );
};