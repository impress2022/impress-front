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
        <section className="lg:container mx-7 md:mx-16 lg:mx-auto relative">
          {titleSection}
        </section>
      )}
      {fluidPhoto && <section>{fluidPhoto}</section>}
      <main className="mx-7 md:mx-16 lg:mx-7.5r" style={{ overflow: overflow ? "hidden" : "visible" }}>{children}</main>
      {fluid && <section>{fluid}</section>}
      {squares && <section className="relative">{squares}</section>}
      <Footer menu={menu} />
    </div>
  );
}
