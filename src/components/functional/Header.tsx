import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { HeaderStyled } from "../styled/HeaderStyled";
import { Row } from "../styled/Row";
import { LinkStyled } from "../styled/LinkStyled";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyled>
      <Container heigth="100%">
        <Row alignItens="center" height="100%">
          <Column widht="59%">
            <LinkStyled fontSize="1.3rem" color="#fff" as={Link} to="/">
              GrowTravel
            </LinkStyled>
          </Column>
          <Column>
            <LinkStyled as={Link} to="/quem-somos">
              Quem Somos
            </LinkStyled>
            <LinkStyled as={Link} to="/servicos">
              Serviços
            </LinkStyled>
            <LinkStyled as={Link} to="/planos">
              Planos
            </LinkStyled>
            <LinkStyled as={Link} to="/contatos">
              Contato
            </LinkStyled>
          </Column>
        </Row>
      </Container>
    </HeaderStyled>
  );
}
