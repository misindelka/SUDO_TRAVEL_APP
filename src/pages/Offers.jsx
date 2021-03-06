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
  const [search, setSearch] = React.useState('')
  const { data, error, isLoading } = useOffers()
  const [filteredData, setFilteredData] = React.useState()
  // eslint-disable-next-line no-unused-vars
  const [selectedCountry, setSelectedCountry] = React.useState()
  const toast = useToast()
  if (error) {
    toast({ status: 'error', title: 'something wrong ', description: 'sorry' })
  }

  const handleFilters = () => {
    setOnlyNew(!onlyNew)
  }

  // eslint-disable-next-line consistent-return
  const filterItems = () => {
    setFilteredData(
      data.filter((i) => {
        return Object.keys(i).some((key) => {
          return i[key].toString().toLowerCase().includes(search)
        })
      })
    )
  }

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
    filterItems()
  }

  const renderData = !search ? data : filteredData

  return (
    <>
      <Header handleSearch={handleSearch} />
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
              renderData.map(
                ({
                  id,
                  thumbnail,
                  nights,
                  city,
                  country,
                  price,
                  rating,
                  reviewCount,
                  createdAt,
                }) => {
                  return onlyNew ? (
                    isItemNew(createdAt) && (
                      <Card
                        key={id}
                        imageUrl={thumbnail}
                        numberOfNights={nights}
                        destination={city}
                        country={country}
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
                      country={country}
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
