"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  PanelsTopLeft,
  Package,
  Settings,
  ShoppingCart,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import styles from "./Navbar.module.css";

const icons = {
  home: House,
  dashboard: PanelsTopLeft,
  segments: UserRoundPlus,
  account: UserRound,
  settings: Settings,
  products: Package,
  profile: UserRound,
  cart: ShoppingCart,
};

const Navbar = ({ data }) => {
  const pathname = usePathname();

  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarMenu}>
          {data.map((item) => {
            const Icon = icons[item.icon];
            const isActive =
              item.url === "/"
                ? pathname === "/"
                : pathname === item.url || pathname.startsWith(`${item.url}/`);

            return (
              <div
                className={`${styles.navbarItem} ${isActive ? styles.active : ""}`}
                key={item.id}
              >
                <Link
                  href={item.url}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon aria-hidden="true" size={30} strokeWidth={1.9} />
                  <span>{item.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
