import styled from "styled-components";

export const ContactContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding-top: 5vh;
`;

export const EmailAddress = styled.h3``;

export const ContactInstruction = styled.h1``;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const SenderEmail = styled.input`
  height: 5vh;
  padding: 0 1rem;
`;

export const EmailContent = styled.textarea`
  height: 30vh;
  resize: none;
  padding: 2vh 1rem;
  font-family: "Raleway", sans-serif;
`;

export const SendButton = styled.button`
  align-self: flex-end;
  margin-top: 1vh;
  width: 5vw;
  padding: 1vh 0;

  border-radius: 3px;
  border: #ffffff 2px solid;

  background-color: #ffffff44;

  cursor: pointer;

  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;

  &:hover {
    background-color: #ffffff99;
    transform: scale(1.05);
    box-shadow: 0 3px 2px #00000044;
  }
`;
