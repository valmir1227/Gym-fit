import Link from "next/link";
import { useRouter } from "next/router";
import { Li } from "./styles";

interface NavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: NavLinkProps) {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "#9258f9" : "",
  };

  return (
    <Link href={href}>
      <Li style={style}>{text}</Li>
    </Link>
  );
}
