import Link from "next/link";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const links = [
    { id: 1, link: "season" },
    { id: 2, link: "leagues" },
    { id: 3, link: "rules" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900 fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="/">
            F1 Fantasy
          </Link>
        </h1>
      </div>

      <ul className="hidden sm:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="cursor-pointer pr-4 z-10 text-gray-500 sm:hidden">
        {<FaBars size={30} />}
      </div>
    </div>
  );
}
