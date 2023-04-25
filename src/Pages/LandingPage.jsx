import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "../styles/landing.module.css"
const LandingPage = () => {
  return (
    <Box pt={"10px"} textAlign={"center"}>
      <Text className={Styles.headings} fontSize={30} h={"60px"} color={"red"} fontWeight={"bold"}>SNAKE's & LADDER's</Text>

      {/* Rolling container */}
      <Box className={Styles.diceContainer}>
        <Text className={Styles.toggle} fontWeight={"bold"} color={"teal"}>Red's Turn</Text>
        <Text className={Styles.diceCount} fontWeight={"bold"} color={"red"}>0</Text>
        <Button className={Styles.diceBtn} bg={"rgb(237, 192, 14)"} fontWeight={"bold"} _hover={{ bg: "rgb(237, 192, 14)" }}>Click To ROLL🚀</Button>
      </Box>

    </Box>
  )
}

export default LandingPage