import styles from "pages/Contact.module.css";
import mapStyles from "pages/Reservation.module.css";
import {Link} from "react-router-dom";

function Contact(){
    return (
        <div>
            <br></br>
            <h1 className={styles.contact_head}>Contact</h1>
            <form className={styles.form} method="post" action="">

                    <label className={styles.contactForm}>
                    기업명 <input type="text" name="contact_name1" maxlenght="30" autoFocus></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    
                    <label className={styles.contactForm}>
                    이름 <input type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    <br></br><br></br>
                    
                    <label className={styles.contactForm}>
                    이메일 <input type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>

                    <label className={styles.contactForm}>
                    연락처 <input type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    <br></br><br></br>

                    <label className={styles.contactForm}>
                    내용<br></br><br></br>
                    <textarea className={styles.contactForm} name="contact_contents" required cols="173" rows="10"></textarea>
                    </label>
                    <br></br><br></br>
                    <hr id={styles.contactLine2}></hr>
                    <br></br>
                    <label className={styles.contactBox}><input type="checkbox"></input>개인정보동의서에 동의합니다.<span id={styles.contactLink}><Link to="/Privacy"> (약관보기)</Link></span></label>
                    <input className={styles.contactSend}
                    type="submit" value="Send"></input>
                    <br></br>
            </form>
            <hr></hr>

            <iframe title="map" id={mapStyles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.3384205393681!2d126.95332677111733!3d37.49698945893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7df8977be9%3A0xd1c7d78efd30b86e!2z7ISc7Jq47Yq567OE7IucIOuPmeyekeq1rCDsg4Hrj4TroZw1Neq4uCA4!5e0!3m2!1sko!2skr!4v1642742362939!5m2!1sko!2skr"
            allowfullscreen=""
            loading="lazy"></iframe> 
        </div>
    );
}

export default Contact;