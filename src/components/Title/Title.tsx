import { Text } from "./styles";

interface TitleProps {
  textPrimary: string;
  textSecondary: string;
}

export default function Title({ textPrimary, textSecondary }: TitleProps) {
  return (
    <Text>
      {textPrimary} <span>{textSecondary}</span>
    </Text>
  );
}
