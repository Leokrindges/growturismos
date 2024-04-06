import { ButtonFormularioStyled } from "../styled/ButtonFormularioStyled";
import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { InputStyled } from "../styled/InputStyled";
import { LabelStyled } from "../styled/LabelStyled";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { TextArearStyled } from "../styled/TextAreaStyled";
import { TitleStyled } from "../styled/TitleStyled";
import { Formulario } from "./Formulario";

export function MainContato() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row justifyContent="center" alignItens="center" height="100%">
          <Column
            widht="280px"
            displayFlex="flex"
            flexDirection="column"
            alignItens="center"
            justifyContent="center"
          >
            <Formulario>
              <TitleStyled fontSize="1rem" fontWeight="600" texteAlign="center">
                Formulário
              </TitleStyled>
              <LabelStyled htmlFor="name">Nome:</LabelStyled>
              <InputStyled type="text" name="name" />

              <LabelStyled htmlFor="email">E-mail:</LabelStyled>
              <InputStyled type="email" name="email" />

              <LabelStyled htmlFor="phone">Telefone:</LabelStyled>
              <InputStyled type="text" name="phone" />

              <LabelStyled htmlFor="message">Mensagem:</LabelStyled>

              <TextArearStyled name="message" heigth="35px" />
              <ButtonFormularioStyled>Enviar</ButtonFormularioStyled>
            </Formulario>
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
