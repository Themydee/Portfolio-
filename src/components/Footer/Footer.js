import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +234-706-508-0140'>07065080140</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:CodedFarmer@outlook.com'>CodedFarmer@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>The Agricultural Initiative & Mandate</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href='https://twitter.com/themydee2001'>
              <AiFillTwitterCircle size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com/in/akanbi-bello-temidayo-015b1a141/'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://instagram.com/themy_dee'>
              <AiFillInstagram size='3rem' />
            </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
