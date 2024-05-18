import React from 'react';
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id ="about">
        <h2 className={styles.title}>À propos</h2>
        <div className= {styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.png.png")} 
            alt="Image" className={styles.aboutImage}
             />
             <ul className={styles.aboutItems}>
             <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Front-end </h3>
                        <p>
                        Développeuse orientée Front-end passionnée par la création d'interfaces utilisateur interactives et esthétiques.                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
                    <div className={styles.aboutItemtext}>
                        <h3>Back-end</h3>
                        <p>
                        Manipulation des APIs et des bases de données.                        </p>
                    </div>
                </li> 
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
                    <div className={styles.aboutItemtext}>
                        <h3>UI design</h3>
                        <p>
                        Visualisation et conception d'interfaces utilisateur attrayantes à l'aide de l'outil Figma.
                        </p>
                    </div>
                </li>
             </ul>
        </div>
    </section>
  )
}
