import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// ถ้าใช้ src/assets ให้ import ดังนี้
// import qrCode from '../assets/qr-code.png';

function Contact() {
    return (
        <div id='contact' className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        Please contact me using the information I have attached.
                    </p>
                    <p className={styles.contact_address}>
                        indy Srinakarin-Romklao<br />
                        278/110 soi romklao 24 <br />
                        Bangkok minburi 10510
                    </p>
                    <p><FaPhone /> (+66) 065 328 3823</p>
                    <p><FaEnvelope /> nuttawutsensith168283@gmail.com</p>
                </div>
                <div className={styles.contact_form} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <img
                        src="/qr-code.png"
                        // ถ้าใช้ import ให้ใช้ src={qrCode}
                        alt="Contact QR Code"
                        style={{ width: '250px', height: '250px', marginBottom: '20px', borderRadius: '16px', background: '#fff' }}
                    />
                    <p style={{ textAlign: 'center', color: '#fff', fontSize: '16px' }}>
                        Scan this QR code to contact me!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
