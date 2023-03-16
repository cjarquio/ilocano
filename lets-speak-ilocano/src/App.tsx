import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import DialogTable from "./components/VocabTable/DialogTable"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <DialogTable lessonNumber={1} />
    </Box>
  </ChakraProvider>
)
