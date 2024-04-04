import styled from "styled-components";

interface ColumnProps {
  widht?: string;
  height?: string;
  marginRight?: string;
  displayFlex?: "flex" | "block";
  alignItens?: "start" | "center" | "end"
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse"
  justifyContent?: "start" | "center" | "end"
}

export const Column = styled.div<ColumnProps>`
  display: ${(props) => props.displayFlex ?? "block"};
  width: ${(props) => props.widht ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  align-items: ${(props)=> props.alignItens};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent};
  gap: 15px;

  span {
    font-size: 0.7rem;
    color: #fff;
  }

  h1 {
    color: #122a57;
    font-weight: 560;
    font-size: 2.5rem;
  }

  img {
    width: 90%;
  }
`;
