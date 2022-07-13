import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SectionDivider from '../Components/SectionDivider';

export interface IShowCaseProps {}

const ShowCase: React.FunctionComponent<IShowCaseProps> = () => {
  return (
    <Flex
      id="ShowCase"
      backgroundImage="/inspiration-bg.png"
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      backgroundSize="contain"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
      mb="10%"
    >
      <SectionDivider text="Showcase" />
      <Heading fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
        Watch our <span style={{ color: '#F04D61' }}>Showcase.</span>
        <br />
        And let MatchUp speak for itself.
      </Heading>

      {/* IMAGE WRAPPER */}
      <iframe
        src="https://www.youtube.com/embed/h0MSADwMrlY?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Flex>
  );
};

export default ShowCase;
