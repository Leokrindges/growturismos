import styled from "styled-components";

interface ColumnProps {
  widht?: string;
  heigth?: string;
  marginRight?: string;
}

export const Column = styled.div<ColumnProps>`
  width: ${(props) => props.widht ?? "auto"};
  height: ${(props) => props.heigth ?? "auto"};

  span{
    font-size: 0.7rem;
    color: #fff;
  }
`;
