import React from 'react'
import { Text } from '@chakra-ui/react'
import { DialogSection } from '../DialogSection/DialogSection'

interface SectionWrapperProps {
  title: string,
  description: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = (props: SectionWrapperProps) => {
  const { title, description } = props

  return (
    // TODO: make more flexible and use in each component, add dialogsection boolean prop
    <>
      <Text fontSize={'xl'}>I. DIALOG: {title}</Text>
      <Text fontSize={'xl'}>{description}</Text>
      {/** INSERT COMPONENT FOR EACH SECTION HERE */}
      {/** MAKE DIALOGSECTION OPTIONAL */}
      <DialogSection />
    </>
  )
}


