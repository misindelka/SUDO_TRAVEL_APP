/* eslint-disable react/prop-types */
import { Box, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { times } from 'lodash-es'
import * as React from 'react'

const Stars = ({ filledCount }) => {
  return times(5, (i) => <StarIcon key={i} color={i < filledCount ? 'teal.300' : 'gray.200'} />)
}
export const Card = ({
  imageUrl,
  numberOfNights,
  destination,
  formatedPrice,
  rating,
  reviewsCount,
  // eslint-disable-next-line no-unused-vars
  linkTo,
  isNew,
}) => {
  return (
    <Box m="2" maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} />

      <Box p="3">
        <Box d="flex" alignItems="baseline">
          {isNew && (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New{' '}
            </Badge>
          )}

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {numberOfNights} NIGHTS
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {destination}
        </Box>

        <Box as="span" color="gray.600" fontSize="sm">
          {formatedPrice}
          <Box />
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Stars filledCount={rating} />
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewsCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
