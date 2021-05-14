/* eslint-disable react/prop-types */
import { Box, Image, Text, Badge } from '@chakra-ui/react'
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
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="base">
      <Image src={imageUrl} />
      {isNew && (
        <Badge borderRadius="full" p="2">
          New
        </Badge>
      )}

      <Box p="4">
        <Text fontWeight="semibold" color="gray" fontSize="xs" textTransform="uppercase">
          {numberOfNights} NIGHTS
        </Text>
        <Text>{destination}</Text>
        <Text>{formatedPrice}</Text>
        <Stars filledCount={rating} />
        <Text>{reviewsCount} reviews </Text>
      </Box>
    </Box>
  )
}
