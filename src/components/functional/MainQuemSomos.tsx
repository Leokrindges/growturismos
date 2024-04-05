import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { ParagraphStyled } from "../styled/Paragraph";
import { Row } from "../styled/Row";
import Image from "../../assets/aeroporto.svg";


export function MainQuemSomos(){
    return(
        <MainStyled>
            <Container heigth="100%">
        <Row height="100%">
          <Column
            displayFlex="flex"
            alignItens="center"
            height="100%"
            widht="350px"
          >
            <img src={Image} alt="" />
          </Column>
          <Column
            displayFlex="flex"
            flexDirection="column"
            height="100%"
            widht="350px"
            justifyContent="center"
          >
            
            <h1>| Quem Somos</h1>
            <ParagraphStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit, illo aperiam ducimus molestias accusamus nulla consectetur voluptatibus quos vero dolore deleniti quaerat id voluptatem praesentium quisquam ea voluptatum repellendus?</ParagraphStyled>
          </Column>
        </Row>
      </Container>
        </MainStyled>
    )
}