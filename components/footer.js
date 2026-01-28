import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
      <>
         <footer className="bg-custom-sauge-green mt-12 pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 border-b border-gray-700 pb-8 mb-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-blue">Liens utiles</h4>
                <ul className="space-y-2 text-sm text-gray-30 list-none">
                  <li><a href={`/contact`} className="hover:text-custom-red font-medium">Contact</a></li>
                  <li><a href={`/contribution`} className="hover:text-custom-red font-medium">Contribuer</a></li>
                  <li><a href={`/about`} className="hover:text-custom-red font-medium">A propos</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-blue">Mentions Légales</h4>
                <ul className="space-y-2 text-sm text-gray-50 list-none">
                  <li><a href={`/mentions-legales`} className="hover:text-custom-red font-medium">CGU</a></li>
                  <li><a href={`/politique-de-confidentialite`} className="hover:text-custom-red font-medium">Politique de Confidentialité</a></li>
                </ul>
              </div>
              {/*
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-sauge-green">Réseaux Sociaux</h4>
                <div className="flex space-x-3 text-xl">
                  <a href="#" className="hover:text-custom-blue">📘</a>
                  <a href="#" className="hover:text-custom-blue">📸</a>
                  <a href="#" className="hover:text-custom-blue">🐦</a>
                </div>
              </div>
              */}
            </div>

            <div className="flex justify-between items-center flex-col md:flex-row text-center md:text-left">
              <p className="text-sm text-gray-30 mb-2 md:mb-0 font-medium">
                Copyright &copy; {new Date().getFullYear()} {props?.copyright}. Tous droits réservés
              </p>
              <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-50 dark:text-gray-600">
                <ThemeSwitch/>

                <span>
              {" "}
                  Made by{" "}
                  {/*  // ** 🙏  Can I ask you a favor? 🙏 **
                // Please do not remove the below link.
               // It helps us to grow & continue our work. Thank you.
              // OR Purchase PRO version for commercial license.  */}
                  <a
                      href="https://web3templates.com/?ref=stablo-template"
                      rel="noopener"
                      target="_blank">
                &#x2661;
              </a>
            </span>

              </div>
              <div className="text-xl font-bold flex items-center">
                <span className="text-2xl mr-1 text-custom-red">🐴</span> ÉQUIDICO
              </div>
            </div>

          </div>

        </footer>

      </>
  );
}
