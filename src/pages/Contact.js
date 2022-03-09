import styles from "pages/Contact.module.css";
import mapStyles from "pages/Reservation.module.css";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import headTitle from "pages/headTitle.module.css";
import NavBar from "components/NavBar.js";

function Contact(){
        const Captcha = () => {
        function onChange(value) {
            console.log('Captcha value:', value);
        }
        return (
        <div>
        <ReCAPTCHA
        sitekey="6LffFnceAAAAAC4QLkETG74jmni3w--UYiiHUaNl"
        onChange={onChange}
        />
        </div>
        );
    };
    return (
        <div>
            <br></br>
            <NavBar />
            <h1 className={headTitle.head}>CONTACT US</h1>

            <form className={styles.form} name="Contact" method="post" action="">
                    <label className={styles.contactForm}>
                    <span className={styles.contactName}>기업명/단체명</span>
                    <input className={styles.smallForm2}
                    type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    
                    <label className={styles.contactForm}>
                    <span className={styles.contactName}>&nbsp;이&nbsp;름&nbsp;</span>
                    <input className={styles.smallForm}
                    type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    <br></br><br></br>
                    
                    <label className={styles.contactForm}>
                    <span className={styles.contactName}>이메일 </span>
                    <input className={styles.smallForm}
                    type="email" name="contact_name1" maxlenght="30" required
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$"></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>

                    <label className={styles.contactForm}>
                    <span className={styles.contactName}>연락처 </span>
                    <input className={styles.smallForm} 
                    type="text" name="contact_name1" maxlenght="30" required></input> 
                    <hr id={styles.contactLine}></hr>
                    </label>
                    <br></br><br></br>

                    <label>
                    <span className={styles.contactName}>내용</span>
                    <br></br><br></br>
                        <textarea 
                        className={styles.textForm}
                        name="contact_contents"
                        cols="40" rows="5" required>
                        </textarea>
                    </label>
                    <br></br><br></br>

                    <hr id={styles.contactLine2}></hr>
                    <br></br>

                    <label className={styles.contactBox}>
                    <input type="checkbox" name="agree" required></input>
                    <span id={styles.contactagree}>개인정보동의서에 동의합니다.</span>
                    <span id={styles.contactLink}><Link to="/Privacy"> (약관보기)</Link></span>
                    </label>
                    <br></br><br></br>

                    <fieldset class={styles.recaptcha}>
                        <Captcha/>
                    </fieldset>
                    <br></br>

                    <input className={styles.contactSend} type="submit" value="Send" name="agreecheckbox"></input>
                    <br></br>
            </form>
            <iframe title="map" id={mapStyles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.3384205393681!2d126.95332677111733!3d37.49698945893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7df8977be9%3A0xd1c7d78efd30b86e!2z7ISc7Jq47Yq567OE7IucIOuPmeyekeq1rCDsg4Hrj4TroZw1Neq4uCA4!5e0!3m2!1sko!2skr!4v1642742362939!5m2!1sko!2skr"
            allowfullscreen=""
            loading="lazy"></iframe> 
        </div>
    );
}
export default Contact;