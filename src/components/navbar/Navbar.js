// import { ReactNode } from 'react';
import Type from '../Type';
// import { Link } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  // Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  VStack,
  Image,
  Heading,
  useMediaQuery ,
  // Card,
//   CardBody,
//   Divider,
//  ButtonGroup,
//  CardFooter,
//  Container,
//  CardHeader,
 Icon
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {FaGithub, FaLinkedin, FaPhoneAlt} from 'react-icons/fa'
 import {AiOutlineMail} from 'react-icons/ai'
import Threecards from '../Threecards';
import ThreecardsBlog from '../ThreecardsBlog';
import { resumeurl, githuburl, linkedinurl } from '../../Constant/constant';
// , Youtubecloneurldeployed, Youtubecloneurlgithub, Youtubecloneurlmedium, 
//sephoracloneurldeployed, sephoracloneurlgithub, sephoracloneurlmedium, firstcrycloneurldeployed, firstcrycloneurlgithub, firstcrycloneurlmedium

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [isLargerThan1000] = useMediaQuery('(min-width: 1300px)');
  const handleNavigation = (url)=>{
    window.open(url, '_blank', 'noopener,noreferrer')
 }

  return (
    <>
    {/* //navbar */}
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} bgColor={"red.300"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/56171545?v=4'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
            {
              isLargerThan500 ? 
              <HStack as={'nav'} spacing={4}>
              <Text><Link href={"#About"}>About</Link></Text>
               <Text><Link href={"#Skills"}>Skills</Link></Text>
               <Text><Link href={"#Projects"}>Projects</Link></Text>
               <Text><Link href={"#Contact"}>Contact</Link></Text>
               <Button onClick={()=>{handleNavigation(resumeurl)}}>Resume</Button>
            </HStack>:<></>
            }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
               <Text><Link href={"#About"}>About</Link></Text>
               <Text><Link href={"#Skills"}>Skills</Link></Text>
               <Text><Link href={"#Projects"}>Projects</Link></Text>
               <Text><Link href={"#Contact"}>Contact</Link></Text>
             
            </Stack>
          </Box>
        ) : null}
      </Box>

     
     <Box minH={"100vh"} width="100%" height={"100vh"} px={10} display={"flex"} justifyContent="center" alignItems={"center"} backgroundSize={"100% 100%"} backgroundImage={""}>
     <VStack width={"80%"}>
     <Image
  borderRadius='full'
  boxSize='150px'
  src='https://avatars.githubusercontent.com/u/56171545?v=4'
  alt='Dan Abramov'
/>
     {/* <Text
            //  bgGradient='linear(to-l, #7928CA, #FF0080)'
            backgroundColor={"black"}
            bgClip='text'
            fontSize='x-large'
            fontWeight='extrabold'
            lineHeight="taller"
         >
         I am Hari Prasanth
      </Text> */}
      <Heading as='h1' size={isLargerThan500?'4xl':'xl'} noOfLines={1} fontWeight="thin">
       Hari Prasanth
  </Heading>
      <Text
             bgGradient='linear(to-l, #7928CA, #FF0080)'
            color={"lightgray"}
            bgClip='text'
            fontSize='large'
            fontWeight='bold'
            lineHeight="taller"
         >
         <Type/>
      </Text>
      <Box height={"100px"}>
        <Icon as={FaGithub} style={{cursor:"pointer"}} boxSize={isLargerThan500?16:12} colorScheme="red.500" onClick={()=>{handleNavigation(githuburl)}}/>
        <Icon as={FaLinkedin} style={{cursor:"pointer"}} boxSize={isLargerThan500?16:12} color="red.500" onClick={()=>{handleNavigation(linkedinurl)}}/>
      {/* <FaGithub />  */}
      </Box>
      
     {/* <BsGithub />? */}
     </VStack>

     </Box>
     <Box width="100%" minH={"50vh"}  padding={"20px"} px={4} display={"flex"} justifyContent="center" alignItems={"center"} >
    
      <Box width={"80%"}>
       
        <VStack>
        <Box maxW='50rem' >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Heading id={"About"} mb={4}>About me</Heading>
        </Box>
 
  <Text fontSize='2xl'>
  My name is Hari Prasanth. I’m a graduate of 2022 from KPR Institute of Technology, Anna University with a degree in Computer science Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like solving problems in LeetCode .
  </Text>
  <Box display={"flex"} justifyContent="center" alignItems={"center"}>
  <Button size='md' colorScheme='green' mt='24px' onClick={()=>{handleNavigation(resumeurl)}}>
    Resume
  </Button>
  </Box>
</Box>
        </VStack>
      </Box>
     </Box>
     <Box width="100%" minH={"30vh"} px={4} display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center"  alignItems={"center"}>
     <Heading id={"Skills"} mb={4}>Skills</Heading>
      
      {
        isLargerThan800 ? 
        <HStack>
          <Image src={"https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"} maxH={"10vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"} maxH={"10vh"}></Image>
          
        </HStack>:
       <>
        <HStack gap={"10px"} marginBottom={"10px"}>
            <Image src={"https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"} maxH={"5vh"}></Image>
       
          

        </HStack>
        <HStack gap={"10px"}>
                <Image src={"https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"} maxH={"5vh"}></Image>
          <Image src={"https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"} maxH={"5vh"}></Image>
        </HStack>
       </>
      }

     </Box>

     <Box width="100%" minH={"70vh"}  padding={"20px"} display={"flex"} justifyContent="space-around" alignItems={"center"}  flexDirection={"column"}>
     <Heading id={"Projects"} as='h1' size={'xl'} noOfLines={1} fontWeight="thin">
       Projects
  </Heading>
      {isLargerThan1000?<HStack p="20px" gap="20px">
               <Threecards/>
      </HStack>:<VStack p="20px" gap="20px">
      <Threecards/>
        </VStack>}
       
     </Box>
     <Box width="100%" minH={"70vh"} px={4} display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" alignItems={"center"} >
     <Heading as='h1' size={'xl'} noOfLines={1} fontWeight="thin" display="flex" margin="auto">
       BLOGS
  </Heading>

  {isLargerThan1000?<HStack p="20px" gap="20px">
  <ThreecardsBlog/>
      </HStack>:<VStack p="20px" gap="20px">
      <ThreecardsBlog/>
        </VStack>}
     </Box>
     
    
       <Box  width="100%" minH={"30vh"} px={4} display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"} >
       <Heading id={"Contact"} mb={4}>Contact me</Heading>
       {isLargerThan800?<HStack>
       <Box onClick={()=>{handleNavigation(githuburl)}} cursor="pointer" width="180px" display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaGithub} boxSize={isLargerThan500?8:8} colorScheme="red.500"/>
       <Text>Github</Text>
       </Box>
       <Box onClick={()=>{handleNavigation(linkedinurl)}} cursor="pointer" width="180px" display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaLinkedin} boxSize={isLargerThan500?8:8} color="red.500"/>
       <Text>Linkedin</Text>
       </Box>
       <Flex>
       <Link href='mailto:hariprasanthmath@gmail.com'>
       <Box  display={"flex"} padding={"20px"} cursor="pointer"  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={AiOutlineMail} boxSize={isLargerThan500?8:8} color="red.500"/>
       <Text>hariprasanthmath@gmail.com</Text>
       
       </Box>
       </Link>
       
       </Flex>
       <Link href='tel:+918248608590'>
       <Box width="180px" display={"flex"} padding={"20px"} cursor="pointer"  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaPhoneAlt} boxSize={isLargerThan500?8:8} color="red.500"/>
       <Text>+91 8248608590</Text>
       </Box>
       </Link>
       
        
       
        
       </HStack>:
       <VStack>
        
       <Box onClick={()=>{handleNavigation(githuburl)}} cursor="pointer" width="220px" display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaGithub}  boxSize={isLargerThan500?8:8} colorScheme="red.500"/>
       <Text>Github</Text>
       </Box>
       <Box onClick={()=>{handleNavigation(linkedinurl)}} cursor="pointer" width="220px" display={"flex"} padding={"20px"}  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaLinkedin}  boxSize={isLargerThan500?8:8} color="red.500"/>
       <Text>Linkedin</Text>
       </Box>

       <Link href='mailto:hariprasanthmath@gmail.com'>
       <Box width="220px" display={"flex"} padding={"20px"} cursor="pointer"  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={AiOutlineMail}  boxSize={isLargerThan500?8:8} color="red.500"/>
       <Flex><Text>hariprasanthmath@gmail.com</Text></Flex>
       </Box>
       </Link>
       


       <Link href='tel:+918248608590'>

       <Box width="220px" display={"flex"} padding={"20px"} cursor="pointer"  flexDirection={"column"} justifyContent="center" bgColor={"#d9f3f4"} alignItems={"center"}>
       <Icon as={FaPhoneAlt}  boxSize={isLargerThan500?8:8} color="red.500"/>
       <Text>+91 8248608590</Text>
       </Box>
       </Link>
       
        
       
        
       </VStack>
       }
       
      {/* <FaGithub />  */}
      </Box>

      
    </>
  );
}