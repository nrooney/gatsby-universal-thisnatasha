import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container } from './social.css';
import { SocialIconContainer } from './socialiconcontainer.css';

const Social = () => (
  <Container>
    <SocialIconContainer>
      <SocialIcon url="https://twitter.com/thisnatasha" />
    </SocialIconContainer>
    <SocialIconContainer>
      <SocialIcon url="https://youtube.com/thisnatasha" />
    </SocialIconContainer>
    <SocialIconContainer>
      <SocialIcon url="https://instagram.com/thisnatasha" bgColor="#E1306C" />
    </SocialIconContainer>
    <SocialIconContainer>
      <SocialIcon url="https://www.linkedin.com/in/natasha-rooney-560a7b9/" />
    </SocialIconContainer>
    <SocialIconContainer>
      <SocialIcon url="https://github.com/nrooney" bgColor="#000000" />
    </SocialIconContainer>
  </Container>
);

export default Social;
