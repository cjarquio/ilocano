import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react'
import { LessonWrapper } from './components/Sections/LessonWrapper/LessonWrapper'
// TODO: Make api call for lesson content here
export const App = () => (
  // Add local storage here
  <ChakraProvider theme={theme}>
    <Box>
      {/** Add App header */}
      <LessonWrapper currentLesson={1} currentSection={1} />
    </Box>
    {/** TODO: Add footer with previous/next section buttons */}
  </ChakraProvider>
)
