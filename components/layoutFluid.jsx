import Nav from "./nav";
import Footer from "./footer";
import CookieConsent from "react-cookie-consent";

export default function LayoutFluid({
  children,
  fluid,
  fluidPhoto,
  titleSection,
  squares,
  overflow,
  menu,
}) {
  return (
    <div>
      {menu && <Nav menu={menu} />}
      {titleSection && (
        <section className="mx-7 md:mx-16 lg:mx-7.5r relative">
          {titleSection}
        </section>
      )}
      {fluidPhoto && <section>{fluidPhoto}</section>}
      <main style={{ overflow: overflow ? "hidden" : "visible" }}>{children}</main>
      {fluid && <section>{fluid}</section>}
      {squares && <section className="relative">{squares}</section>}
      <Footer menu={menu} />
      <CookieConsent
        location="none"
        buttonText="Rozumiem i akceptuję"
        cookieName="impress-cookie-policy"
        style={{ boxShadow: '-10px 10px 0px 0px rgba(0,0,0,0.1)', background: "#202222", fontFamily: 'Encode Sans', position: 'fixed', left: 0, bottom: 0, maxWidth: '590px', padding: '30px', margin: '40px' }}
        buttonStyle={{ background: 'none', color: "#FFF", fontFamily: 'Aller', fontSize: "16px" }}
        expires={93}
      >
        Korzystając z naszej strony wyrażasz zgodę na wykorzystywanie przez nas plików cookies, w celu poznania twoich preferencji na podstawie zachowań na tej stronie. Szczegóły: <a style={{ fontWeight: 'bold'}}
                                                                                                                                                                                       href={process.env.NEXT_PUBLIC_FRONT_URL + 'polityka-prywatnosci'}>Polityka prywatności</a>, <a style={{ fontWeight: 'bold'}}
                                                                                                                                                                                                                                                                                      href={process.env.NEXT_PUBLIC_FRONT_URL + 'rodo'}>RODO</a>.
      </CookieConsent>
    </div>
  );
}
