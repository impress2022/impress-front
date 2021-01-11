import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children, fluid, squares}) {
  return (
    <div>
      <Nav/>
      <main className="container mx-auto">
        {children}
      </main>
      {fluid &&
        <section>
          {fluid}
        </section>
      }
      {squares &&
        <section className="relative">
          {squares}
        </section>
      }
      <Footer/>
    </div>
  )
}