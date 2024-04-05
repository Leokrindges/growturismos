import { ButtonCardStyled } from "../styled/ButtonCardStyled";
import { CardStyled } from "../styled/CardStyled";

interface CardProps {
  children: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <CardStyled displayFlex="flex" alignItens="center" justifyContent="center" flexDirection="column">
      {props.children}
      <ButtonCardStyled>Saiba mais!</ButtonCardStyled>
    </CardStyled>
  );
}
