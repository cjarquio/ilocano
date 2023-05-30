import * as React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import TableOfContents from '../TableOfContents'
import { Lesson, LessonDataProps } from '../Lesson/Lesson'
import { lessonNames, sectionTypes } from '../Lesson/lessonNames'
import { TranslatingDialogSection } from '../Sections'

interface LsiRouterProps {
  lessonData: LessonDataProps
}

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

const ReturnLesson: React.FC<LsiRouterProps> = (props: LsiRouterProps) => {
  const {lessonData} = props
  const { currentSection } = useParams()
  

  switch (currentSection) {
    case sectionTypes[sectionTypes.dialog]:
      return <Lesson currentSection={currentSection} lessonData={lessonData} />
    case sectionTypes[sectionTypes.translatingthedialog]:
      return <Lesson currentSection={currentSection} lessonData={lessonData}><TranslatingDialogSection dialog={lessonData.dialog} /></Lesson>
    default:
      return <NoMatch />
  }
  
}

export const LsiRouter: React.FC<LsiRouterProps> = (props: LsiRouterProps) => {
  const {lessonData} = props
  
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:currentLesson/:currentSection' element={<ReturnLesson lessonData={lessonData} />} />
      <Route path='/:lesson' element={<TableOfContents />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}
