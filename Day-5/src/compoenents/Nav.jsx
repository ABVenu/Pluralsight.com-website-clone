import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Container,
    Box,Image, Spacer, Flex, HStack, Heading,Text, VStack, Divider,Center, Button
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
//styles

const menuBtnStyles = {
    // variant="ghost"
    mx:"1",
    py:[1, 2, 2],
    px:"4",
    // borderRadius={5}
    color:"white",
    fontSize:"15px",
    fontWeight:"bold",
    padding:"33px 18px",
    display:"block",
    position:"relative",
    
    // fontFamily:'PSCommons',
    // _hover={{ bg: useColorModeValue("gray.400", "gray.700") }}
    // ariaLabel:"Courses",
    // fontWeight="normal"
    
    _hover:{cursor:"pointer", }
    // onClick={onOpen} // // onClick={onClose} // onMouseLeave={onClose}

}
const navHead= {
    fontFamily: "PS Commons Bold",
    fontSize: "11px",
    lineHeight:"1",
    letterSpacing:"3px",
    textTransform: "uppercase",
    color: "#aaa",
    marginbottom: "20px",
    marginTop:"10px",
    padding:"1rem",
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
    eight:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png",
    nine:"https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png"
}

const navHeadStyles ={
    m:"1rem",
    fontSize: "17px",
    lineHeight: "21px",
    color: "#fff",
    fontFamily: "PS Commons Bold",
    textAlign:"left", 
    justifyItems:"spaceEvenly", 

}

const NavHeadStyles1 = {
    p1:{fontSize: "17px",
        color: "#fff",
        margin:"10px",
        lineHeight:"19px",
    },
    i:{ display:"inline-block",
        verticalAlign: "middle",
        height:"20px"
    },
    siginIn:{
        border:"none",
        bg:"black",
        color:"white"

    },
    tryForFree:{
        bg:"black",
        color:"white"
    }  
    
}

function Logo({onClick}){
    const navigate = useNavigate()

    return (
        <Box w="180px" h="40px" mr="2rem" ml="5rem" onClick={onClick}  >
            <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png" />
        </Box>
    )
}



export default function Nav() {
   
    const navigate = useNavigate()
    const { isOpen:isOpenA, onOpen:onOpenA, onClose:onCloseA } = useDisclosure()
    const { isOpen:isOpenB, onOpen:onOpenB, onClose:onCloseB } = useDisclosure()
    const { isOpen:isOpenC, onOpen:onOpenC, onClose:onCloseC } = useDisclosure()
    const { isOpen:isOpenD, onOpen:onOpenD, onClose:onCloseD } = useDisclosure()

   

    return (
        <Box  display={"flex"} bg="#212121" h="90px" justifyItems={"center"} alignItems="center" justifyContent={"space-around"}>
            

            <HStack className="fisrt" w={"80%"}>
                    <Logo onClick={()=> navigate("/")} />
                                  {/* first part */}
                    <Menu isOpen={isOpenA} key="1" >
                            <MenuButton  style={menuBtnStyles} onClick={isOpenA? onCloseA: onOpenA} >
                                Platform {isOpenA ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton >
                                    <MenuList bg={"black"} border="none" >
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
                                   {/* second part */}
                    <Menu isOpen={isOpenB} key="2">
                            <MenuButton  style={menuBtnStyles} onClick={isOpenB? onCloseB: onOpenB}  >
                                Products {isOpenB ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton >
                            <MenuList bg={"black"} _expanded={{ bg: 'none' }} border="none" >
                                
                                    <MenuItem>
                                        <HStack>
                                                <VStack>
                                                    <Image style={NavHeadStyles1.i} src={navHeadLogos.eight} />
                                                    <Text style={NavHeadStyles1.p1}>Build Tech TO Drive Skilss</Text>
                                                    <Divider />
                                                    <Text style={NavHeadStyles1.p1}>What is Skils?</Text>
                                                    <Text style={NavHeadStyles1.p1}>View Plans</Text>
                                                </VStack>
                                                <Divider orientation="vertical" height="150px"/>
                                                <VStack>
                                                    <Image style={NavHeadStyles1.i} src={navHeadLogos.nine} />
                                                    <Text style={NavHeadStyles1.p1}>Get Insights Your Workflow</Text>
                                                    <Divider />
                                                    <Text style={NavHeadStyles1.p1}>What is Flow?</Text>
                                                    <Text style={NavHeadStyles1.p1}>View Plans</Text>
                                                </VStack>
                                        </HStack>
                                    </MenuItem>                                           
                            </MenuList>                                 
                    </Menu>
                                   {/* third part */}
                    <Menu isOpen={isOpenC} key="3">
                            <MenuButton  style={menuBtnStyles} onClick={isOpenC? onCloseC: onOpenC} >
                                Resources {isOpenC ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton >
                                    <MenuList bg={"black"} border="none"
                                    _expanded={{ bg: 'none' }} >
                                        <HStack style={hStackHead}>
                                            <VStack style={vStackHead}>
                                                <Text style={navHead}>Learn</Text>
                                                <MenuItem style={navHeadStyles}> Blog</MenuItem>
                                                <MenuItem style={navHeadStyles}> Customer Stories</MenuItem>
                                                <MenuItem style={navHeadStyles}> Resource Centers</MenuItem>
                                                <MenuItem style={navHeadStyles}> Guides</MenuItem>
                                                <MenuItem style={navHeadStyles}> App Download</MenuItem>
                                                <MenuItem style={navHeadStyles}> Guides</MenuItem>


                                            </VStack>
                                            <Center height={"290px"}>
                                                <Divider orientation='vertical' borderColor="gray.200"/>
                                            </Center>
                                            <HStack>
                                                <VStack style={vStackHead}>
                                                    <Text style={navHead}>Connect</Text>
                                                    <MenuItem style={navHeadStyles}> Events</MenuItem>
                                                    <MenuItem style={navHeadStyles}> Webinars</MenuItem>
                                                    <MenuItem style={navHeadStyles}> Podscast</MenuItem>

                                                    <Divider orientation="horizontal" />
                                                    <Text style={navHead}>Podcasts</Text>
                                                    <MenuItem style={navHeadStyles} mt="2rem">  All Hands on Tech</MenuItem>

                                                </VStack>
                                                                 
                                            </HStack>                       
                                        </HStack>      
                                    </MenuList>                            
                    </Menu>
                                     {/* fourth part */}
                    <Menu isOpen={isOpenB} key="4">
                            <MenuButton  style={menuBtnStyles} onClick={isOpenB? onCloseB: onOpenB}  >
                                For Individuals 
                            </MenuButton >
                                                       
                    </Menu>
            </HStack>
            <HStack w={"20%"}>
               <SearchIcon  color={"white"}/>
               <Button isopen={isOpenD} onClick={isOpenD? onCloseD:onOpenD} variant='outline'
               style={NavHeadStyles1.siginIn}>Sign in {isOpenD ? <ChevronUpIcon /> : <ChevronDownIcon />} </Button>
               <Button variant='outline' style={NavHeadStyles1.tryForFree}> TRY FOR FREE</Button>

            </HStack>
        </Box>
        
    )
}




