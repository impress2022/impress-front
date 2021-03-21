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
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
}
