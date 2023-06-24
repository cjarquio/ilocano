import {Box, Button, FormControl, Input, Text} from '@chakra-ui/react'
import { useState } from 'react'

interface DialogSectionProps {
  dialog: string[]
}

const TranslatingDialogSection: React.FC<DialogSectionProps> = (props: DialogSectionProps) => {
  const {dialog} = props

  const [studentResponses, setStudentResponses] = useState<string[]>(dialog.map(() => ''))

  const handleInputChange = (value: string, index: number) => {
    const newInput = [...studentResponses]
    newInput[index] = value
    setStudentResponses(newInput)
  }

  return (
    <FormControl>
      <Box>
        {
          dialog.map((d, index) => (
            <Box display={'flex'} alignItems={'center'} padding={'1rem 0'} key={d}>
              <Text paddingRight={'0.5rem'}>{d.substring(0, 2)}</Text>
              <Input variant='flushed' value={studentResponses[index]} onChange={(e) => handleInputChange(e.target.value, index)} />
            </Box>
          ))
        }
      </Box>
      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        onClick={()=>console.log('Here is the input', studentResponses)}
      >
        Submit
      </Button>
    </FormControl>
  )
}

export default TranslatingDialogSection
