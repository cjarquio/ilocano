import {Box, Input, Text} from '@chakra-ui/react'

interface DialogSectionProps {
  dialog: string[]
}

export const TranslatingDialogSection: React.FC<DialogSectionProps> = (props: DialogSectionProps) => {
  const {dialog} = props
  return (
    <Box>
      {
        dialog.map(d => (
          <Box display={'flex'} alignItems={'center'} padding={'1rem 0'} key={d}>
            <Text paddingRight={'0.5rem'}>{d.substring(0, 2)}</Text>
            <Input variant='flushed' />
          </Box>
        ))
      }
    </Box>
  )
}
