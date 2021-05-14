import * as React from 'react'
import { Box, Checkbox, Text } from '@chakra-ui/react'
import { useOffers } from '../../hooks/useOffers'

export const SideBar = () => {
  const { data } = useOffers()
  return (
    <Box m="4" w="30vh" h="100%">
      <Box m="5">
        <Text fontSize="md" fontWeight="bold">
          FILTERS
        </Text>
      </Box>
      <Box m="5">
        <Checkbox>New only</Checkbox>
      </Box>

      <Box m="5">
        <Text fontSize="sm" fontWeight="bold">
          FILTER BY COUNTRY
        </Text>
      </Box>
      {data.map((i) => (
        <Box key={i.id} display="flex" m="5">
          <Checkbox size="sm" marginRight="3" />
          <Text fontSize="sm">{i.country}</Text>
        </Box>
      ))}
    </Box>
  )
}
