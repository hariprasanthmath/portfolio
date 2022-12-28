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
import { Youtubecloneurlmedium, sephoracloneurlmedium, firstcrycloneurlmedium } from '../Constant/constant';
// import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import {sephora} from "../image"
import {FaGithub} from 'react-icons/fa';
import { sephoralandingpage } from '../Constant/constant';
function ThreecardsBlog(props) {
  const handleNavigation = (url)=>{
     window.open(url, '_blank', 'noopener,noreferrer')
  }
    return (
        <>
         <Card maxW='sm' _hover={{
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }} >
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(Youtubecloneurlmedium)}}>
    <Image
      src='https://i.insider.com/5dc47f123afd37518905aba6?width=700'
      alt='Youtube landing page'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      
      <Text  overflow="hidden" maxH={"3.6em"}  lineHeight={"1.2em"}>
      YouTube is a global online video sharing and social media platform. users can browse to watch video's and can save to watch later their favourite video
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <Button onClick={()=>{handleNavigation(Youtubecloneurlmedium)}}> Medium</Button>
  </CardFooter>
</Card>
<Card maxW='sm' _hover={{
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }} >
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(sephoracloneurlmedium)}}>
    <Image
      src = {sephoralandingpage}
      alt='Sephora landing page'
      borderRadius='lg'

    />
    <Stack mt='6' spacing='3'>
      
      <Text overflow="hidden" maxH={"3.6em"}  lineHeight={"1.2em"}  >
           Sephora is a French multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Sephora Collection, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color,
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
 
  <Button onClick={()=>{handleNavigation(sephoracloneurlmedium)}}> Medium</Button>
  </CardFooter>
</Card>
<Card maxW='sm' _hover={{
    boxShadow : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }}>
  <CardBody style={{cursor:"pointer"}} onClick={()=>{handleNavigation(firstcrycloneurlmedium)}}>
    <Image
      src='https://user-images.githubusercontent.com/86958575/167280539-8117f48f-9812-484b-8d44-d48800c3dc8b.jpg'
      alt='Firstcry landing page'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
      <Text>
        Clone of an e-commerce website where users can filter products based on their choice with add to card features.
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Button onClick={()=>{handleNavigation(firstcrycloneurlmedium)}}> Medium</Button>
  </CardFooter>
</Card>
        </>
    );
}

export default ThreecardsBlog;