import { HStack, Divider, Text } from '@chakra-ui/react';
import React from 'react';

export interface ISectionDividerProps {
  text: string;
}

const SectionDivider: React.FunctionComponent<ISectionDividerProps> = ({ text }) => {
  return (
    <HStack ml="auto" mr="auto">
      <Divider width="20vw" borderColor='#f08b97' />
      <Text color='#f08b97' fontSize=".625em" fontWeight="600" letterSpacing=".2em" textTransform="uppercase">
        {text}
      </Text>
      <Divider width="20vw" borderColor='#f08b97' />
    </HStack>
  );
};

export default SectionDivider;
