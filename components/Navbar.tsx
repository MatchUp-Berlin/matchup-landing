import { Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Link from 'next/link';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="80px"
      mt={{ base: '10px', md: '20px' }}
      mr=" auto"
      ml=" auto"
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="heazy svg creator logo"
          width="35px"
          height="35px"
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <UnorderedList display="flex" alignItems="center" justifyContent="center" gap="40px">
        <ListItem
          as="a"
          href="/#features"
          fontSize="lg"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          Features
        </ListItem>
        <Button
          display={{ base: 'none', sm: 'flex' }}
          as="a"
          href="https://matchup.vercel.com/"
          rounded="full"
          backgroundColor="#F04D61"
          color="white"
          _hover={{ transform: 'scale(1.05)' }}
        >
          Download the app
        </Button>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
