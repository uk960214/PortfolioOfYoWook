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

export const LeftWrapper = styled.div`
  max-width: 50%;
`;

export const CardTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;

  @media screen and (max-width: 1919px) {
    font-size: 1rem;
  }
`;

export const CardStackWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  gap: 20%;
  margin-top: 1vh;
`;

export const CardStackIcon = styled.img`
  height: 3vh;
`;

export const CardDate = styled.p`
  @media screen and (max-width: 1919px) {
    font-size: 0.8rem;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1919px) {
    flex-direction: row;

    & > * {
      margin: 0 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

export const ModalOpenButton = styled.p`
  margin-top: 1vh;
  text-align: right;
  color: #777777;
  text-decoration: underline;
  cursor: pointer;
`;

export const DemoLink = styled.a`
  margin-top: 0.5vh;
  color: #777777;
`;

export const CardDesc = styled.p`
  @media screen and (max-width: 1919px) {
    font-size: 0.8rem;
  }
`;
