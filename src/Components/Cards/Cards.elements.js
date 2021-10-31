import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
  border-radius: 5px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.25);
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: url(${(props) => props.url}) center center/cover no-repeat;
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
  width: 35%;
  display: flex;
  gap: 10%;
  margin-top: 1vh;
`;

export const CardStackIcon = styled.img`
  width: 30%;
`;

export const CardDate = styled.h4``;

export const ModalOpenButton = styled.p`
  margin-top: 1vh;
  text-align: right;
  color: #777777;
  text-decoration: underline;
  cursor: pointer;
`;

export const CardDesc = styled.p``;
