import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import OverviewBG from '../public/overview-bg.png';
import FeatureCard from '../Components/FeatureCard';
import SectionDivider from '../Components/SectionDivider';

export interface IFeaturesProps {}

const Features: React.FunctionComponent<IFeaturesProps> = () => {
  return (
    <Flex
      id="features"
      direction="column"
      width="100%"
      mb={{ base: '10em' }}
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
    >
      <SectionDivider text="Features" />
      <Heading fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
        MatchUp is{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(29deg,#950415 0%,#f35d6e 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          fair.
        </span>
        <br />
        Only commited people join the game!
      </Heading>

      {/* FEATURE TILES */}

      <Flex
        padding={['0 1em', '0 2em', '0 100px', '0 200px', '0 300px', '0 500px']}
        flexWrap="wrap"
        gap="35px"
        justifyContent="center"
        alignItems="center"
      >
        <FeatureCard
          text="With MatchUp, every participant pays a 5€ deposit to join a game. Everyone who actually attends gets his money back."
          icon="/bill.svg"
        ></FeatureCard>

        <FeatureCard
          text="If people commited to a game, but failed to attend, their deposit gets automatically invested into local charity organisations."
          icon="/charity.svg"
        ></FeatureCard>

        <FeatureCard
          text="MatchUp makes it easy for anyone to get to know locals and attend matches with players that take the game seriously."
          icon="/pin.svg"
        ></FeatureCard>

        <FeatureCard
          text="Never struggle with finding missing team-mates again. Have free spots? Just post a MatchUp and be sure to actually play."
          icon="/user.svg"
        ></FeatureCard>
      </Flex>
    </Flex>
  );
};

export default Features;
