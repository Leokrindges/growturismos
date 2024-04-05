import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";

export function MainPlanos() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%">
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            EM DESENVOLVIMENTO
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            EM DESENVOLVIMENTO
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            EM DESENVOLVIMENTO
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
