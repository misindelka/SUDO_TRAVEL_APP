import React from 'react'
import { Heading, Box, Center, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

export const Home = () => (
  <Box background={`url('${bg}') center / cover no-repeat`} h="100vh">
    <Center h="100vh">
      <div>
        <Heading textAlign="center" margin="4">
          Home Page
        </Heading>

        <Button as={Link} to="/offers">
          Wellcome!
        </Button>
      </div>
    </Center>
  </Box>
)
