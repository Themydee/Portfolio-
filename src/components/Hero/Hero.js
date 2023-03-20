import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There <br />
        Welcome to the world of Themydee
      </SectionTitle>
      <SectionText>
        I am a Fullstack Software Developer, Open Source Enthusiast and an Agricultural Economist.<br />
        I love building things and I give all my efforts in making sure I give you the best works you ever seen
      </SectionText>
      <Button onClick={() => window.location = 'https://wa.me/+2347065080140?text=Hey%20there%20My%20name%20is%20.....%20and%20I%20am%20in%20need%20of%20your%20services'}>Lets Connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;