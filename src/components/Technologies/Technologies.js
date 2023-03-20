import React from 'react';
import { DiCss3, DiFirebase, DiGithub, DiHeroku, DiHtml5, DiMysql, DiPhp, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a fullstack developer, I have worked with a range of technologies for both frontend and backend development.   
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experienced with <br />
            React, Vue, Html, Css</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhp size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with <br />
            Java, Php, Python, Nodejs, Javascript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size='3rem'/>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>Experienced with <br />
            MongoDB, MySQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHeroku size='3rem'/>
        <ListContainer>
          <ListTitle>Hosting</ListTitle>
          <ListParagraph>Experienced with <br />
            Heroku, Cloudflare, Github, Netlify, Git</ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
