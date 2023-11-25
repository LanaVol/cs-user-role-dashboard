import Link from "next/link";
import { useRouter } from "next/router";

export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} tab ${
        router.asPath === href ? "tab-active" : ""
      }`}
    >
      {title}
    </Link>
  );
};
