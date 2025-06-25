import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
    return (
        <div id='services' className={styles.services_con}>
            <h3 className={styles.services_title}>My Abillities</h3>
            <div className={styles.services_list}>
                <div className={styles.services_items}>
                    <FaPaintbrush />
                    <h4>Frontend</h4>
                    <p>
                        Design websites and web apps as requested.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaCode />
                    <h4>Backend</h4>
                    <p>
                        Experience with API, Database and Microservice etc.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaDesktop />
                    <h4>Software Solutions</h4>
                    <p>
                        Design software to solve organizational and customer problems as requested.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
