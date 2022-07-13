import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

export interface ICall2ActionProps {}

const Call2Action: React.FunctionComponent<ICall2ActionProps> = (props) => {
  return (
    <Flex
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      direction="column"
      textAlign="center"
      gap="20px"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      padding={['0 1.5em']}
    >
      <Heading fontWeight="800" fontSize={{ base: '2.5em', lg: '4em' }} lineHeight={1}>
        What are you wating for?<br></br>
        <span style={{ color: '#F04D61' }}>MatchUp</span> is waiting for you!
      </Heading>
      <Flex gap="10px">
        <Button
          as="a"
          href="https://testflight.apple.com/join/D5tNP4xt"
          rounded="full"
          size="lg"
          variant="outline"
          borderColor="#F04D61"
          borderWidth="2px"
          color="#F04D61"
          _hover={{ bg: '#F04D61', color: 'white', transform: 'scale(1.05)' }}
        >
          iOS Beta
        </Button>
        <Button
          as="a"
          href="https://play.google.com/store/apps/details?id=app.vercel.matchup.twa"
          rounded="full"
          size="lg"
          variant="outline"
          borderColor="#F04D61"
          borderWidth="2px"
          color="#F04D61"
          _hover={{ bg: '#F04D61', color: 'white', transform: 'scale(1.05)' }}
        >
          Android Beta
        </Button>
      </Flex>
    </Flex>
  );
};

export default Call2Action;
