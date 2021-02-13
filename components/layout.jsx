import Nav from "./nav";
import Footer from "./footer";

export default function Layout({
  children,
  fluid,
  fluidPhoto,
  titleSection,
  squares,
  overflow,
}) {
  return (
    <div>
      <Nav />
      {titleSection && (
        <section className="container mx-auto px-4 md:px-8 relative">
          {titleSection}
        </section>
      )}
      {fluidPhoto && <section>{fluidPhoto}</section>}
      <main
        className="container mx-auto px-4"
        style={{ overflow: overflow ? "hidden" : "visible" }}
      >
        {children}
      </main>
      {fluid && <section>{fluid}</section>}
      {squares && <section className="relative">{squares}</section>}
      <Footer />
    </div>
  );
}
