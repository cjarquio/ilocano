import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {LsiRouter} from './components/LsiRouter/LsiRouter'

interface Route {
  title: string,
  section: string[] 
}

export const App = () => {
  const [routes, setRoutes] = useState<Route[]>()

  useEffect(() => {
    const refreshList = () => {
      axios
        .get(`/api/lessons/routes`)
        .then((res) => res.data)
        .then((currentRoutes) => setRoutes(currentRoutes))
        .catch((err) => console.log(err));
    }

    refreshList()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box padding={'1rem'}>
        {/** Add App header */}
        {routes ? <LsiRouter routes={routes} /> : <>This should be an error page</>}
      </Box>
      {/** TODO: Add footer with previous/next section buttons */}
    </ChakraProvider>
  )
}
