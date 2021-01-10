import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav/>
      <main className="container mx-auto">
        {children}
      </main>
      <Footer/>
    </div>
  )
}