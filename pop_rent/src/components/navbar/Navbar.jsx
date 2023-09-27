import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box bg={"#CCCCCC"} p={"1% 7%"}>
        <Flex>
            <Box display={"flex"} gap={"12"}>
                <Heading my={"auto"} size={"lg"} >LOGO</Heading>
                <Text my={"auto"} fontWeight={"medium"} fontSize={"large"}>Home</Text>
            </Box>
            <Spacer/>
            <Box display={"flex"} gap={"8"}>
                <Button size={"md"} w={"110px"} bg={"#A2DEED"} borderRadius={"12px"}>Login</Button>
                <Button w={"110px"} bg={"#D1EFF7"} borderRadius={"12px"}>Signup</Button>
            </Box>
        </Flex>
    </Box>
  )
}
