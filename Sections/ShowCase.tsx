import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import SectionDivider from '../components/SectionDivider';

export interface IShowCaseProps {}

const ShowCase: React.FunctionComponent<IShowCaseProps> = () => {
  return (
    <Flex
      id="ShowCase"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
    >
      <SectionDivider text="Showcase" />
      <Heading fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
        Watch our <span style={{ color: '#F04D61' }}>Showcase.</span>
        <br />
        And let MatchUp speak for itself.
      </Heading>

      {/* IMAGE WRAPPER */}
      <Flex
        justifyContent="center"
        alignItems="center"
        width={{ base: '95vw', lg: '70vw' }}
        height={{ base: '38vh', lg: '65vh' }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/h0MSADwMrlY?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Flex>
    </Flex>
  );
};

export default ShowCase;
