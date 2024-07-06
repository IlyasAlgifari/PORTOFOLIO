import { Box, Text, Input, IconButton, ButtonGroup, Button, Image, SimpleGrid, Link} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import LinkedIn from "../../assets/LinkedIn Logo.png"
import GitHub from '../../assets/github_PNG40.png'
import Instagram from '../../assets/IG.png'
import Logo from '../../assets/LogoTransparans.png'

function MyFooter() {
  const navigate = useNavigate()
  return (<>
    <SimpleGrid spacing={5} minChildWidth="260px" bg="#1A1A1A" padding="35px 20px">
      
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row" alignContent="center">
          <Image boxSize="30px" src={Logo}></Image>
          <Text fontWeight="700" fontSize="24px" color="white">Ilyas.</Text>            
          </Box>

          <Text color="white" padding="30px 0px">Contact me for collaboration and speaking engagement opportunities!</Text>
          <Box>
            <ButtonGroup>
              <Link href="https://www.linkedin.com/in/mochamad-ilyas-al-gifari/" isExternal><Button  borderRadius="full" width="40px" height="40px" padding="0"><Image padding="0" boxSize="20px" src={LinkedIn}/></Button></Link>
              <Link href="https://github.com/IlyasAlgifari" isExternal><Button borderRadius="full" width="40px" height="40px" padding="0"><Image padding="0" boxSize="30px" src={GitHub}/></Button></Link>
              <Link href="https://www.instagram.com/ilyasgifari/" isExternal><Button borderRadius="full" width="40px" height="40px" padding="0"><Image padding="0" boxSize="23px" src={Instagram}/></Button></Link>
            </ButtonGroup>
          </Box>
        </Box>
      
        <Box display="flex" flexDirection="column">
            <Text fontWeight="500" fontSize="18px" margin="0px" marginBottom="10px" color="white">Navigation</Text>
            <Text onClick={() => navigate("/")} alignContent="start" fontSize="16px" fontWeight="400" marginTop="8px" color="white" _hover={{cursor: "pointer"}}>Home</Text>
            <Text onClick={() => navigate("/portofolio")} fontSize="16px" fontWeight="400" marginTop="8px" color="white" _hover={{cursor: "pointer"}}>Portofolio</Text>
            <Text onClick={() => navigate("/contact")} fontSize="16px" fontWeight="400" marginTop="8px" color="white" _hover={{cursor: "pointer"}}>Contact</Text>
        </Box>

        <Box display="flex" flexDirection="column">
            <Text fontWeight="500" fontSize="18px" margin="0px" marginBottom="10px" color="white">Contact</Text>
            <Text fontSize="16px" fontWeight="400" marginTop="8px" color="white">0857-9499-9246</Text>
            <Text fontSize="16px" fontWeight="400" marginTop="8px" color="white">ilyasalgifari23@gmail.com</Text>
            <Text fontSize="16px" fontWeight="400" marginTop="8px" color="white">Sukabumi, Jawa Barat</Text>
        </Box>

        <Box display="flex" flexDirection="column">
            <Text fontWeight="500" fontSize="18px" margin="0px" marginBottom="10px" color="white">Get the latest informastion</Text>
            <ButtonGroup>
            <Input type="email" color="white" placeholder="Email Address"/>
            <IconButton colorScheme="red" aria-label="send email" icon={<EmailIcon/>}/>
            </ButtonGroup>
        </Box>

    </SimpleGrid>
    <Box display="flex" justifyContent="center" alignItems="center" bg="red" height="40px">
      <Text color="white" >&copy; 2024 by Mochamad Ilyas Al Gifari.</Text>
    </Box>

    </>
    
  );
}
export default MyFooter;