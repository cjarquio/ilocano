import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { DialogSection } from "../Sections/DialogSection/DialogSection";
import { lessonNames, sectionTypes } from "./lessonNames";

interface LessonComponentProps {
  currentSection: string;
  lessonData: LessonDataProps;
  children?: React.ReactNode;
  showDialogSection?: boolean;
}

export interface LessonDataProps {
  id: number;
  title: string;
  sections: { sectionType: string; description: string }[];
  words_for_lesson: { ilocano: string; english: string }[];
  dialog: string[];
}

export const Lesson: React.FC<LessonComponentProps> = (
  props: LessonComponentProps
) => {
  const {
    currentSection,
    lessonData,
    children,
    showDialogSection = true,
  } = props;
  const sectionNumber =
    sectionTypes[currentSection as keyof typeof sectionTypes];

  const sectionContentStyles = {
    padding: "0rem 3rem",
    width: "100%",
  };

  return (
    <Box>
      <Text fontSize={"xl"}>
        {lessonData.sections[sectionNumber].sectionType} {lessonData.title}
      </Text>
      <Text fontSize={"xl"}>
        {lessonData.sections[sectionNumber].description}
      </Text>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "0 3rem" }}>
        <Box sx={{ width: "100%" }}>
          {showDialogSection && (
            <DialogSection
              dialog={lessonData.dialog}
              dialogWords={lessonData.words_for_lesson}
            />
          )}
        </Box>
        <Box sx={sectionContentStyles}>{children}</Box>
      </Box>
    </Box>
  );
};
