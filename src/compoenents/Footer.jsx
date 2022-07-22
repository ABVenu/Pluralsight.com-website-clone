
import { SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
    Spacer,
    HStack,
    IconButton,
    Divider,
    
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = () => {
    return (
      <Box width="34px" height="34px" ml="25px">
        {/* <img src='https://www.pluralsight.com/content/dam/pluralsight2/general/icons/light/ps-icon.png' /> */}
        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/general/icons/light/ps-icon.png"/>
        
      </Box>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={"white"}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('black', 'gray.900')}
        color={useColorModeValue('#7c7c7d', 'gray.200')}>
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>SOLUTIONS</ListHeader>
              <Link href={'#'}>Pluralsight Skils</Link>
              {/* <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Features</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack> */}
              <Link href={'#'}>Pluralsight Flow</Link>
              <Link href={'#'}>Governemnt</Link>
              <Link href={'#'}>Gift of Pulralsight</Link>
              <Link href={'#'}>View Pricing</Link>
              <Link href={'#'}>Contact Sales</Link>
              <Link href={'#'}>skill up for free</Link>

            
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>PALTFORM</ListHeader>
              <Link href={'#'}>Browse Library</Link>
              <Link href={'#'}>Role IQ</Link>
              <Link href={'#'}>Skill IQ</Link>
              <Link href={'#'}>Iris</Link>
              <Link href={'#'}>Authors</Link>
              <Link href={'#'}>Professional Services</Link>

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>COMAPNY</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Customer stories</Link>
              <Link href={'#'}>Carrers</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>NewsRroom</Link>
              <Link href={'#'}>Resource center</Link>
              <Link href={'#'}>Guides</Link>

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>RESOURCES</ListHeader>
              <Link href={'#'}>Download Pluralsight</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>Teach</Link>
              <Link href={'#'}>Partners</Link>
              <Link href={'#'}>Affiliate Partners</Link>
              <Link href={'#'}>Pluralsightone.org</Link>
              <Link href={'#'}>Subscribe</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SUPPORT</ListHeader>
              <Link href={'#'}>Contact</Link>
              <Link href={'#'}>Help center</Link>
              <Link href={'#'}>IP allowlist</Link>
              <Link href={'#'}>Sitemap</Link>
            </Stack>
          </SimpleGrid>
          <Box >
          <Divider />
          
            <HStack alignItems={"center"} pt="1rem" pb="1rem" gap="2rem" >
                <Image h="20px" w="20px" src="https://www.pluralsight.com/content/dam/pluralsight2/icons/globe-white.png" />
                <Text _hover={{color:"white"}}>Deutsch</Text>
                <Text _hover={{color:"white"}}>English</Text>
                <Text _hover={{color:"white"}}>French</Text>
            </HStack>
            <Divider/>
          </Box>
        </Container>
        <Box py={10}>
        <Flex justifyContent="center" alignItems="center" justifySelf="center" >
          <Logo />
          <Spacer />
          <Text fontSize={'sm'} textAlign="left" ml="-15%">
            Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.
          </Text>
          <Spacer />
          <HStack fontSize={"sm"} fontWeight="bold" color={"white"} gap="1.5rem" >
          <Text >           Terms of Use          </Text>
          <Text >           Privacy Notice      </Text>
          <Text >           Modern Slavery Act Transperency Statement     </Text>
          <Spacer />
          <Image h={"17px"} w={"15px"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/icons/desktop/Facebook_Icon.svg" />
          <Image h={"17px"} w={"15px"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/icons/desktop/Instagram_Icon.svg" />
          <Image h={"17px"} w={"15px"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/icons/desktop/LinkedIn_Icon.svg" />
          <Image h={"17px"} w={"15px"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/icons/desktop/Twitter_Icon.svg" />
          <Image h={"17px"} w={"15px"} src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/icons/desktop/YouTube_Icon.svg" />
          <Spacer />
          </HStack>

          


          </Flex>
        </Box>
      </Box>
    );
  }