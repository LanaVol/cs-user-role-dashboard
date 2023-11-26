import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * CustomLink component for rendering a link with styling based on the current route.
 *
 * @component
 *
 * @param {Object} props - The properties of the CustomLink component.
 * @param {string} props.href - The URL to navigate to.
 * @param {string} props.title - The text content of the link.
 * @param {string} [props.className=""] - Additional CSS classes for styling.
 *
 * @returns {React.Component} Returns the CustomLink component.
 */
export const CustomLink = memo(({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} tab cursor-pointer ${
        router.asPath === href ? "tab-active" : ""
      }`}
    >
      {title}
    </Link>
  );
});
