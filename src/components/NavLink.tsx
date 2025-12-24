"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeClassName?: string;
  pendingClassName?: string; // kept for compatibility but Next.js doesn't expose a pending state like react-router
  end?: boolean; // if true, match exact path
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { to, className, activeClassName, end = false, children, ...props },
    ref
  ) => {
    const pathname = usePathname() || "/";
    const normalizedTo = to || "/";
    const isActive = end
      ? pathname === normalizedTo
      : pathname === normalizedTo ||
        pathname.startsWith(normalizedTo.replace(/\/$/, "") + "/");

    return (
      <Link
        href={to}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
