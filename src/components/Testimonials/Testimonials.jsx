import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Overall experience</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>2020 - 2021</p>
          <img src="/images/gravitech.png" alt="clients" />
          <h4>Trainee</h4>
          <p className={styles.bio}>GRAVITECH THAI (THAILAND)</p>
        </div>
        <div className={styles.testi_items}>
          <p>2022 - 2024</p>
          <img src="/images/forthems.jpg" alt="clients" />
          <h4>Test Engineer</h4>
          <p className={styles.bio}>Forth EMS Public Company Limited</p>
        </div>
        <div className={styles.testi_items}>
          <p>2024 - Current</p>
          <img src="/images/bmes.png" alt="clients" />
          <h4>Programmer</h4>
          <p className={styles.bio}>B.M.E. SOLUTIONS COMPANY LIMITED</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
