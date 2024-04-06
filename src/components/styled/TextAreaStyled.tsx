import styled from "styled-components";
interface TextArearStyled {
  heigth?: string;
}

export const TextArearStyled = styled.textarea<TextArearStyled>`
  width: 100%;
  border-radius: 08px;
  border: solid 1.5px #122a57;
  margin-bottom: 0.2rem;
  height: ${(props) => props.heigth ?? "23px"};
  font-size: 0.6rem;
  padding-left: 5px;
  padding-top: 2.5px;
`;
