import Link from "next/link";
import { open_Sans } from "../fonts";

export default function Navbar() {
  return (
    <nav className="py-12">
      <ul>
        <li className={`${open_Sans.className}`}>
          <Link href="/">logo</Link>
        </li>
        <li className="font-open-sans">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
