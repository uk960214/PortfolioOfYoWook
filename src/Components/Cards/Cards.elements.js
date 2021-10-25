import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  background: url(${(props) => props.url}) center center/cover no-repeat;
  height: 40vh;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.25);
  z-index: -1;
`;

export const CardCaption = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #ffffff99;
  padding: 3%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
`;

export const CardTopWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
`;

export const CardTitle = styled.h1``;

export const CardStackWrapper = styled.div`
  width: 20%;
  display: flex;
  gap: 10%;
`;

export const CardStackIcon = styled.img`
  width: 30%;
`;

export const CardDate = styled.h4``;

export const CardDesc = styled.p``;
