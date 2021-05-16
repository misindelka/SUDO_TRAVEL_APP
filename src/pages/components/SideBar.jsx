import * as React from 'react'
import { Box, RadioGroup, Radio, Stack, Text, Checkbox } from '@chakra-ui/react'
import { useOffers } from '../../hooks/useOffers'

// eslint-disable-next-line react/prop-types
export const SideBar = ({ handleFilters }) => {
  const { data } = useOffers()

  const getCountries = data.map((i) => i.country)

  const countries = getCountries
    .filter((country, i) => getCountries.indexOf(country) === i)
    .sort((a, b) => a.localeCompare(b))

  return (
    <Box m="4" w="30vh" h="100%">
      <Box m="5">
        <Text fontSize="md" fontWeight="bold">
          FILTERS
        </Text>
      </Box>
      <Box m="5">
        <Checkbox onChange={() => handleFilters()}>New only</Checkbox>
      </Box>

      <Box m="5">
        <Text fontSize="sm" fontWeight="bold">
          FILTER BY COUNTRY
        </Text>
      </Box>

      <Box display="flex" m="5">
        <RadioGroup onChange="" value="">
          <Stack direction="column">
            <Radio value={0}>All</Radio>
            {countries.map((country) => (
              <Radio key={country} value={country}>
                {country}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  )
}
