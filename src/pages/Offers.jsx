import * as React from 'react'
import { useToast, Spinner, Box, Flex } from '@chakra-ui/react'
import { isItemNew } from '../helpers/isItemNew'
import { formatPrice } from '../helpers/formatPrice'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { useOffers } from '../hooks'
import { SideBar } from './components/SideBar'

export const Offers = () => {
  const [onlyNew, setOnlyNew] = React.useState(false)

  const { data, error, isLoading } = useOffers()
  const toast = useToast()
  if (error) {
    toast({ status: 'error', title: 'something wrong ', description: 'sorry' })
  }

  const handleFilters = () => {
    setOnlyNew(!onlyNew)
  }
  // const isItemNew = (props) => differenceInMonths(new Date(), new Date(props)) < 6

  return (
    <>
      <Header />
      <Flex direction="row">
        <Box>
          <SideBar handleFilters={handleFilters} />
        </Box>

        <Box m="2">
          <Flex wrap="wrap">
            {isLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              data?.map(
                ({ id, thumbnail, nights, city, price, rating, reviewCount, createdAt }) => {
                  return onlyNew ? (
                    isItemNew(createdAt) && (
                      <Card
                        key={id}
                        imageUrl={thumbnail}
                        numberOfNights={nights}
                        destination={city}
                        formatedPrice={formatPrice(price)}
                        rating={rating}
                        reviewsCount={reviewCount}
                        linkTo="/offers/1"
                        isNew={isItemNew(createdAt)}
                      />
                    )
                  ) : (
                    <Card
                      key={id}
                      imageUrl={thumbnail}
                      numberOfNights={nights}
                      destination={city}
                      formatedPrice={formatPrice(price)}
                      rating={rating}
                      reviewsCount={reviewCount}
                      linkTo="/offers/1"
                      isNew={isItemNew(createdAt)}
                    />
                  )
                }
              )
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
