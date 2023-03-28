import {
  Box, Text
} from '@chakra-ui/react'
import DialogTable from './DialogTable'

export const DialogSection = () => {
  // TODO: 
  const dialog = [
    'A: Naimbag a bigatmo, Mis.',
    'B: Naimbag a bigatmo, met.',
    'A: Ania ti naganmo, Mis?',
    'B: Luz ti naganko.',
    'A: Ania ti apelyidom?',
    'B: Ulep ti apelyidok.',
    'A: Aya? Ay, Ulep met ti apelyido ni Nanangko!',
    'B: Ay, kasta? Ania met ti naganmo?'
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box>
        {
          dialog.map((dialog, index) => <Text sx={{ padding: '0.5rem' }}>{index + 1}. {dialog}</Text>)
        }
      </Box>
      <DialogTable lessonNumber={1} />
    </Box>
  )
}


