import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>
          <Link href="/">
            <a>Button</a>
          </Link>
        </h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </nav>
  );
};

export default NavBar;
