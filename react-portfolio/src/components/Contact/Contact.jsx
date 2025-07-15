import React from 'react';

import styles from "./Contact.module.css";

export const Contact = () => {
  return ( 
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={"/assets/contact/emailIcon.png"} alt="Email icon" />
            <a href="mailto:vaishnaviub0815@email.com">vaishnaviub0815@email.com</a>
        </li>

        <li className={styles.link}>
            <img src={"/assets/contact/githubIcon.png"} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/vaishnavi-u-b-4080a8320/">linkedin.com/vaishnavi-u-b</a>
        </li>

        <li className={styles.link}>
            <img src={"/assets/contact/linkedinIcon.png"} alt="Github icon" />
            <a href="https://github.com/vaishnaviub">github.com/vaishaviub</a>
        </li>
    </ul>
  </footer>
  );
};


