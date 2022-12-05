import Link from "next/link";
import { Button } from "./styles";

interface GlobalButtonProps {
  text: string;
  href: string;
  variant: string;
}

export default function GlobalButton({
  text,
  href,
  variant,
}: GlobalButtonProps) {
  return (
    <Link href={href}>
      <Button variant={variant}>{text}</Button>
    </Link>
  );
}
