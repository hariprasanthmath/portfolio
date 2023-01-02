import { ReactNode } from 'react';
// import Type from '../Type';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  VStack,
  Image,
  Heading,
  useMediaQuery ,
  Card,
  CardBody,
  Divider,
 ButtonGroup,
 CardFooter,
 Container
} from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { resumeurl, githuburl, linkedinurl, Youtubecloneurldeployed, Youtubecloneurlgithub, Youtubecloneurlmedium, 
  sephoracloneurldeployed, sephoracloneurlgithub, sephoracloneurlmedium, firstcrycloneurldeployed, firstcrycloneurlgithub, firstcrycloneurlmedium } from '../Constant/constant';
// import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import {sephora} from "../image"
import {FaGithub} from 'react-icons/fa';
import { sephoralandingpage } from '../Constant/constant';
function Threecards(props) {
  const handleNavigation = (url)=>{
     window.open(url, '_blank', 'noopener,noreferrer')
  }
    return (
        <>
         <Card maxW='sm' _hover={{
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }}>
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(Youtubecloneurldeployed)}}>
    <Image
      src='https://i.insider.com/5dc47f123afd37518905aba6?width=700'
      alt='Youtube landing page'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Youtube Clone</Heading>
      <Text  overflow="hidden" maxH={"3.6em"}  lineHeight={"1.2em"}>
      YouTube is a global online video sharing and social media platform. users can browse to watch video's and can save to watch later their favourite video
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <Box margin="auto" marginTop={"15px"} >
  <HStack spacing={4}>
  {['HTML', 'CSS', 'JS', "Youtube API"].map((size) => (
    <Tag size={"md"} key={size} variant='solid' >
      {size}
    </Tag>
  ))}
</HStack>
  </Box>
  <CardFooter>
  <ButtonGroup spacing='2' margin="auto"  >
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(Youtubecloneurlgithub)}}>
      <IconButton
        variant=''
        colorScheme='black'
        aria-label='Github repo'
        onClick={()=>{handleNavigation(Youtubecloneurlgithub)}}
        icon={<FaGithub />}
      />
      Github
      </Button>
      
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(Youtubecloneurldeployed)}}>
        Deployed
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm' _hover={{
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }}>
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(sephoracloneurldeployed)}}>
    <Image
      src = {sephoralandingpage}
      alt='Sephora landing page'
      borderRadius='lg'

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Sephora clone</Heading>
      <Text overflow="hidden" maxH={"3.6em"}  lineHeight={"1.2em"}  >
           Sephora is a French multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Sephora Collection, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color,
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <Box margin="auto" marginTop={"15px"} >
  <HStack spacing={4}>
  {['HTML', 'CSS', 'JS', "Local Storage"].map((size) => (
    <Tag size={"md"} key={size} variant='solid' >
      {size}
    </Tag>
  ))}
</HStack>
  </Box>
  <CardFooter>
  <ButtonGroup spacing='2' margin="auto">
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(sephoracloneurlgithub)}}>
      <IconButton
        variant=''
        colorScheme='black'
        aria-label='Github repo'
        onClick={()=>{handleNavigation(sephoracloneurlgithub)}}
        icon={<FaGithub />}
      />
      Github
      </Button>
      
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(sephoracloneurldeployed)}}>
        Deployed
      </Button>
    </ButtonGroup>
    
  </CardFooter>
</Card>
<Card maxW='sm' _hover={{ 
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }}>
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(firstcrycloneurldeployed)}}>
    <Image
      src='https://user-images.githubusercontent.com/86958575/167280539-8117f48f-9812-484b-8d44-d48800c3dc8b.jpg'
      alt='Firstcry landing page'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Firstcry clone</Heading>
      <Text>
        Clone of an e-commerce website where users can filter products based on their choice with add to card features.
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <Box margin="auto" marginTop={"15px"}>
  <HStack spacing={4}>
  {['React', 'Redux', 'Chakra UI', "JS"].map((size) => (
    <Tag size={"md"} key={size} variant='solid' >
      {size}
    </Tag>
  ))}
</HStack>
  </Box>
  <CardFooter>
  
  <ButtonGroup spacing='2' margin="auto">
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(firstcrycloneurlgithub)}}>
      <IconButton
        variant=''
        colorScheme='black'
        aria-label='Github repo'
        onClick={()=>{handleNavigation(firstcrycloneurlgithub)}}
        icon={<FaGithub />}
      />
      Github
      </Button>
      
      <Button variant='ghost' colorScheme='blue' onClick={()=>{handleNavigation(firstcrycloneurldeployed)}}>
        Deployed
      </Button>
    </ButtonGroup> 
  </CardFooter>
</Card>
        </>
    );
}

export default Threecards;