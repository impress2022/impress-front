import Link from "next/link";

function Nav() {
  return (
    <div className="container mx-1 h-28">
      <nav className="flex justify-between items-center h-full">
        <div>
          <Link href="/"><a><img src="/images/Logo.svg" alt="Impress"/></a></Link>
        </div>
        <ul className="flex flex-row md:flex">
          <li>
            <Link href="/nasze-realizacje">
              <a>Nasze realizacje</a>
            </Link>
          </li>
          <li>
            <Link href="/co-robimy">
              <a>Co robimy</a>
            </Link>
          </li>
          <li>
            <Link href="/kim-jestesmy">
              <a>Kim jesteśmy</a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav