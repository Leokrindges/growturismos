import styled from "styled-components";

interface ImputStyledProps {
  heigth?: string;
}

export const InputStyled = styled.input<ImputStyledProps>`
  width: 100%;
  border-radius: 08px;
  border: solid 1.5px #122a57;
  margin-bottom: 0.2rem;
  height: ${(props) => props.height ?? "23px"};
  font-size: .6rem;
  padding-left: 5px;
`;