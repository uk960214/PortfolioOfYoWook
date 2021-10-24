import styled from "styled-components";

export const Container = styled.div`
  margin: 5vh auto;
  width: 75vw;

  & > * {
    margin: 15vh auto;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;
