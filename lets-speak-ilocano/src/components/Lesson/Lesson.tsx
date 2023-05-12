import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from "axios"
import { DialogSection } from '../Sections/DialogSection/DialogSection'
import { lessonNames, sectionTypes } from './lessonNames'
import {TranslatingDialogSection} from '../Sections/'

interface LessonComponentProps {
  currentLesson: string,
  currentSection: string,
  showDialogSection?: boolean
}

interface LessonProps {
  id: number,
  title: string,
  section: {sectionType: string, description: string}[],
  words_for_lesson: {ilocano: string, english: string}[]
  dialog: string[]
}

export const Lesson: React.FC<LessonComponentProps> = (props: LessonComponentProps) => {
  const {currentLesson, currentSection, showDialogSection=true} = props
  const [child, setChild] = useState<React.ReactNode>()
  const [lesson, setLesson] = useState<LessonProps>()

  const sectionContentStyles = {
    padding: '0rem 3rem',
    width: '100%'
  }

  useEffect(() => {
    const displaySection = () => {
      const apiLesson = lessonNames[currentLesson as keyof typeof lessonNames]
      const apiSection = sectionTypes[currentSection as keyof typeof sectionTypes]
      axios
        .get(`/api/lessons/?current_lesson=${apiLesson}&&current_section=${apiSection}`)
        .then((res) => res.data)
        .then((currentLessonData: LessonProps[]) => {
          setLesson(currentLessonData[0])
          switch(currentSection) {
            case sectionTypes[sectionTypes.translatingthedialog]:
              return setChild(<TranslatingDialogSection dialog={currentLessonData[0].dialog} />)
            default:
              return <></>
          }
        })
        .catch((err) => console.log(err));
    }

    displaySection()
  }, [currentLesson, currentSection])

  return (
    <Box>
      <Text fontSize={'xl'}>{lesson?.section[0].sectionType} {lesson?.title}</Text>
      <Text fontSize={'xl'}>{lesson?.section[0].description}</Text>
      <Box sx={{display: 'flex', flexDirection: 'row', padding: '0 3rem'}}>
        <Box sx={{width: '100%'}}>
          {
            showDialogSection && lesson && <DialogSection dialog={lesson.dialog} dialogWords={lesson.words_for_lesson} />
          }
        </Box>
        <Box sx={sectionContentStyles}>
          {child}
        </Box>
      </Box>
    </Box>
  )
}


