import styled from "styled-components";

export const StyledDiv = styled.div`
  input[type="search"] {
    font: 1em/1.618 Open Sans, Arial, Sans-serif;
    border: 0.125em solid #737373;
    border-width: 0 0 1px;
    background-color: transparent;
    padding: 0.1875em 0.375em;
    width: 100%;
  }
`;

export const StyledList = styled.ul`
  margin-top: 0px;
  border: 0.125em solid #737373;
  border-width: 1px;
  padding: 10px 5px;

  li:hover {
    background: yellow;
  }
`;

export const StyledListItem = styled.li`
  border: 0.125em solid #737373;
  border-width: 0 0 1px;
  &::hover {
    background: black;
  }
`;
export const ResultCard = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0.125em solid #737373;
  border-width: 1px;
  padding: 10px 15px;
  background: rgba(34, 34, 34);
  color: #fff;
`;

export const ResultItem = styled.div`
  width: 80%;
  padding: 5px;
  &.blocked-result {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
