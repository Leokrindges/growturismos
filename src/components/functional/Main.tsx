import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import Image from "../../assets/home.svg";
import { ParagraphStyled } from "../styled/Paragraph";
import { ButtonStyled } from "../styled/ButtonStyled";

export function Main() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%">
          <Column
            displayFlex="flex"
            flexDirection="column"
            height="100%"
            widht="350px"
            justifyContent="center"
          >
            <h1>GrowTravel</h1>
            <ParagraphStyled>O melhor serviço para você!</ParagraphStyled>
            <ButtonStyled>Saiba mais!</ButtonStyled>
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            height="100%"
            widht="350px"
          >
            <img src={Image} alt="" />
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
