"use client";

import Container from "@/components/container";
import {useState} from "react";
import { Verify } from 'react-puzzle-captcha';
import 'react-puzzle-captcha/dist/react-puzzle-captcha.css';
import {postContact} from "@/lib/contact/publicClient";

export default function Contact({ settings }) {

  const [formData, setFormData] = useState({ name: "", email: "", message: "", cheatField: "", verify: "" });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const style = {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
    width: '100px',
    padding: '5px 20px',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#1991FA',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCaptcha(true); // Affiche la div captcha
  };

  const handleCaptchaSuccess = async (verify) => {
    setShowCaptcha(false);
    setIsSubmitSuccessful(false);
    setIsSuccess(false);
    setFormData({ ...formData, verify: verify });
    const form= { username: formData.name, email: formData.email, message: formData.message, cheatField: formData.cheatField, verify: verify }
    // Ensuite, tu peux envoyer le formulaire ici via fetch ou autre
    await postContact(form).then((res) => {
      if(res.status === 200) {
        setIsSubmitSuccessful(true);
        setIsSuccess(true);
        setMessage("Le message a été envoyé correctement")
      }
      else {
        setIsSubmitSuccessful(true);
        setIsSuccess(false);
        if(res.status === 400) {
          setMessage( "Le Captcha ne semble pas valide, veuillez réessayer");
        } else if(res.status === 406) {
          setMessage("Veuillez valider le formulaire");
        } else if(res.status === 425) {
          setMessage("Votre dernier envoi de message est trop récent, veuillez attendre avant de nous recontacter, nous répondrons le plus rapidement possible à votre dernier message.");
        } else {
          setMessage("Une erreur est survenu, notre équipe s'efforce de résoudre le problème");
        }
      }
    });
  };


  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">Nous sommes là pour vous aider.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10 px-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact equi dico
          </h2>
          <p className=" mt-5">
            Une question ? Un besoin ? Un message ?
            Ecrivez nous, on s'engage à vous répondre au plus vite.
          </p>

        </div>
        <div>
          {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Le message a été envoyé correctement"}
              </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Le Captcha ne semble pas valide, veuillez réessayer"}
              </div>
          )}
          <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-4"
          >
            <input
                type="text"
                name="name"
                placeholder="Votre nom"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            />
            <input
                type="hidden"
                name="cheatField"
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="message"
                placeholder="Votre message"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded h-32"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Envoyer
            </button>
          </form>
          {showCaptcha && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setShowCaptcha(false)}>
                <div className="bg-white p-8 rounded-lg max-w-md text-center space-y-4 shadow-lg z-[60]" onClick={() => setShowCaptcha(true)}>
                  <h3 className="text-xl font-bold">Vérification</h3>
                  <p>Veuillez compléter le captcha pour continuer</p>
                  <Verify
                      width={320}
                      height={160}
                      visible={showCaptcha}
                      onCustomverify={handleCaptchaSuccess}
                      onRefresh={() => alert('refresh')}
                  />
                </div>
              </div>
          )}

        </div>
      </div>
    </Container>
  );
}
