import { Link } from "react-router-dom";
import "./styles/Contact.css"
import { useMain } from "../contexts/MainContext";

function Contact() {
    const { playSound } = useMain();

    return (
    <>
    <div className="homepage_title">
        <img
        className="title-img contact_title"
          src="../assets/images/title.png"
          alt=""
        />
        <p className="title_label team">ProtoJam 2024 !</p>
        </div>
        <div className="contact">
        <form action="">
        <Link to="/">
        <div className="btn_small contact_return" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
            <h1>CONTACT</h1>
            <div className="header_form">
            <div className="form">
            <label htmlFor="name" id="name">Votre nom :</label>
            <input type="text" />
            </div>
            <div className="form">
            <label htmlFor="email" id="email">Votre e-mail :</label>
            <input type="text" />
            </div>
            </div>
            <div className="form_msg">
            <label htmlFor="message">Votre message :</label>
            <textarea name="message" id="" rows="5" cols="50"></textarea>
            </div>
            <div>
                <button className="btn_form">Envoyer</button>
            </div>
        </form>
        </div>
    </>
    )
}

export default Contact;