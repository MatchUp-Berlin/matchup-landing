import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export interface IFeatureCardProps {
  text: string;
  icon: string;
}

const FeatureCard: React.FunctionComponent<IFeatureCardProps> = ({ text, icon }) => {
  return (
    <Flex
      position="relative"
      borderRadius="8px"
      maxWidth="288px"
      padding="30px 20px 30px 20px"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      gap="15px"
      textAlign="center"
      boxShadow="inset 0 0 0 0px #3d2f2f, 0 0px 8px -5px #321e1e"
      backdropFilter="blur(2px)"
      transition="0.3s"
      _hover={{
        backdropFilter: 'blur(3px)',
        boxShadow: 'inset 0 0 0 1px #F04D61, 0 0px 35px -5px #F04D61',
        transform: 'scale(1.05)',
      }}
    >
      <Image src={icon} width="50px" height="50px" alt="SVG Resizing Icon"></Image>
      <Text>{text}</Text>
    </Flex>
  );
};

export default FeatureCard;
