import React, { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import axios from "axios"
import { DialogSection } from '../DialogSection/DialogSection'
import { useLocation } from 'react-router-dom'
import { lessonNames, sectionTypes } from '../Lesson/lessonNames'

interface LessonComponentProps {
  showDialogSection?: boolean,
  children?: React.ReactNode
}

interface LessonProps {
  id: number,
  title: string,
  section: {sectionType: string, description: string}[],
  words_for_lesson: {ilocano: string, english: string}[]
  dialog: string[]
}

export const Lesson: React.FC<LessonComponentProps> = (props: LessonComponentProps) => {
  const {showDialogSection=true, children} = props
  const [lesson, setLesson] = useState<LessonProps>()
  const location = useLocation()

  useEffect(() => {
    const refreshList = () => {
      const pathnames = location.pathname.split('/').filter((path => path !== ''))
      const currentLesson = lessonNames[pathnames[0] as keyof typeof lessonNames]
      const currentSection = sectionTypes[pathnames[1] as keyof typeof sectionTypes]
      
      axios
        .get(`/api/lessons/?current_lesson=${currentLesson}&&current_section=${currentSection}`)
        .then((res) => res.data)
        .then((currentLessonData) => setLesson(currentLessonData[0]))
        .catch((err) => console.log(err));
    }

    refreshList()
  }, [location.pathname])

  return (
    <>
      <Text fontSize={'xl'}>{lesson?.section[0].sectionType} {lesson?.title}</Text>
      <Text fontSize={'xl'}>{lesson?.section[0].description}</Text>
      {
        showDialogSection && lesson && <DialogSection dialog={lesson.dialog} dialogWords={lesson.words_for_lesson} />
      }
      {children}
    </>
  )
}


