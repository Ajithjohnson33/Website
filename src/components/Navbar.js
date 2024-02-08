
import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Navbar() {

  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="purple"
      color="white"
    >
      <Link
        href="#"
        textDecoration="none"
        style={{ fontSize: "2.5rem" }}
        color="white"
        margin="10px"
      >
        Edpide
      </Link>

      {/* <Link href="#" textDecoration="none" color="white">
        Featues
      </Link> */}

      <Link href="/templates" textDecoration="none" color="white">
        Templates
      </Link>

      <Link href="/packages" textDecoration="none" color="white">
        Packages
      </Link>


      <Link href="/register" textDecoration="none" color="white">
        Register
      </Link>

      

      <Link href="/login" textDecoration="none" color="white">
        Login
      </Link>


    </Flex>
  );
}

export default Navbar;
