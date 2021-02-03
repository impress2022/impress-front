import Nav from "./nav";
import Footer from "./footer";

export default function Layout({
  children,
  fluid,
  fluidPhoto,
  titleSection,
  squares,
}) {
  return (
    <div>
      <Nav />
      {titleSection && (
        <section className="lg:container mx-7 md:mx-16 lg:mx-auto relative">
          {titleSection}
        </section>
      )}
      {fluidPhoto && <section>{fluidPhoto}</section>}
      <main className="lg:container mx-7 md:mx-16 lg:mx-auto">{children}</main>
      {fluid && <section>{fluid}</section>}
      {squares && <section className="relative">{squares}</section>}
      <Footer />
    </div>
  );
}
