import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLine, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, its' me</p>
            <h3 className={styles.text_2}>Nuttawut Sensith</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: '10px' }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  'Programmer',
                  1000,
                  'Software Developer',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>Hi, my name is nuttawut sensith. I love building web applications and have experience<br />  in both frontend and backend development. I would like to join your team as either <br /> a Backend or Software Developer.</p>
            <ul className={styles.hero_social}>
              <li><a href="#"><FaGithub /></a></li>
              <li><a href="#"><FaLine /></a></li>
              <li><a href="#"><FaFacebookF /></a></li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
