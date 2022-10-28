import { Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Link from 'next/link';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='space-between'
			width='100%'
			height='45px'
			mt={{ base: '10px', md: '20px' }}
			mr=' auto'
			ml=' auto'
			zIndex={1}
		>
			<Link href='/'>
				<Image
					src={Logo}
					alt='heazy svg creator logo'
					width='35px'
					height='35px'
					style={{ cursor: 'pointer' }}
				/>
			</Link>
			<UnorderedList
				display='flex'
				alignItems='center'
				justifyContent='center'
				gap='40px'
			>
				<ListItem
					as='a'
					href='/#features'
					fontSize='lg'
					listStyleType='none'
					cursor='pointer'
					transition='0.3s'
					color='white'
					display={{ base: 'none', sm: 'inherit' }}
					_hover={{ color: '#63000c', transform: 'scale(1.05)' }}
				>
					Features
				</ListItem>
				<ListItem
					as='a'
					href='https://app.getmatchup.org'
					fontSize='lg'
					listStyleType='none'
					cursor='pointer'
					transition='0.3s'
					color='white'
					_hover={{ color: '#63000c', transform: 'scale(1.05)' }}
				>
					PWA
				</ListItem>
				<ListItem
					as='a'
					href='https://testflight.apple.com/join/D5tNP4xt'
					fontSize='lg'
					listStyleType='none'
					cursor='pointer'
					transition='0.3s'
					color='white'
					_hover={{ color: '#63000c', transform: 'scale(1.05)' }}
				>
					iOS Beta
				</ListItem>
				<ListItem
					as='a'
					href='https://play.google.com/store/apps/details?id=app.vercel.matchup.twa'
					fontSize='lg'
					listStyleType='none'
					cursor='pointer'
					transition='0.3s'
					color='white'
					_hover={{ color: '#63000c', transform: 'scale(1.05)' }}
				>
					Android Beta
				</ListItem>
			</UnorderedList>
		</Flex>
	);
};

export default Navbar;
