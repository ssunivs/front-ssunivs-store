import headTitle from "pages/headTitle.module.css";
import styles from "pages/Contact.module.css";
import mapStyles from "pages/Reservation.module.css";

function Contact(){
    return (
        <div>
            <h1  className={headTitle.head}>Contact Us</h1>
            <form className={styles.form} method="post" action="">
                <fieldset>
                    <label className={styles.contactForm}>
                    기업명(단체명) <input type="text" name="contact_name1" autoFocus></input>
                    </label>
                    <label className={styles.contactForm}>
                    이름 <input type="text" name="contact_name2" required></input>
                    </label>
                    <label className={styles.contactForm}>
                    이메일 <input type="text" name="contact_email" required></input>
                    </label>
                    <label className={styles.contactForm}>
                    연락처 <input type="text" name="contact_num" required></input>
                    </label>
                    <label className={styles.contactForm}>
                    <textarea className={styles.contactForm} name="contace_contents" required
                        placeHolder="내용을 입력해주세요." cols="50" rows="5"></textarea>
                    </label>
                    <input className={styles.contactForm}
                    type="submit" value="보내기"></input>
                </fieldset>
            </form>

            <iframe title="map" id={mapStyles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.3384205393681!2d126.95332677111733!3d37.49698945893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7df8977be9%3A0xd1c7d78efd30b86e!2z7ISc7Jq47Yq567OE7IucIOuPmeyekeq1rCDsg4Hrj4TroZw1Neq4uCA4!5e0!3m2!1sko!2skr!4v1642742362939!5m2!1sko!2skr"
            allowfullscreen=""
            loading="lazy"></iframe>  
        </div>
    );
}

export default Contact;