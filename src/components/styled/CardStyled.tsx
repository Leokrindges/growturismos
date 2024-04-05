import styled from "styled-components";

interface CardStyled {
  displayFlex?: "flex" | "block";
  alignItens?: "start" | "center" | "end";
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
  justifyContent?: "start" | "center" | "end";
}

export const CardStyled = styled.div<CardStyled>`
  width: 100%;
  height: 200px;
  display: ${(props) => props.displayFlex ?? "block"};
  align-items: ${(props) => props.alignItens};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent};
  gap: 10px;

  h2 {
    font-size: 0.8rem;
    color: #122a57;
    font-weight: 600;
  }

  img{
    width: 65%;
  }
`;
