import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Introducing 6 projects</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project1.jpg" alt="coding" />
          </Tilt>
          <p>1️⃣ Nakonlottery</p>
          <p>Website for online lottery trading.</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project2.jpg" alt="coding" />
          </Tilt>
          <p>2️⃣ AOI300R Vision</p>
          <p>A program for recording data into a DB.</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project3.jpg" alt="coding" />
          </Tilt>
          <p>3️⃣ DE1 Requested</p>
          <p>Web app for coordination DE1 & etc.</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project4.jpg" alt="coding" />
          </Tilt>
          <p>4️⃣ DE1 Stock</p>
          <p>Web app for mini warehouse for DE1.</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project5.jpg" alt="coding" />
          </Tilt>
          <p>5️⃣ IoT Gateway - odoo backend</p>
          <p>Blood test machine backend system.</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="/images/project6.jpg" alt="coding" />
          </Tilt>
          <p>6️⃣ Stocknize AI</p>
          <p>Warehouse management with AI.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
