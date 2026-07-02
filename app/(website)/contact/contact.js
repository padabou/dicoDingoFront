"use client";

import Container from "@/components/container";
import { useState } from "react";
import { postContact } from "@/lib/contact/publicClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    cheatField: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccessful(false);
    setIsSuccess(false);

    const form = {
      username: formData.name,
      email: formData.email,
      message: formData.message,
      cheatField: formData.cheatField
    };

    try {
      const res = await postContact(form);
      setIsSubmitSuccessful(true);

      if (res.status === 200) {
        setIsSuccess(true);
        setMessage("Le message a été envoyé correctement");
        setFormData({ name: "", email: "", message: "", cheatField: "" });
      } else {
        setIsSuccess(false);
        if (res.status === 406) {
          setMessage("Veuillez valider le formulaire");
        } else if (res.status === 425) {
          setMessage(
            "Votre dernier envoi de message est trop récent, veuillez attendre avant de nous recontacter, nous répondrons le plus rapidement possible à votre dernier message."
          );
        } else {
          setMessage(
            "Une erreur est survenue, notre équipe s'efforce de résoudre le problème"
          );
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <h1 className="text-brand-primary mt-2 mb-3 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">Nous sommes là pour vous aider.</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10 px-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact equi dico
          </h2>
          <p className="mt-5">
            Une question ? Un besoin ? Un message ? Ecrivez nous, on
            s&apos;engage à vous répondre au plus vite.
          </p>
        </div>
        <div>
          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-center text-sm text-green-500">
              {message || "Le message a été envoyé correctement"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-center text-sm text-red-500">
              {message || "Une erreur est survenue, veuillez réessayer"}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-4 rounded-lg bg-white p-8 shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border p-2"
            />
            <input
              type="text"
              name="cheatField"
              value={formData.cheatField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              className="h-32 w-full rounded border p-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
