"use client";

import Container from "@/components/container";
import {useState} from "react";
import { Verify } from 'react-puzzle-captcha';
import 'react-puzzle-captcha/dist/react-puzzle-captcha.css';

export default function Contact({ settings }) {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleCaptchaSuccess = () => {
    setShowCaptcha(false);
    setIsSubmitSuccessful(false);
    setIsSuccess(false);
    // Ensuite, tu peux envoyer le formulaire ici via fetch ou autre
    alert("Formulaire validé après captcha !");
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
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact equi dico
          </h2>
          <p className="max-w-sm mt-5">
            Quelque chose à dire ? Nous sommes là pour vous aider. Remplissez le formulaire, nous vous répondrons
            dans les plus bref délais.
          </p>

        </div>
        <div>
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
                      onSuccess={() => alert('success')}
                      onFail={() => alert('fail')}
                      onRefresh={() => alert('refresh')}
                  />
                </div>
              </div>
          )}
          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
