import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let linkStyles = " hover:underline   "
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
      <Link href="./week-2" className={linkStyles}>week 2 assignment</Link>
      </li>
      <li>
      <Link href="./week-3/" className={linkStyles}>week 3 - assignment</Link>
      </li>
      <li>
      <Link href="./week-4/" className={linkStyles}>week 4 - assignment</Link>
      </li>
      <li>
      <Link href="./week-5/" className={linkStyles}>week 5 - assignment</Link>
      </li>
      </ul>

    </main>
  );
}
