import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import VocabTable from "./components/VocabTable/VocabTable"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <VocabTable lessonNumber={1} />
    </Box>
  </ChakraProvider>
)
