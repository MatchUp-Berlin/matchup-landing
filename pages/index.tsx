// import Meta from '../partials/seo-meta';
import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Call2Action from '../Sections/Call2Action';
import Features from '../Sections/Features';

import Hero from '../Sections/Hero';
import Link from 'next/link';
import ShowCase from '../Sections/ShowCase';
import HeroWave from '../components/Backgrounds/HeroWave';
import BottomWave from '../public/bottom-wave.svg';
import TopWave from '../components/Backgrounds/TopWave';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta
        title="Generate unique SVG design assets with ease | Heazy"
        desc="An intuitive design studio in your browser for creating and exporting unique SVG designs as PNG, SVG or React JavaScript and TypeScript snippets."
        canonical="https://heazy.studio"
        css="/static/css/styles.css"
        js="/static/js/scripts.js"
      /> */}
      <div style={{ fontFamily: 'Karla, sans-serif' }}>
        <Head>
          <title>MatchUp - Join sports events in your city</title>
          <meta name="Home - MatchUp" content="MatchUp - Join sports events in your city<" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Box
            width="100%"
            className="gradient-bg"
            padding={{ base: '0 1.5em', lg: '0 10em' }}
            bgPos="top"
            // bgImage="linear-gradient(0,rgb(255, 255, 255,0) 7%,rgb(255, 255, 255, 0) 20%),radial-gradient(circle farthest-side at -170% 170%,#F04D61 48%,rgb(255, 255, 255,0) 65%),radial-gradient(circle farthest-corner at -55% -125%,rgb(255, 255, 255,0) 50%,rgb(255, 255, 255) 70%,rgb(255, 255, 255,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(255, 255, 255) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#F04D61 50%,rgb(255, 255, 255,1) 72%),radial-gradient(circle farthest-corner at 50% -100%,#F04D61 26%,rgb(255, 255, 255,0) 72%);"
          >
            {/*-------- HERO SECTION --------*/}
            <Hero />
            <Flex position="absolute" left="0" zIndex={0} top="0">
              <TopWave></TopWave>
            </Flex>
            <Flex position="absolute" left="0" zIndex={0} top="50em">
              <HeroWave></HeroWave>
            </Flex>
          </Box>

          {/*-------- FEATURES SECTION --------*/}
          <Features />

          {/*-------- SHOWCASE SECTION --------*/}
          <ShowCase />

          {/*-------- C2A SECTION --------*/}
          <Call2Action />
          <Box
            position="absolute"
            w={{ base: '300vw', md: '100vw' }}
            h="250px"
            left="0"
            zIndex={0}
            bottom="0"
          >
            <Image
              src={BottomWave}
              objectFit="cover"
              layout="fill"
              alt="footer-illustration"
            />
          </Box>
        </main>
        <Flex
          height="50px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          bottom="0"
          background="transparent"
          width="100%"
          color="white"
        >
          <Link href="/privacy">Privacy Notice</Link>
        </Flex>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
