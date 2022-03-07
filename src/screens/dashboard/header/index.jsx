import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HeaderWrapper } from "./header.styles";

const links = [
  {
    name: "All",
    to: "/",
  },
  {
    name: "Finance",
    to: "/dashboard/finance",
  },
  {
    name: "Technology",
    to: "/dashboard/technology",
  },
  {
    name: "Clothing",
    to: "/dashboard/clothing",
  },
  {
    name: "Energy",
    to: "/dashboard/energy",
  },
  {
    name: "Healthcare",
    to: "/dashboard/healthcare",
  },
  {
    name: "Travel",
    to: "/dashboard/travel",
  },
  {
    name: "Media",
    to: "/dashboard/media",
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      {links?.map(({ name, to }) => {
        const classname = router.asPath === to ? "active" : "";
        return (
          <li className={classname} key={name}>
            <Link href={to}>{name}</Link>
          </li>
        );
      })}
    </HeaderWrapper>
  );
};

export default Header;
