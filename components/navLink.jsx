import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ children, className, href }) {
  className = className ?? ""
  const { pathname } = useRouter();
  href == pathname && (className += " active");

  return (
    <li className={className}>
      <Link href={href ?? ""} className={className}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
