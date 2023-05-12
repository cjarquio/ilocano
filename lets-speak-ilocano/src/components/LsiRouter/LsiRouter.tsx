import * as React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import TableOfContents from '../TableOfContents'
import { Lesson } from '../Lesson/Lesson'

const HomePage = () => {
  return (
    <Box>
      <Text>Hello, welcome to Let's Speak Ilocano!</Text>
    </Box>
  )
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  )
}

const ReturnLesson: React.FC = () => {
  const { lesson, section } = useParams()

  if (lesson && section) {
    return <Lesson currentLesson={lesson} currentSection={section} />
  } else {
    return <NoMatch />
  }
  
}

export const LsiRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:lesson/:section' element={<ReturnLesson />} />
      <Route path='/:lesson' element={<TableOfContents />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}
