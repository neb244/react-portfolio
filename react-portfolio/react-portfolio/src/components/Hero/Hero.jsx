import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hey, c'est Zineb !
        </h1>
        <p className={styles.description}>
        Passionnée de codage et de design, j'aime créer des interfaces utilisateur attrayantes et fonctionnelles ! 
             </p>
             <a href="mailto:ezaabouji.zineb@outlook.com" className={styles.contactBtn}>Me contacter 📧</a>
    </div>
    <img src={getImageUrl("hero/cerclehey2.png")} alt="Image" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
}
