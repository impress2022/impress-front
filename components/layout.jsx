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
        <section className="container mx-auto px-4">{titleSection}</section>
      )}
      {fluidPhoto && <section>{fluidPhoto}</section>}
      <main className="container mx-auto px-4">{children}</main>
      {fluid && <section>{fluid}</section>}
      {squares && <section className="relative">{squares}</section>}
      <Footer />
    </div>
  );
}
