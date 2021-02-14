import Nav from "./nav";
import Footer from "./footer";

export default function Layout({
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
      <Footer menu={menu} />
    </div>
  );
}
