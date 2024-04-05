import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { Card } from "./Card";
import ImageHospedagem from "../../assets/hotel.svg";
import ImageRoteiro from "../../assets/roteiro.svg";
import ImagePacotes from "../../assets/viagens.svg";

export function MainServicos() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%">
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImageHospedagem} alt="" />
              <h2>Hospedagem</h2>
            </Card>
          </Column>
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImageRoteiro} alt="" />
              <h2>Roteiros</h2>
            </Card>
          </Column>
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImagePacotes} alt="" />
              <h2>Pacotes</h2>
            </Card>
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
