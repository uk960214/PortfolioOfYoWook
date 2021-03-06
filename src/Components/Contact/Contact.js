import React from "react";
import { SectionTitle } from "../../styles/globalStyle";

import {
  ContactContainer,
  EmailAddress,
  ContactInstruction,
  ContactForm,
  SenderEmail,
  EmailContent,
  SendButton,
} from "./Contact.elements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionTitle>Contact Me!</SectionTitle>
      <EmailAddress>Mail Address: uk960214@gmail.com</EmailAddress>
      <ContactInstruction>
        or Send Me a Mail Through the Form Below
      </ContactInstruction>
      <ContactForm>
        <SenderEmail placeholder="Your Email Address" />
        <EmailContent placeholder="Your Message to Me..." />
      </ContactForm>
      <SendButton>Send</SendButton>
    </ContactContainer>
  );
};

export default Contact;
