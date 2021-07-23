import "./contact.scss";

export default function Contact() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="logo_svg" />
            </div>
            <div className="right">
                <h2>Contactez-moi:)</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" placeholder='Courriel' />
                    <textarea name="message" placeholder='Message' id="message" ></textarea>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        </div>
    )
}