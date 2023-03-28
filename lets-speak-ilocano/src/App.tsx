import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react'
import { SectionWrapper } from './components/Sections/SectionWrapper/SectionWrapper'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <SectionWrapper 
        title='Getting to know you'
        description='Study the following dialog. Try to understand the meaning of each sentence by referring to the literal translations of the words on the right.'/>
    </Box>
  </ChakraProvider>
)
