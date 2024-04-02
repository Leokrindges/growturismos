import styled from "styled-components";

interface RowProps {
  alignItens?: "Center" | "Start" | "End";
  justifyContent?: "Center" | "Start" | "End" | "space-between";
  heigth?: string;
  flexWrap?: "wrap";
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  margin-right: calc(-0.5 * 1, 5rem);
  margin-left: calc(-0.5 * 1, 5rem);
  gap: 16px;
  align-items: ${(props) => props.alignItens ?? "strech"};
  justify-content: ${(props) => props.justifyContent ?? "start"};
  height: ${(props) => props.heigth ?? "auto"};
`;
