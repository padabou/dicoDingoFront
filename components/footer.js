import ThemeSwitch from "@/components/themeSwitch";
import { buildExploreLinks } from "@/lib/navLinks";

export default function Footer({ types, copyright }) {
  const exploreLinks = buildExploreLinks(types);

  return (
      <>
         <footer className="bg-custom-sauge-green mt-12 pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

            <div className="grid grid-cols-1 gap-8 border-b border-white/30 pb-8 mb-6 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-clear-blue">Explorer</h4>
                <ul className="space-y-2 text-sm text-white list-none">
                  {exploreLinks.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-clear-blue">Liens utiles</h4>
                <ul className="space-y-2 text-sm text-white list-none">
                  <li><a href={`/contact`} className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white">Contact</a></li>
                  <li><a href={`/contribution`} className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white">Contribuer</a></li>
                  <li><a href={`/about`} className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white">A propos</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-custom-clear-blue">Mentions Légales</h4>
                <ul className="space-y-2 text-sm text-white list-none">
                  <li><a href={`/mentions-legales`} className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white">CGU</a></li>
                  <li><a href={`/politique-de-confidentialite`} className="font-medium text-white underline-offset-2 hover:underline hover:text-custom-broken-white">Politique de Confidentialité</a></li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center flex-col md:flex-row text-center md:text-left">
              <p className="text-sm text-white mb-2 md:mb-0 font-medium">
                Copyright &copy; {new Date().getFullYear()} {copyright || "ÉQUIDICO"}. Tous droits réservés
              </p>
              <div className="mt-1 flex justify-center gap-1 text-center text-sm text-white">
                <ThemeSwitch/>

                <span>
              {" "}
                  Made by{" "}
                  <a
                      href="https://web3templates.com/?ref=stablo-template"
                      rel="noopener"
                      target="_blank"
                      className="text-white hover:underline">
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
