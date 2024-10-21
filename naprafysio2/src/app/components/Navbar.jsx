import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-12">
      <ul>
        <li>
          <Link href="/">logo</Link>
        </li>
        <li className="font-open-sans">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
