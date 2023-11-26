import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
