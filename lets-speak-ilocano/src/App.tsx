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
  return (
    <ChakraProvider theme={theme}>
      <Box padding={'1rem'}>
        {/** Add App header */}
        <LsiRouter />
      </Box>
      {/** TODO: Add footer with previous/next section buttons */}
    </ChakraProvider>
  )
}
