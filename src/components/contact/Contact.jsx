import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [erreur, setErreur] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErreur('');

        //Verification du email
        let regExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$", "i");
        if (!regExp.test(email.trim())) {
            setErreur('Veuillez entrer un courriel valide.')
            return
        }

        //Verification du message
        if (message === "" || message.length > 250) {
            setErreur('Vous devez entrer un message valide')
            return
        }

        setIsLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append(encodeURIComponent("email"), encodeURIComponent(email));
        urlencoded.append(encodeURIComponent("message"), encodeURIComponent(message));
        //Permet de faire la requete
        fetch("https://guillaumeartiste3d.ca/wp-json/api/send", {
            method: "POST",
            headers: myHeaders,
            body: urlencoded.toString(),
            redirect: 'follow'
        }).then((response) => (response.json())).then((data) => console.log(data)).catch((error) => console.log(error)).finally(() => { setIsLoading(false) });

    }


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="logo_svg" />
            </div>
            <div className="right">
                <h2>Contactez-moi:)</h2>
                {!isLoading ? (
                    <form onSubmit={handleSubmit}>
                        {response !== '' && <span style={{ color: 'green' }}>{response}</span>}
                        {erreur !== '' && <span style={{ color: 'red', fontWeight: 600 }}>{erreur}</span>}
                        <input type="email" name="email" id="email" placeholder='Courriel' value={email} onChange={e => setEmail(e.target.value)} />
                        <textarea name="message" placeholder='Message' id="message" value={message} onChange={e => setMessage(e.target.value)}> </textarea>
                        <span style={{ color: message.length > 250 ? 'red' : 'black' }}>({message.length}/250)</span>
                        <button type='submit'>Envoyer</button>
                    </form>
                ) : (
                    <>
                        <img src='https://guillaumeartiste3d.ca/wp-content/uploads/Hourglass.gif' alt='Loading_gif'></img>
                        <span style={{ textAlign: 'center' }}>Un moment svp.</span>
                    </>
                )}
            </div>
        </div>
    )
}