import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button,  IconButton,  Spacer, Text, Menu, MenuItem, MenuButton, MenuList, Tooltip, Image, SimpleGrid} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/LogoTransparans.png"

import "./myNavbar.css"

function myNavbar() {
  const navigate = useNavigate()
  return (
    <SimpleGrid spacing={5} minChildWidth="260px" bg="#1A1A1A" padding="10px 10px">
    <Box
      className="box-container"
      padding="20px 20px"
      bg="#1A1A1A"
      alignItems="center"
    >
      
      <Box
        className="box-brand"
        fontWeight="700"
        fontSize="24px"
        color="white"
        onClick={() => navigate("/")}
        _hover={{cursor: "pointer"}}
      >
      <Image boxSize="40px" src={Logo} ></Image>
        Ilyas.
      </Box>
      <Spacer />
      <Box
        display={["none", "none", "flex", "flex"]}
        flexDirection="row"
        alignItems="center"
        fontWeight="600"
        fontSize="14px"
        letterSpacing="0.2px"
      >
        <Button  variant="link" color="white" padding="20px" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button variant="link" color="white" padding="20px" onClick={() => navigate("/portofolio")}>
          Portofolio
        </Button>
        <Button variant="link" color="white" padding="20px" onClick={() => navigate("/contact")}>
          Contact
        </Button>

      </Box>
      <Spacer />
      <Box 
        display={["none", "none", "flex", "flex"]} 
        flexDirection="row" 
        alignItems="center">
        <Tooltip label="Can't Use">
          <Button
            border="1px solid white"
            borderRadius="50px"
            bg="transparent"
            padding="13px 45px"
            fontWeight="700"
            fontSize="14px"
            color="white"
            _hover={{ bg: "white", color: "#1A1A1A" }}
          >
            <DownloadIcon />
            <Text paddingLeft="10px">Download CV</Text>  
          </Button>
          </Tooltip>
      </Box>
      <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="sm"
            display={["flex", "flex", "none", "none"]}
          />
          <MenuList>
            <MenuItem onClick={() => navigate("/")}>
              Home
            </MenuItem>
            <MenuItem onClick={() => navigate("/portofolio")}>
              Portofolio
            </MenuItem>
            <MenuItem onClick={() => navigate("/contact")}>
              Contact
            </MenuItem>
            <Tooltip label="Can't Use">
            <MenuItem>
              Download CV
            </MenuItem>
            </Tooltip>
          </MenuList>
      </Menu>
    </Box>
    </SimpleGrid>
  );
}

export default myNavbar;