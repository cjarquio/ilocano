import React, { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import axios from "axios";
import { DialogSection } from '../DialogSection/DialogSection'

interface LessonWrapperProps {
  currentLesson: number,
  currentSection: number,
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

export const LessonWrapper: React.FC<LessonWrapperProps> = (props: LessonWrapperProps) => {
  const {currentLesson, currentSection, showDialogSection=true, children} = props
  const [lesson, setLesson] = useState<LessonProps>()

  useEffect(() => {
    const refreshList = () => {
      axios
        .get(`/api/lessons/?current_lesson=${currentLesson}&&current_section=${currentSection}`)
        .then((res) => res.data)
        .then((currentLessonData) => setLesson(currentLessonData[0]))
        .catch((err) => console.log(err));
    }

    refreshList()
  }, [currentLesson, currentSection])

  return (
    // TODO: Immplement local storage to get lesson and section number
    <>
      {/** Put Router here */}
      <Text fontSize={'xl'}>{lesson?.section[0].sectionType} {lesson?.title}</Text>
      <Text fontSize={'xl'}>{lesson?.section[0].description}</Text>
      {
        showDialogSection && lesson && <DialogSection dialog={lesson.dialog} dialogWords={lesson.words_for_lesson} />
      }
      {children}
    </>
  )
}


