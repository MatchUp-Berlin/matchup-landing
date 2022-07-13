import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

export interface ICall2ActionProps {}

const Call2Action: React.FunctionComponent<ICall2ActionProps> = (props) => {
  return (
    <Flex
      backgroundImage="radial-gradient(circle farthest-corner at -75% 0%,#f9b5b5 0%,rgb(255, 255, 255,0) 48%),radial-gradient(circle farthest-corner at 25% -20%,#ffffff 50%,rgb(255, 255, 255,0)100%),radial-gradient(circle farthest-corner at -55% -100%,rgb(255, 255, 255,0) 55%,rgba(255,255,255,.28) 65%,rgb(255, 255, 255,0) 68%),radial-gradient(circle farthest-corner at -33% -75%,#F04D61 48%,rgba(255,255,255,0) 56%),radial-gradient(circle farthest-side at 0 50%,rgb(255, 255, 255,0) 64%,rgba(255,255,255,.4) 69%,rgb(255, 255, 255,0) 81%),radial-gradient(circle farthest-corner at 0 50%,rgb(255, 255, 255,0) 33%,#F04D61 51%,rgb(255, 255, 255,0) 72%)"
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
