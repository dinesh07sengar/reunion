import { Box, SimpleGrid, Card, Image, Text, Divider, Flex, Center } from '@chakra-ui/react'

import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai"


export const Body = ({data}) => {
    console.log("1 bhk flat"==data.propertyType)
    console.log(typeof(data.propertyType))
    console.log(data.propertyType)
    
    return (
        <Box mt={"10"}>
            <SimpleGrid columns={["1","2","3"]} spacingX={"2%"} spacingY={"8"}>
                {data?.map((ele, i) => {
                    console.log("1 bhk flat"==data.propertyType)
                    console.log(typeof(data.propertyType))
                    console.log(data.propertyType)

                    return <Box borderRadius={"10px"} bg={"#D9D9D9"} overflow={"hidden"} key={i+1}>

                        <Image src={ele.url} h={"250px"} w={"100%"}/>
                        <Box  p={"10px 20px"}>
                            <Text color="#7A7EEE">&#8377;{ele.price}<span style={{ color: "black" }}>/month</span></Text>
                            <Text fontSize={"md"} fontWeight={"bold"} mt={"1%"}>{ele.propertyType}</Text>
                            <Text mt={"1%"}>{ele.Location}, India</Text>
                            <Divider borderColor={"black"} my={"1%"}/>

                            <Flex justifyContent={'space-between'} fontWeight={"semibold"} flexWrap={"wrap"}>
                                <Box display={"flex"}><Center><AiOutlineCalendar /><Text>3bed</Text></Center></Box>
                                <Box display={"flex"}><Center><AiOutlineCalendar /><Text>2 bathrooms</Text></Center></Box>
                                <Box display={"flex"}><Center><AiOutlineCalendar /><Text>57x5m</Text></Center></Box>
                            </Flex>
                        </Box>


                    </Box>

                })}
            </SimpleGrid>
        </Box>
    )
}
