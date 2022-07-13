import { Flex, Button, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import MockUp from '../public/mockup.png';
import HeroBG from '../public/inspiration-bg.png';

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
          backgroundImage={` url('${HeroBG.src}')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom"
          backgroundSize="contain"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Heading fontWeight="800" fontSize={{ base: '3em', lg: '4em' }}>
            Local sports matches
            <br />
            that people
            <span style={{ color: '#F04D61' }}> actually commit to</span>
          </Heading>
          <Flex direction="column" alignItems="center" gap="5px">
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
        </Flex>
        <Flex mb="10em" width="500px" height="auto" justifyContent="center" alignItems="flex-start">
          <Image src={MockUp} layout="intrinsic" alt="iphone-mockup" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
