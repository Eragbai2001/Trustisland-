"use client";

import type { CSSProperties, ReactNode } from "react";
import type { Filter } from "@/content/site";

export const FILTER_EVENT = "ti:filter";

/** A link to the phone catalogue that also picks a filter there. */
export function FilterLink({
  href,
  filter,
  className,
  style,
  children,
  ...rest
}: {
  href: string;
  filter?: Filter;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "data-reveal"?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={() => {
        if (filter) window.dispatchEvent(new CustomEvent<Filter>(FILTER_EVENT, { detail: filter }));
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
