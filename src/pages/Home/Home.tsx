import { Box, Button, Text, Image, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Me from '../../assets/IMG_0366.png'

function Home() {
  const navigate = useNavigate()

  return (
        
          <Box 
          display="flex" 
          flexDirection="row" 
          justifyContent="center" 
          bg="#1A1A1A"
          padding="25px 20px"
          >
            <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            bg="#1A1A1A" 
            paddingBottom="56px" 
            padding="20px"
            >
              <Image
              className="animate__animated animate__zoomIn animate__delay-0.6s" 
              marginLeft="10px" 
              boxSize={{base:"200px", md: "280px",lg: "300px", '2xl': "500px"}} 
              src={Me}></Image>
              <Text 
              className="animate__animated animate__fadeInUp animate__delay-0.7s"
              fontSize={{base:"24px", md:"36px", lg:"44px", '2xl': "60px"}} 
              fontWeight="700" width={{base:"380px", md: "600px", lg: "700px", '2xl': "1000px"}} 
              textAlign="center" color="white">
                Hallo! I'm Ilyas Al Gifari, Student Web Devlopment in Purwadhika.</Text>
              <Text 
              className="animate__animated animate__fadeInUp animate__delay-0.7s"
              fontSize={{base:"14px", md:"16px", '2xl': "24px"}} 
              fontWeight="400" 
              width={{base:"365px", md: "600px", lg:"700px", '2xl': "1080px"}} 
              textAlign="center"
              margin="10px 10px" 
              color="white">
                My passion for building digital products is shaped by having the mindset of putting humans in the center of attention; to ensure the product team is solving the right problem for the people.</Text>
              <Button
              className="animate__animated animate__fadeInUp" 
              marginTop="30px" 
              bg="#f53838" 
              color="white" 
              fontWeight="700" 
              fontSize="16px" 
              border="0" 
              padding="12px 48px" 
              _hover={{bg: "white", color:"#f53838"}}
              onClick={() => navigate("/portofolio")}
              >
                View My Portfolio</Button>
            </Box>
          </Box>

  );
}
export default Home;
