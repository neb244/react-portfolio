import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contacts</h2>
      <p>N'hésitez pas à prendre contact pour plus d'informations !</p>
    </div>
        <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:ezaabouji.zineb@outlook.com">ezaabouji.zineb@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn"
          />
          <a href="https://www.linkedin.com/in/zineb-e-6836a52b1/">linkedin.com/Zineb Ez.</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
          <a href="https://github.com/neb244">github.com/neb244</a>
        </li>
      </ul>
  </footer>
  );
};
