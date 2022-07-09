import { Flex, Button, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import MockUp from '../public/mockup.png';

export interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <Flex direction="column">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO TITLE */}
      <Flex gap={50} direction="column" justifyContent="center" alignItems="center">
        <Flex
          minHeight="75vh"
          direction="column"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Heading fontWeight="800" fontSize={{ base: '3em', lg: '4em' }}>
            Local sports matches
            <br />
            that people
            <span
              style={{
                backgroundImage: 'linear-gradient(207deg,#F04D61 23%,#a20719 87%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              {' '}
              actually commit to
            </span>
          </Heading>
          <Flex direction="column" alignItems="center" gap="5px">
            <Flex gap="10px">
              <Button
                as="a"
                href="https://matchup.vercel.com/"
                rounded="full"
                size="lg"
                backgroundColor="#F04D61"
                color="white"
                _hover={{ transform: 'scale(1.05)' }}
              >
                Let's MatchUp!
              </Button>
              <Button
                as="a"
                href="https://youtu.be/vILG4DxNP4w"
                rounded="full"
                size="lg"
                variant="outline"
                _hover={{ bg: '#ffffff40', color: 'white', transform: 'scale(1.05)' }}
              >
                Watch Showcase
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb="10em" width="500px" height="auto" justifyContent="center" alignItems="flex-start">
          <Image src={MockUp} layout="intrinsic" alt="iphone-mockup" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
