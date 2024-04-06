import styled from "styled-components";

interface TitleStyledProps {
  fontSize?: string;
  fontWeight?: string;
  texteAlign?: string;
}

export const TitleStyled = styled.h2<TitleStyledProps>`
  text-align: ${(props)=> props.texteAlign ?? "start"};
  font-size: ${(props) => props.fontSize ?? "0.8rem"};
  color: #122a57;
  font-weight: ${(props) => props.fontWeight ?? "600"};
`;
