import * as React from 'react'

export const useOffers = () => {
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('http://localhost:3004/offers?_limit=30')
        const getData = await res.json()
        setData(getData)
      } catch (fetchError) {
        setError(fetchError)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, error, isLoading }
}
