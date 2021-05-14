/* eslint-disable react/no-children-prop */
import { Box, Container, Text, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { Link } from 'react-router-dom'
import header from '../../assets/header.jpg'
import { NavLink } from './NavLink'

export const Header = () => {
  return (
    <Box as="header" m="2" shadow="base">
      <Container
        maxWidth="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Text as="h2" fontWeight="bold">
            React & relax
          </Text>
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/offers">Offers</NavLink>
        </nav>
      </Container>

      <Box background={`url('${header}') center / cover no-repeat`} h="30vh" marginTop="2">
        <Container display="flex" alignItems="center" maxWidth="xl">
          <div>
            <Text as="h1" fontSize="40px" fontWeight="bold" color="white" marginTop="8">
              Find Your Next Advanture !
            </Text>

            <InputGroup size="lg" marginTop="8" textColor="white">
              <InputLeftElement children={<SearchIcon color="white" />} />
              <Input placeholder="Search........" />
            </InputGroup>
          </div>
        </Container>
      </Box>
    </Box>
  )
}
