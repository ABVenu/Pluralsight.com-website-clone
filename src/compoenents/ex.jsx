import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Container,
    Box,Image, Spacer, Flex, HStack, Heading,Text, VStack, Divider,Center
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

//styles
const navHead= {
    fontFamily: "PS Commons Bold",
    fontSize: "11px",
    lineHeight:"1",
    letterSpacing:"3px",
    textTransform: "uppercase",
    color: "#aaa",
    marginbottom: "20px",
    marginTop:"10px",
    padding:"1rem"
}

const vStackHead ={
            hgap:"1rem",
            m:"3rem",
            p:"2rem",
            textAlign:"left"
}

const hStackHead ={
    
    gap:"1rem"
}

const navHeadLogos = {
    one:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/dashboard.png",
    two:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/iq.png",
    three:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/cloud.png",
    four:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/hand.png",
    five:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/certifications.png",
    // six:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/certifications.png",
    seven:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/analytics.png",
    //next course
    
}

const navHeadStyles ={
    m:"1rem",
    fontSize: "17px",
    lineHeight: "21px",
    color: "#fff",
    fontFamily: "PS Commons Bold",
    textAlign:"left",
    justifyItems:"spaceEvenly",
    _hover:{bg:"red"}
    

}

function Logo(){
    return (
        <Box w="180px" h="40px" mr="2rem" ml="5rem">
            <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png" />
        </Box>
    )
}
export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box  border="1px solid red"  display={"flex"} bg="#212121" h="90px" justifyItems={"center"} alignItems="center">
            <Logo />
            
            <Menu isOpen={isOpen}>
                    <MenuButton
                        // variant="ghost"
                        mx={1}
                        py={[1, 2, 2]}
                        px={4}
                        // borderRadius={5}
                        color="white"
                        fontSize="15px"
                        fontWeight= "bold"
                        padding= "33px 18px"
                        display="block"
                        position="relative"
                        
                        // fontFamily='PSCommons'
                        // _hover={{ bg: useColorModeValue("gray.400", "gray.700") }}
                        aria-label="Courses"
                        // fontWeight="normal"
                        onClick={isOpen? onClose: onOpen}
                        _hover={{cursor:"pointer"}}
                        // onClick={onOpen} // // onClick={onClose} // onMouseLeave={onClose}
                    >
                        Platform {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MenuButton >
                            <MenuList bg={"black"} 
                             _expanded={{ bg: '#000' }} display="block">
                                <HStack style={hStackHead}>
                                    <VStack style={vStackHead}>
                                    <Text style={navHead}>Ways upto Skill</Text>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.one} />Courses</Flex></MenuItem>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.two} />Skill Assessments</Flex></MenuItem>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.three} />Labs</Flex></MenuItem>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.four} />Hands-on Learning</Flex></MenuItem>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.five} />Certification prep</Flex></MenuItem>
                                    <MenuItem style={navHeadStyles}> <Flex ><Image src={navHeadLogos.seven} />Team efficiency</Flex></MenuItem>
                                    </VStack>
                                    <Center height={"290px"}>
                                        <Divider orientation='vertical' borderColor="gray.200"/>
                                    </Center>
                                    <HStack>
                                        <VStack style={vStackHead}>
                                        <Text style={navHead}>Skills For</Text>

                                            <Flex style={navHeadStyles}><MenuItem>Software Development</MenuItem> </Flex>
                                            <Flex style={navHeadStyles} ><MenuItem>IT ops</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Info & cyber security</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Cloud computing</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Machine Learning/AI</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Data Proffesional</MenuItem> </Flex>
                                            <Divider orientation="horizontal" />

                                        </VStack>
                                        {/* <VStack style={vStackHead}>
                                        <Text style={navHead}>Skills For</Text>

                                            <Flex style={navHeadStyles}><MenuItem>Software Development</MenuItem> </Flex>
                                            <Flex style={navHeadStyles} ><MenuItem>IT ops</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Info & cyber security</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Cloud computing</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Machine Learning/AI</MenuItem> </Flex>
                                            <Flex style={navHeadStyles}><MenuItem>Data Proffesional</MenuItem> </Flex>
                                            
                                            <Divider orientation="horizontal" />
                                        </VStack> */}
                                       
                                    </HStack>
                                   
                                    
                                </HStack>
                               
                            </MenuList>
            </Menu>
        </Box>
        
    )
}



<HStack>

</HStack>