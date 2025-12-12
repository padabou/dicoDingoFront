import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights reserved. <Link className={"aspect-square"} href={`/mentions-legales`}>Mentions légales</Link> - <Link className={"aspect-square"} href={`/politique-de-confidentialite`}>Politique de confidentialité</Link> - <Link className={"aspect-square"} href={`/about`}>A propos de nous</Link> - <Link className={"aspect-square"} href={`/contact`}>Contactez-nous</Link>
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
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
        <ThemeSwitch />
      </div>
        <div className="bg-white dark:bg-red-500 p-10">
            Test Dark Mode
        </div>
    </Container>
  );
}
