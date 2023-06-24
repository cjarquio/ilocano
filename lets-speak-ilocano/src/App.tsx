import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LsiRouter } from "./components/LsiRouter/LsiRouter";
import { LessonDataProps } from "./components/Lesson/Lesson";

export const App = () => {
  const [lessonData, setLessonData] = useState<LessonDataProps>();

  useEffect(() => {
    axios
      .get(`/api/lessons/?current_lesson=1`)
      .then((res) => res.data)
      .then((currentLessonData: LessonDataProps[]) => {
        setLessonData(currentLessonData[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box padding={"1rem"}>
        {/** Add App header */}
        {lessonData && <LsiRouter lessonData={lessonData} />}
      </Box>
      {/** TODO: Add footer with previous/next section buttons */}
    </ChakraProvider>
  );
};
