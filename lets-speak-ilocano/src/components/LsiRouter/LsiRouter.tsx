import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"
import { Box, Text } from "@chakra-ui/react"
import { Lesson } from "../Sections/Lesson/Lesson"
interface LsiRouterProps {
  routes: {title: string, section: string[]}[]
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
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export const LsiRouter: React.FC<LsiRouterProps> = (props: LsiRouterProps) => {
  const {routes} = props

  const allRoutes = routes.map(route => {
    return route.section.map(section => {
      const path = `/${route.title}/${section}`
      return <Route path={path} element={<Lesson currentLesson={route.title} currentSection={section} />} key={path} />
    })
  }).flat()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {allRoutes}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
