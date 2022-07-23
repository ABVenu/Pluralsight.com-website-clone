import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    HStack, Box, Icon, createIcon, VStack, Divider, Heading, Text, Image,Flex,Circle, Button, Spacer, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Grid, GridItem, Center
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon,StarIcon } from '@chakra-ui/icons'
import Footer from "./Footer"
import Nav from "./Nav"

const styles = {
    // mainDropdown:{
    //     background:"#333",
    //     // variant="ghost"
    //     mx:1,
    //     py:([1, 2, 2]),
    //     px:4,
    //     borderRadius:5,
    //     // _hover:{ bg: useColorModeValue("black", "black") },
    //     ariaLabel:"Courses",
    //     fontWeight:"normal",
    //     // onMouseEnter={onOpen}
    //     // onMouseLeave={onClose}
    // },
    dividerLine:{
        // width: "0%",
        height:"80px",
        borderWidth: "0.5px",
        // borderStyle:"solid",
        // margin: "0px auto",
        // borderImage: "1px solid black",
        borderColor:"#363638",
    },
    staricon:{
        margin:"0px"
    },

// select tag styles
heading:{
    fontSize:"24px",
    letterSpacing: "normal",
    lineHeight:"1.4",
},
by:{
    fontSize:"15px",
    lineHeight:"1.4",

},

courseSelector:{
    
    width:"100%",
    height:"50px",
    background:"#333",
    padding: "14px 20px",
    borderRadius:"10px",
    position: "relative",
    cursor: "pointer",
    fontWeight: "Bold",
    lineHeight:"1.5",
    margin: 0,
},

threerows:{
    background:"#333",
    borderRadius:"5px",
    width:"auto",
    padding:"5px"
},
// circle:{
//     fill: "rgb(34, 34, 34)",
//     cx: "260.736",
//     cy: "260.736",
//     r: "132.736"
// },
mainH: {
    fontSize: "48px",
       lineHeight: "100%",
       letterSpacing: "normal",
       color: "#fff",
    //    margin:"45px 0"
    marginBottom:"20px",
    marginLeft:"-25%"
},
subH2:{
    fontSize: "32px",
    lineHeight: "100%",
    letterSpacing: "normal",
    color: "#fff",
    //    margin:"45px 0"
    marginBottom:"20px",
},
subH3:{
    color: "#e40084",
    fontFamily: 'PS Commons Bold',
    fontSize: "16px",
    letterSpacing: "1px",
    // margin: "0 0 20px 0",
    textAlign:"left",
    marginLeft:"-75%",
    fontWeight:"bold",
    letterSpacing: "3px",
    // marginLeft:"-25%"

 },
 desc:{
    fontSize: "20px",
    color: "#fff",
    marginBottom: "20px",
    lineHeight:"1.4",
    textAlign:"left",
    // marginLeft:"10%"

},
//right part
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
   height:"50px"
 },
 rightCard:{
    width:"70%",
    background:"#222",
    // border:"1px solid red",
    alignItems:"flex-start",
    paddingBottom:"5%",
    paddingTop:"5%",
    paddingLeft:"5%",
    paddingRight:"5%",
    marginRight:"3%",
    borderRadius:"5px",
    borderBottom:"1px solid grey",
    marginBottom:"-6px",
    

 },
 subH4:{
    fontSize: "26px",
    fontWeight:"bold",
 },
 subH5:{
    fontSize: "17px",
    fontWeight:"bold",
    textAlign:"left"
 },
 tworows:{
    background: "#34383c",
    borderRadius: "50px",
    padding: "6px 12px",
    marginRight: "10px",
    marginBottom: "10px",
    text:{
        fontSize: "16px",
        color: "#fff",
        fontWeight: "700",
    }
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
 lastDivider:{
    background: "linear-gradient(to bottom,#26c1e1 0,#26c1e1 33%,#86ce21 33%,#86ce21 33%,#86ce21 68%,#ffc200 68%,#ffc200 100%)",
    width: "5px",
    height: "100%",
    position: "absolute",
    // top: 0,
    // left: 0,
    borderRadius: "10px 0 0 10px",
    zIndex: 1
 },

 //lower feedbacl forms
 feedbackgrid:{
    img:{
       width: "50px",
       height: "50px",
       borderRadius: "100px",
       display: "inline-block",
       verticalAlign: "middle"
    },
    desc:{
        fontSize: "15px",
        color: "#fff",
       marginTop: "20px",
       textAlign:"left",
       lineHeight: 1.5,
    },
    title:{
        fontSize: "18px",
        color: "#fff",
        marginLeft: "20px",
    }
 },
 lastH:{
    fontSize: "38px",
    lineHeight: "100%",
    letterSpacing: "normal",
    color: "#fff",
    // marginBottom: "20px",
    marginRight:"20px",
    // padding: "18px 34px",
    textAlign:"left",
}
}




const course=  [
    {     mainH:"Javascirpt: Getting Started",
              by:"by Mark Zamoyta",
              time:"3h 58m ",
              stars:4,
              review:"(1868)" },
    { mainH:"JavaScript 7 Syntax and Operators",
          by:"by Paul D. Sheriff",
          time:"11h 42m ",
          stars:4,
          review:"(231)" },
    {  mainH:"JavaScript 2018 Variables and Types",
            by:"by Barry Luijbregts",
            time:"43m",
            stars:4,
            review:"(229)" },
    {  mainH:"JavaScript Objects, Prototypes, and Classes",
            by:"by Jim Cooper",
            time:"11h 45m",
            stars:5,
            review:"(335)" },
    {  mainH:"JavaScript: Functions",
            by:"by Prateek Parekh",
            time:"48m",
            stars:4,
            review:"(259)" },
    {  mainH:"Javascirpt: Getting Started",
            by:"By : Prof ABC",
            time:"3h 58m",
            stars:4,
            review:"(1868)" },
    {  mainH:"JavaScript Arrays and Collections",
            by:"by Jeff Batt",
            time:"11 35m",
            stars:3,
            review:"(235)" },
    {  mainH:"Javascript Generators and Iterators",
            by:"by Marques Woodson",
            time:"11h 25m",
            stars:3,
            review:"(230)" },
    {  mainH:"Working with JavaScript Modules",
            by:"by Jonathan Mills",
            time:"45m",
            stars:3,
            review:"(238)" },
    {  mainH:"JavaScript Promises and Async Programming",
            by:"by Nate Taylor",
            time:"11h 45m",
            stars:5,
            review:"(704)" },
    {  mainH:"JavaScript Security: Best Practices",
            by:"by Marcin Hoppe",
            time:"11h 31m",
            stars:3,
            review:"(113)" }
]



    
function Body({heading,by,time, star, review}){
    
    return(
        <Box mb="10px" bg="black" w="100%">
            
             <HStack ml="10px"marginBottom="-5%" >
                 <VStack>
                 <Icon viewBox='0 0 200 200'  border="1px solid white"   borderRadius="100%" > <path   d='0'  /> </Icon>
                       <VStack style={styles.dividerLine}> </VStack>
                 </VStack>
                 {/* justifyContent={"flex-start"} justifyItems="flex-start" alignContent={"flex-start"} */}
                 <VStack  w="100%"  alignItems="flex-start" >
                    <Heading style={styles.heading}>{heading}</Heading>
                    <HStack w="100%"  justifyContent="space-between" alignItems={"center"}>
                        <Text style={styles.by}>{by}</Text>
                        <HStack>
                        <Text style={styles.by}>{time}</Text>
                        <Image w="15px"  src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/clock.png" />
                        </HStack>
                        <HStack paddingRight="5%">
                        <Box ml="10px"> {new Array(star).fill("").map((_, i) => ( <StarIcon style={styles.staricon} key={i}  color={i < star ? "#f7a614" : "black"}  /> ))} </Box>
                        <Text>{review}</Text>
                        </HStack>
                    </HStack>
                      <Divider orientation="horizontal" border={"0.5px solid #363638"} l="100%" />
                 </VStack>
             </HStack>
        </Box>
    )
}

const feedBackarr = [
    {
        img:"https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg",
        title:"Mark Zamoyta",
        desc:"Mark started in the developer world over 25 years ago. He began his career with a Bachelor of Science in Computer Science from St. Johns University. After spending 10 years on Wall Street working for Goldman Sachs, Lehman Brothers and other major investment banks, Mark became interested in animation and video game software. He has written numerous mobile apps and games for clients including Electronic Arts and Yahoo! Games."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/a4d1169c-fd62-46ea-9e46-e7ae41428f04.jpeg",
        title:"Paul D. Sheriff",
        desc:"Paul has over thirty years of experience architecting information systems and his expertise is in much demand from Fortune 500 companies. Paul is a Pluralsight author, has published 400+ articles, and authored over 14 books on topics ranging from JavaScript, Angular, C#, SQL Server and many .NET technologies. Paul is a frequent speaker at conferences and user groups."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/92b122b0-4503-43f2-8544-daeb17d023cd.png",
        title:"Barry Luijbregts",
        desc:"Barry is an independent software architect and developer with a passion for the cloud. He is also a Pluralsight author and a podcast host. He has worked for lots of companies throughout the last decades and is keen to share his knowledge with the community. He has a broad and deep knowledge of the Microsoft stack with a special interest on web technology and the cloud. He currently teaches people about the benefits of the cloud. You can reach Barry on Twitter @AzureBarry"
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg",
        title:"Jim Cooper",
        desc:"Jim Cooper is a software developer at Pluralsight, with more than 20 years of software development experience. He has a passion for Agile processes, especially lean software development. Jim has been developing production Angular apps since before Angular version 1.0, including Pluralsight's first Html5-based video player. Jim has over 10 years of TDD and pair programming experience which has contributed significantly to his professional development. He has successfully mentored other developers in the use of TDD and agile practices and still enjoys learning from talented developers everywhere."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/b740e395-5b77-4b8a-bd35-781a7788a5ba.jpeg",
        title:"Prateek Parekh",
        desc:"Prateek is a software engineer that has been working on designing, developing, and testing enterprise as well as customer facing applications for companies like Zoom, Sun Microsystems, Oracle, and eBay. His interests include architecture, distributed systems, and security. He is passionate about technology and how it can help make learning fun, engaging, and widely accessible."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/aef1f7b5-64b9-4115-acfb-910a6dba9ae9.jpg",
        title:"Jeff Batt",
        desc:"Jeff has 10+ years experience in the digital learning and media industry. Currently he is Founder and Head Trainer/Sensei at Learning Dojo, a company dedicated to training you to become a software ninja in a variety of eLearning, web, and mobile related software applications. Jeff is also the Digital Learning Development Manager for The Church of Jesus Christ of Latter-day Saints, producing online training for the Church world wide. Jeff has also been the Product Development Manager for eLearning Brothers with responsibility for the design, development, and management over their world-class digital learning templates library building templates in Storyline, Studio '13, Captivate, Adobe Edge Animate, Lectora, HTML5, Flash, and more. Prior to his work at eLearning Brothers, Jeff was the Design & Professional Services Manager for CallidusCloud's online eLearning authoring tool Litmos Author. Jeff is a regular conference speaker and industry leader regarding digital learning technologies such as TinCan API (xAPI), AppceleratorStudio, Articulate Storyline, Adobe Edge Animate, Tumult Hype, jQuery Mobile, iBooks Author, HTML 5, and More."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/7265d297-53d8-44a1-a49c-8f99d777b866.jpeg",
        title:"Marques Woodson",
        desc:"development, and Node.js applications. As a family man living in Chicago, he's had the chance to work with large enterprises doing legacy code optimization and refactoring, and startups building from the ground up. I'm passionate about experimenting with Javascript frameworks and libraries and figuring out what would work best for my current team/project. He also really enjoys teaching and mentoring new developers."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/jonathan-mills-v2.jpg",
        title:"Jonathan Mills",
        desc:"Jonathan is a Pluralsight Author, Technology Advisor, and Business Leader. As a member of the Chief Digital Advisory team at World Wide Technology, Jonathan is able to leverage his unique experiences and skills to drive digital transformation for his clients. As a dedicated developer community leader, Jonathan serves on the board of directors for the Kansas City Developers Conference, is a Microsoft MVP, and is a regular speaker and keynote presenter at conferences around the globe."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/nate-taylor-v2.jpg",
        title:"Nate Taylor",
        desc:"Nate's first program was written in QBasic on an 8086 clone his dad built. Since then he's written applications in C++, .NET, and Node.js. He spent the first 12 years of his career writing Windows applications before transitioning to write applications for the web. Regardless of the language or type of application he's written, he strives for writing clean, testable, and maintainable code. In addition to his day job as a developer, Nate also enjoys speaking at various conferences. He will typically be found talking about topics such as TDD, clean code, or professionalism."
    },
    {
        img:"https://pluralsight.imgix.net/author/lg/08f9ff65-6918-4d4d-a6c9-f406931f4f37.jpg",
        title:"Marcin Hoppe",
        desc:"Marcin Hoppe is a principal engineer on the Auth0 Platform Security team at Okta. He is passionate about building secure applications and promoting security best practices in the software development community. Marcin’s experience covers software engineering and various areas of information security, such as identity and access management, application and cloud infrastructure security, zero-trust architectures, cryptography, and privacy."
    },
    // {
    //     img:"",
    //     title:"",
    //     desc:""
    // },

]

function FeedBack({img,title,desc}){

    return(
        <VStack  justifyContent={"flex-start"}  alignItems="flex-start">
                <HStack mt="10px">
                    <Image style={styles.feedbackgrid.img} src={img} />
                    <Text>{title}</Text>
                </HStack>
                <Text style={styles.feedbackgrid.desc}>{desc} </Text>
        </VStack>
        
    )
}

function Javascript(){
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
    <Box bg="black" color="white" >
        <Nav />
        <HStack mt="20px">
         
                {/* left part */}
            <VStack w="50%" marginLeft="5%"  marginTop="-60%">
                {/* this part is just above the course select tag */}
                <VStack marginBottom="50px" >
                        <Text style={styles.subH3}> LEARNING PATHS</Text>
                        <Heading style={styles.mainH}>JavaScript Core Language</Heading>
                        <Text style={styles.desc}>JavaScript is an interpreted programming language that conforms to the ECMAScript 
                        specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. 
                        It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, 
                        and first-class functions. In this path you will learn the basics of JavaScript 
                        as well as more advanced topics such as promises, asynchronous programming, proxies and reflection.</Text>
                        <Text style={styles.subH2}>Courses in this path</Text>
                        <HStack gap="30px" >
                                <HStack style={styles.threerows}> 
                                    <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course-play-icon.png" />
                                    <Text>10 Courses</Text>
                                </HStack>

                                <HStack style={styles.threerows}> 
                                    <Image w="15px" src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/clock.png" />
                                    <Text>16 Hours</Text>
                                </HStack>

                                <HStack style={styles.threerows}> 
                                    <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course-play-icon.png" />
                                    <Text>SKill IQ</Text>
                                </HStack>
                        </HStack>
                </VStack>
                            {/* this part is course select tag */}
                        <Menu isOpen={isOpen} bg="black"   >
                            <MenuButton  onClick={isOpen? onClose: onOpen}  style={styles.courseSelector} >
                                <Flex justifyContent={"space-between"} alignItems="center"> <Text> JavaScript Core Language</Text> {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</Flex>  
                            </MenuButton>
                            <MenuList  bg="black"  w="69%" border="none" >
                                <Text style={styles.by}>Dive into JavaScript while learning the basics of arrays, collections, and functions as well as advanced topics such as promises and asynchronous programming.</Text>
                                {course.map((el,i)=>(<Body key={i} heading={el.mainH} by={el.by} time={el.time} star={el.stars} review={el.review} />))}
                            </MenuList>
                        </Menu>

            </VStack>

                                {/* Right part */}

            <VStack w="50%"  > 
                <VStack style={styles.rightCard}>
                    <Text style={styles.subH4}>Try For Free</Text>
                    <Text style={styles.subH5}>Get this learning path plus top-rated picks in tech skills and other popular topics.</Text>
                    <Button style={styles.viewPlans}>GET STARTED</Button>
                </VStack>

                <VStack style={styles.rightCard}>
                    <Text style={styles.subH4}>Your 10 day free trial includes</Text>
                    <HStack>
                        <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/courses-icon.png" />
                        <VStack alignItems="flex-start">
                            <Text style={styles.subH5}>Expert-led courses</Text>
                            <Text style={styles.subH5}>Keep up with the pace of change with thousands of expert-led, in-depth courses.</Text>
                        </VStack>
                    </HStack>
                </VStack>

                <VStack style={styles.rightCard}>
                    <Text style={styles.subH4}>For teams</Text>
                    <Text color="#e40084">Give up to 10 users</Text>
                    <Text style={styles.subH5}>access to our full library including this path free for 14 days</Text> 
                </VStack>

                <Spacer/>
                <Spacer />
                <VStack style={styles.rightCard}>
                    <Text style={styles.subH4}>What You Will Learn</Text>
                    <VStack marginLeft="5%" textAlign="justify">
                    <UnorderedList >
                            <ListItem>Utilize modules for code organization</ListItem>
                            <ListItem>Employ classes for code organization</ListItem>
                            <ListItem>Understand communication and browser integration</ListItem>
                            <ListItem>Demonstrate asynchronous programming techniques</ListItem>
                            <ListItem>Use proxies and reflection</ListItem>
                    </UnorderedList>
                    </VStack>
                    <Spacer />
                    <Divider border={"0.5px solid grey"}/>
                    <Spacer />
                    <Text style={styles.subH4}>Experience</Text>
                    <VStack marginLeft="5%" textAlign="justify">
                    <UnorderedList >
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            
                    </UnorderedList>
                    </VStack>
                </VStack>
                <Spacer />
                <Text style={styles.subH4} >Other Related Topics</Text>
                <HStack>
                    <Box style={styles.tworows}>
                        <Text style={styles.tworows.text}>HMTL</Text>
                    </Box>

                    <Box style={styles.tworows}>
                        <Text style={styles.tworows.text}>Node.js</Text>
                    </Box>
                </HStack>

                <VStack style={styles.rightCard}>
                    <HStack>
                         <VStack  position="absolute" top= "0" left="0" zIndex="1" >
                          <Divider orientation="vertical" style={styles.lastDivider} />
                         </VStack>
                         <VStack style={styles.rightCard} borderBottom="none">
                            <Image w="80px" src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/skill-iq-logo-white.png" />
                            <Text style={styles.subH4}>Not sure where to start?</Text>
                            <Text style={styles.subH5}>See where your skills stand and where you can grow.</Text>
                            <Button style={styles.tryForFree}>TAKE A SKILL ASSESSMENT TEST</Button>
                          </VStack>
                    </HStack>
                </VStack>
    
            </VStack>
                              {/* feedback part */}
            
        </HStack>
        <VStack bg="#1d1d1d" mt="5%">
                <Heading textAlign={"left"} ml="-65%" mt="3%" mb="-3%">Learn with the best</Heading>
                <Center>
                <Grid  templateColumns='repeat(3, 1fr)' gap="4"  marginTop="5%" w="90%" >
                    {feedBackarr.map((el,i)=> (<FeedBack key={i} img={el.img} title={el.title} desc={el.desc} />))}
                    </Grid>
                </Center>
        </VStack>

        <HStack justifyItems={"center"} marginTop="50px"
            justifyContent={"space-evenly"} alignItems="center" alignContent={"center"} marginBottom="50px" >
                <VStack alignItems="flex-start">
                <Heading style={styles.lastH} >Join our learners and upskill</Heading>
                <Heading style={styles.lastH} >in leading technologies</Heading>
                </VStack>
                <Button style={styles.viewPlans}>GET STARTED</Button>
            </HStack>

            <Footer  />     
    </Box>
    
)
}

export default Javascript