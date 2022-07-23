import { Box, Button, Heading, HStack, Text, Image, Divider, VStack, Grid, GridItem, Flex, Spacer} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Nav from "./Nav";
import Footer from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

  
function Body(){
    const twImg = [
       require("../images/tw1.jpg"),
       require("../images/tw2.jpg"),
       require("../images/tw3.jpg"),
       require("../images/tw4.jpg"),
       require("../images/tw5.jpg"),  
       require("../images/tw1.jpg"),

    ]
const [index, setIndex] = useState(0)
const [index1,setIndex1] = useState(1)
const [index2,setIndex2] = useState(2)


function Slideshow(){

    function next(){
        if(index===twImg.length-1)
        {
            setIndex(0);
            // setIndex1(1);
            // setIndex2(2);
        }
        else{
            setIndex(index+1)
            // setIndex1(index+1);
            // setIndex1(index+1);
        }
    }

    function prev(){
        if(index===0)
        {
            setIndex(twImg.length-1)
            // setIndex1(index-2);
            // setIndex2(index-3);

        }
        else{
            setIndex(index-1)
            // setIndex1(index-2);
            // setIndex1(index-3);
        }
    }
     if(index==twImg.length-1)
     {
           setIndex1(0);
           setIndex2(1)
     }
     else
     {
        setIndex1(index+1);
        setIndex2(index+2)
     }
        return (
            <HStack  >
                <HStack w="90%" h="250px" gap="20px" >
                <Button bg="none" leftIcon={<ChevronLeftIcon   />} onClick={next} ></Button>
                <Image  h="100%" src={twImg[index]} borderRadius={"5px"} />
                <Image   h="100%"  src={twImg[index1]} borderRadius={"5px"} />
                <Image  h="100%" src={twImg[index2]} borderRadius={"5px"} />
                <Button  bg="none" leftIcon={<ChevronRightIcon size="24px" />}  onClick={prev}></Button>
                </HStack>
             
            </HStack>
        )
    }
const navigate = useNavigate()
const styles = {
    mainH:{
        fontSize: "56px",
       lineHeight: "100%",
       letterSpacing: "normal",
       color: "#fff",
       margin:"45px 0"
    },
    subH1:{
        fontSize:"17px",
       lineHeight:"1.4",
       color: "#fff",
       marginBottom:"20px"  //it is seuivalent to p

    },
     //button
    viewPlans:{
        minWidth: "150px",
        fontSize: "15px",
       letterSpacing: "0.5px",
       padding: "18px 34px",
       backgroundImage: "linear-gradient(to right,#f05a28,#ec008c,#f05a28)",
       color: "#fff",
       textTransform: "uppercase",
       lineHeight: "1.1",
       float: "left",
       marginBottom: "20px",
       marginRight:"20px",
       fontWeight:"bold",
     },
     //button 
     tryForFree:{
        padding: "19px 29px",
        minWidth: "150px",
        fontSize: "15px",
        letterSpacing: "0.5px",
        color: "#fff",
        background: "transparent",
       border: "1px solid #fff",
       textTransform: "uppercase",
     },
     //capital letter HEADING
     subH2:{
        textAlign: "center",
        color: "#aaa",
        fontSize: "15px",
        letterSpacing: "1px",
        margin: "0 0 20px 0",
        fontFamily: 'PS Commons Bold',
        fontWeight:"bold",

     },
     dividerLine:{
        width: "0%",
        height:"150px",
        borderWidth: "3px",
        borderStyle:"solid",
        margin: "0px auto",
        borderImage: "linear-gradient( to bottom, #EC008C, #F15B2A, rgba(0, 0, 0, 0) ) 1 100%",
     },

     subH3:{
        color: "#e40084",
        fontFamily: 'PS Commons Bold',
        fontWeight:"bold",

        fontSize: "18px",
        letterSpacing: "1px",
        margin: "0 0 20px 0",
        textAlign:"left",
        marginLeft:"-35%"
     },
     subH4:{
        margin: "0 0 20px 0",
        color: "#fff",
        fontFamily: "PS Commons Bold",
        fontWeight:"bold",

        fontSize: "32px",
        marginLeft:"-25%"
     },
     courseCard:{    
            padding: "20px 30px",
            background: "#222222",
            boxShadow: "0px 30px 30px rgb(0 0 0 / 10%)",
            height: "165px",
            borderRadius:"10px",
            display: "block",
            width:"450px",
            cursor:"pointer",
     },
        courseCardSubH1:{
            textTransform: "uppercase",
            fontSize: "13px",
            fontFamily: "PS Commons Bold",
            fontWeight:"bold",
            color: "#ec008c",
            lineHeight:"1.4",
            letterSpacing: "1px",
            fontWeight:"bold",



        },
        courseCardSubH2:{
            // textTransform: "uppercase",
            fontSize: "22px",
            // fontFamily: "Times New Roman",
            fontWeight:"bold",
            fontFamily: "PS Commons Bold",
            color: "white",
            // lineHeight:"1.4",
        },
        courseCardSubH3:{
            color: "white",
            fontWeight:"500",
            fontSize: "17px",
            lineHeight:"1.4",


        },
        courseCardSubH4: {
            color: "#aaaaaa",
            fontSize: "17px",
            marginLeft:"0.5rem"
        },
//   after courses section
 subBox1:{
    padding: "100px 0",
    // position: "relative",
    backgroundSize: "cover",
    background:"#181818",
    // border:"1px solid red",
    marginTop:"40px"
 },
 subH5:{
    margin: "0 0 20px 0",
    color: "#fff",
    fontFamily: "PS Commons Bold",
    fontWeight:"bold",
    fontSize: "32px",
    marginLeft:"-70%"
 },
 subH6:{
    // margin: "0 0 20px 0",
    color: "#fff",
    fontFamily: "PS Commons Bold",
    fontWeight:"bold",
    fontSize: "32px",
    textAlign:"left",
    // marginLeft:"-70%"
 },
 subBox2:{
    width:"33%",
    height:"480px",
    background:"#222222",
    borderRadius:"10px",
    alignItems:"flex-start",
    padding:"30px",
    textAlign:"left"

 },
 subBox3:{
    padding: "100px 0",
    // position: "relative",
    backgroundSize: "cover",
    background:"black",
    // border:"1px solid red"
 },
 subH7:{
    color: "#ffba0e",
    fontSize: "15px",
    letterSpacing: "1px",
    fontWeight:"bold",
    marginBottom:"25px"
 },
 subBox4:{
    width:"25%",
    height:"480px",
    // background:"#222222",
    borderRadius:"10px",
    alignItems:"flex-start",
    padding:"30px",
    textAlign:"left",
    cursor:"pointer"

 },
 subBox5:{
    background: "linear-gradient(100.37deg, rgb(236, 0, 139) 0%, rgb(241, 90, 34) 100%)",
    // borderRadius:"10px",
    alignItems:"flex-start",
    padding:"112.5px",
    textAlign:"left",
    marginLeft:"-1px"
 },
 subH8:{
    fontSize:"28px",
    lineHeight:"1.2",
    letterSpacing: "normal",

 },
 howTheyAreBtn:{
    color: "#fff",
    background: "#181818",
    fontSize: "15px",
    letterSpacing: "0.5px",
    padding: "18px 34px",
    transition: "box-shadow .3s ease-in-out"
},
    subH9:{
        color: "#e40084",
        fontFamily: 'PS Commons Bold',
        fontWeight:"bold",
        fontSize: "18px",
        letterSpacing: "1px",
        margin: "20px 0 -10px 0",
        textAlign:"center",
        
        },
    subH10:{
    // margin: "0 0 20px 0",
    color: "#fff",
    fontFamily: "PS Commons Bold",
    fontWeight:"bold",
    fontSize: "32px",
    fontWeight:"bold",
    },
lastH:{
    fontSize: "32px",
    lineHeight: "100%",
    letterSpacing: "normal",
    color: "#fff",
    marginBottom: "20px",
    marginRight:"20px",
    padding: "18px 34px",
}
}



const logoImgSrc= {
    one:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/adp.png",
    two:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/adobe.png",
    three:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/vmware.png",
    four:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/fujitsu.png",
    five:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/nasdaq.png"   
}

const courseSrc= {
    one:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
    two:"https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png",
    three:"https://pluralsight.imgix.net/paths/python-7be70baaac.png",
    four:"https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?"
}

    
    

    return (
        <Box bg="black" color="white">
            <Nav />
            <Heading style={styles.mainH}>Build Better Themes</Heading>
            <Text style={styles.subH1}>Face the future with confidence—and with the skills and tools to thrive.</Text>
            <HStack justifyContent={"center"} alignItems={"content"}>
                <Button style={styles.viewPlans}>View Plans</Button>
                <Button style={styles.tryForFree} variant="outline">Try For Free</Button>
            </HStack>
               <Text style={styles.subH2}>HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE</Text>
            <HStack justifyContent={"center"} gap={"5rem"} >
                    <Image pt="1.2rem" src={logoImgSrc.one} />
                    <Image src={logoImgSrc.two} />
                    <Image src={logoImgSrc.three} />
                    <Image pt="1.2rem" src={logoImgSrc.four} />
                    <Image src={logoImgSrc.five} />
            </HStack>
                <Box>
                    <VStack style={styles.dividerLine}> </VStack>
                </Box>
            <HStack justifyContent={"center"} flexDirection="column">
                    <Heading style={styles.subH3}> TRENDING TECHNOLOGIES</Heading>
                    <Text style={styles.subH4}>Popular topics to Learn Now</Text>
                
                
                <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={6}>
                                             {/* first Box */}
                        <Box style={styles.courseCard} onClick={()=> navigate("/Javascript")}>
                                <HStack justifyContent={"space-between"}>
                                    <VStack>
                                    <Text style={styles.courseCardSubH1}> PATH</Text>
                                    <Text style={styles.courseCardSubH2}>JavaScript</Text>
                                    <Flex> <Text style={styles.courseCardSubH3}>11</Text> <Text style={styles.courseCardSubH4}>Courses</Text></Flex>
                                    <Flex alignContent={"center"}><Text> Take a Look</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                                    </VStack>
                                    <VStack>
                                        <Image w="100px" src={courseSrc.one} />
                                    </VStack>
                                </HStack>
                        </Box>
                                                                     {/* second Box */}

                        <Box style={styles.courseCard} onClick={()=> navigate("/Angular")}>
                                <HStack justifyContent={"space-between"}>
                                    <VStack>
                                    <Text style={styles.courseCardSubH1}> PATH</Text>
                                    <Text style={styles.courseCardSubH2}>Angular</Text>
                                    <Flex> <Text style={styles.courseCardSubH3}>14</Text> <Text style={styles.courseCardSubH4}>Courses</Text></Flex>
                                    <Flex alignContent={"center"}><Text> Take a Look</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                                    </VStack>
                                    <VStack>
                                        <Image w="100px" src={courseSrc.two} />
                                    </VStack>
                                </HStack>
                        </Box>
                                                                     {/* third Box */}

                        <Box style={styles.courseCard} onClick={()=> navigate("/Python")}>
                                <HStack justifyContent={"space-between"}>
                                    <VStack>
                                    <Text style={styles.courseCardSubH1}> PATH</Text>
                                    <Text style={styles.courseCardSubH2}>Core Python</Text>
                                    <Flex> <Text style={styles.courseCardSubH3}>12</Text> <Text style={styles.courseCardSubH4}>Courses</Text></Flex>
                                    <Flex alignContent={"center"}><Text> Take a Look</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                                    </VStack>
                                    <VStack >
                                        <Image w="100px" src={courseSrc.three} />
                                    </VStack>
                                </HStack>
                        </Box>
                                                                     {/* fourth Box */}

                        <Box style={styles.courseCard} onClick={()=> navigate("/C")}>
                                <HStack justifyContent={"space-between"} >
                                    <VStack >
                                    <Text style={styles.courseCardSubH1}> PATH</Text>
                                    <Text style={styles.courseCardSubH2}>C #</Text>
                                    <Flex> <Text style={styles.courseCardSubH3}>19</Text> <Text style={styles.courseCardSubH4}>Courses</Text></Flex>
                                    <Flex alignContent={"center"}><Text> Take a Look</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                                    </VStack>
                                    <VStack>
                                        <Image w="100px" src={courseSrc.four} />
                                    </VStack>
                                </HStack>
                        </Box>
                </Grid>
            </HStack>
            {/* bg="#181818" */}
            <VStack style={styles.subBox1}    >
                <Box ml="-60%">
                <Heading style={styles.subH3}  > WHAT'S NEW</Heading>
                <Heading style={styles.subH5} >Our Latest Features</Heading>
                </Box>
                                            {/* first box */}
                <Box w="82%">
                   <HStack  bg="#222222" borderRadius={"10px"}  paddingLeft="20px">
                        <VStack   alignItems="flex-start" w="50%" >
                           <Flex alignItems={"center"}> <Image p="10px" w="150px" src="https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png"/> <Text fontWeight={"bold"}>LABS</Text></Flex>
                            <Heading style={styles.subH6} >Deepen your people's expertise with hands-on labs</Heading>
                            <Text style={styles.subH1} textAlign="left"> Improve your teams’ confidence in their ability to deliver on business objectives 
                                by building the right skills that meet your org’s needs. Pluralsight offers 950+ labs 
                                that enable hands-on practice in secure environments across domains such as cloud (AWS, GCP and Azure), 
                                IT Ops, security, data and software development.</Text>
                            <Flex p="20px"><Text> Learn More</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>

                        </VStack>
                        <VStack  bg="#222222" w="50%">
                            <Image h="250%" src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/Cloud-labs-image2x-min.png" />
                        </VStack>
                   </HStack>
                </Box>
                 <Spacer /> <Spacer /> <Spacer /> <Spacer />
                                           {/* second box */}
                <Box w="82%">
                   <HStack  bg="#222222" borderRadius={"10px"}  paddingLeft="20px">
                        <VStack   alignItems="flex-start" w="50%" >
                           <Flex alignItems={"center"}> <Image p="10px" w="150px" src="https://www.pluralsight.com/content/dam/pluralsight2/abm-assets/abm-template/abm-flow-logo.png"/> <Text fontWeight={"bold"}>LABS</Text></Flex>
                            <Heading style={styles.subH6} >Pluralsight Flow Logo Unlock your people and upgrade your process like never before</Heading>
                            <Text style={styles.subH1} textAlign="left"> Improve your teams’ confidence in their ability to deliver on business objectives 
                                by building the right skills that meet your org’s needs. Pluralsight offers 950+ labs 
                                that enable hands-on practice in secure environments across domains such as cloud (AWS, GCP and Azure), 
                                IT Ops, security, data and software development.</Text>
                            <Flex p="20px"><Text> Learn More</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>

                        </VStack>
                        <VStack  bg="#222222" w="50%" >
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-interface.png" />
                        </VStack>
                   </HStack>
                </Box>
              <HStack w="82%" paddingTop="20px" gap="20px">
                        <VStack style={styles.subBox2} >
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/certification-prep.png" />
                            <Spacer/>
                            <Heading style={styles.subH6}> Empower your teams to grow their skills and their careers</Heading>
                            <Spacer/>
                            <Text style={styles.subH1}> Prepare your team for certification exams with our expert authored content and practice exams.</Text>
                            <Spacer/>
                            <Flex p="20px"><Text fontWeight={"bold"}> Learn More</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                        </VStack>

                        <VStack style={styles.subBox2}>
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/delivery-module.png" />
                            <Spacer/>
                            <Heading style={styles.subH6}> Make lasting workflow improvements with insights from your Jira data</Heading>
                            <Spacer/>
                            <Text style={styles.subH1}> Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. 
                            Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow.</Text>
                            <Spacer/>
                            <Flex p="20px"><Text fontWeight={"bold"}> Learn More</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                        </VStack>

                        <VStack style={styles.subBox2}>
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/sandboxes.png" />
                            <Spacer/>
                            <Heading style={styles.subH6}> Utilize a space for unrestricted exploration</Heading>
                            <Spacer/>
                            <Text style={styles.subH1}> Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses.</Text>
                            <Spacer/>
                            <Flex p="20px"><Text fontWeight={"bold"}> Learn More</Text> <ChevronRightIcon w={6} h={6} color={"#ec008c"} /></Flex>
                        </VStack>
              </HStack>
            </VStack>

            <VStack style={styles.subBox3}>
                <Box ml="-40%">
                    <Heading style={styles.subH3}  > KEEP UP TO DATE</Heading>
                    <Heading style={styles.subH5} >Discover more about Pluralsight</Heading>
                </Box>
                <HStack width="90%" gap="20px">
                    <VStack style={styles.subBox4}>
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/image/image-res.img.7ff160d9-5248-4b11-804e-cf66f7281f75.jpg" />
                        <Text style={styles.subH7}>WHAT IS PLURALSIGHT SKILLS?</Text>
                        <Text style={styles.subH1}>Discover the fastest, most effective path to developing technology skills</Text>
                    </VStack>

                    <VStack style={styles.subBox4}>
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1875049544/parsys/image/image-res.img.50c64034-5c04-4b3b-aa76-4d2ce92c35cc.png"/>
                        <Text style={styles.subH7}>PLURALSIGHT NAMED A LEADER FOR IT TRAINING</Text>
                        <Text style={styles.subH1}>We're honored to be recognized in the 2021 IDC MarketScape for IT training.</Text>
                    </VStack>

                    <VStack style={styles.subBox4}>
                        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-demo-thumbnail.png" />
                        <Text style={styles.subH7}>LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW</Text>
                        <Text style={styles.subH1}>Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level</Text>
                    </VStack>

                    <VStack style={styles.subBox4}>
                        <Image src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_383891725/parsys/image/image-res.img.52e3fa3f-a6b2-4942-bee6-bdf060c01de7.png" />
                       <Text style={styles.subH7}>CREATE YOUR FREE ACCOUNT</Text>
                        <Text style={styles.subH1}>Build new tech skills on us with free access to 50+ expert-led courses, assessments and more.</Text>
                    </VStack>
                </HStack>

            </VStack>
            <Box w="100%"  >
                <HStack  gap="0" h="450px">
                    <VStack w="50%" h="100%" >
                        <Image w="100%" h="100%" src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/image/image-res.img.7ff160d9-5248-4b11-804e-cf66f7281f75.jpg" />
                    </VStack>
                    <VStack w="50%" style={styles.subBox5} h="100%" >
                        <Image w="120px" src="https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-customer-types-2/generic_block_143764/parsys/columns/column-parsys-2/generic_block/parsys/column_control/column-parsys-1/image/image-res.img.050e2bc0-c7c3-4d8a-81b1-1ae7b5f50163.png" />
                        <Text style={styles.subH8}>Winning the talent war with a scalable tech skills platform</Text>
                        <Text style={styles.subH1} >Evolving a 20-year-old company, increasing innovation and accelerating time to delivery requires fresh skills. See how VMware’s globally dispersed teams use Pluralsight to leverage the latest developments in technology as they find new ways to serve customers.</Text>
                        <Button style={styles.howTheyAreBtn}>HOW THEY ARE SKILLING UP</Button>
                    </VStack>
                </HStack>
            </Box>
            
            <VStack justifyContent={"center"} justifyItems="center">
                <Heading style={styles.subH9} mb="-10%">FOLLOW US</Heading>
                <Text style={styles.subH10} mt>Share your skills</Text>
                <Slideshow />

            </VStack>

             <slideshow />

            <HStack justifyItems={"center"} marginTop="50px"
            justifyContent={"space-evenly"} alignItems="center" alignContent={"center"} >
                <Heading style={styles.lastH} >Insights that give you an edge</Heading>
                <Button style={styles.viewPlans}>TRY FOR FREE</Button>
            </HStack>
           <Footer />
           
        </Box>
    )
}

export default Body