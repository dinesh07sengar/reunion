import { Box, Button, Divider, Grid, Heading, Input, Select, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Body } from '../card/Body'


export const Home = () => {
  const [state, setstate] = useState({ Date: "", price: "100000", propertytype: "All", city: "" })
  const[data,setdate]= useState([])
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(value)



    setstate({ ...state, [name]: value })

  }
  const handlesort=()=>{
    let sortedData = [...data];

    
    if (state.city !== 'all') {
      sortedData = sortedData.filter(ele => ele.Location === state.city);
    }
  
    
    if (state.Date !== '') {
      sortedData = sortedData.filter(ele => new Date(ele.availableFrom) >= new Date(state.Date));
    }
  
    
    sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  
    
    if (state.propertytype !== 'All') {
      
      sortedData = sortedData.filter(ele => ele.propertyType === state.propertytype);
    }
  
    
    setdate(sortedData);
  };
  

  
 
  
  
  
  
  
 
  const fetchData=async()=> {
    console.log("yha aya")
    const response = await fetch("https://reunion-8fgk.onrender.com/api/list-properties");
    const res = await response.json();
    console.log(res.data);
    setdate(res.data)
  }

  useEffect(()=>{
    fetchData()


  },[])
  return (
    <Box w={"86%"} m={"2% auto"}>
      <Box>
        <Heading textAlign={"left"} size={"lg"} mb={"2%"}>Search Properties for rent</Heading>
        <SimpleGrid columns={["1","2","5"]} gap={"1"} textAlign={"left"} bg={"#D9D9D9"} px={" 1%"} borderRadius={"20px"} fontWeight={"bold"}>
          <Box alignItems={"left"} textAlign={"left"} p={"2%"} borderRight={"2px solid #6B6B6B"}>
            <Text>City</Text>
            <Select name='city' onChange={handleChange} value={state.city} size={"sm"} >
              <option value={"all"}>Anywhere</option>
              <option value={"mumbai, thane"}>mumbai</option>
              <option value={"Goa"}>Goa</option>
              <option value={"Delhi"}>Delhi</option>
              <option value={"Lucknow"}>Lucknow</option>
            </Select>
          </Box>
          <Box p={"2%"} borderRight={"2px solid #6B6B6B"}>
            <Text>Available From</Text>
            <Input
              size={"sm"}
              type='Date'
              name='Date'
              value={state.Date}
              onChange={handleChange}
            />
          </Box>
          <Box p={"2%"} borderRight={"2px solid #6B6B6B"}>
            <Text>Price <span >&#8377;{state.price}</span></Text>

            <input
              style={{ width: "100%" }}


              type='range'
              name='price'
              value={state.price}
              onChange={handleChange}

              min={1000}
              max={100000}
              step={10}

            />



          </Box>

          <Box p={"2%"} >
            <Text>Property type</Text>
            <Select name='propertytype' onChange={handleChange} value={state.propertytype} size={"sm"}>
              <option value={"All"}>All</option>
              <option value={"House"}>House</option>
              <option value={"Villa"}>Villa</option>
              <option value={"1 bhk flat"}>1 bhk flat</option>
              <option value={"2 bhk flat"}>2 bhk flat</option>
              <option value={"apartment"}>apartment</option>
            </Select>

          </Box >
          <Box textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"#7A7EEE"} color={"white"} fontWeight={"semibold"} w={"120px"} borderRadius={"20px"} onClick={handlesort}>Apply</Button>
          </Box>

        </SimpleGrid>
        <Body  data={data}/>


      </Box>
    </Box>
  )
}
