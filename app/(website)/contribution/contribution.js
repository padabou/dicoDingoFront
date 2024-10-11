import Container from "@/components/container";

export default function Contribution({ settings }) {

  return (
      <Container>
          <h1 className="mt-2 mb-3 text-3xl text-custom-grey font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Contribue avec nous à faire évoluer EQUIDICO
          </h1>
          <div className="text-center">
              <p className="text-lg">Envoie nous tes infos !</p>
          </div>

          <iframe src="https://app.youform.com/forms/fqa0mboi" loading="lazy" width="100%" height="700" frameBorder="0"
                  marginHeight="0" marginWidth="0"></iframe>

      </Container>
  );
}
