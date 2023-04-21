import {
  Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr
} from '@chakra-ui/react'

interface DialogSectionProps {
  dialog: string[],
  dialogWords: {ilocano: string, english: string}[]
}

export const DialogSection: React.FC<DialogSectionProps> = (props: DialogSectionProps) => {
  const {dialog, dialogWords} = props

  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        {
          dialog.map((dialog, index) => <Text sx={{ padding: '0.5rem' }}>{index + 1}. {dialog}</Text>)
        }
      </Box>
      <TableContainer display={'flex'} sx={{ border: '1px solid black' }} >
        <Table variant='striped' size='sm'>
          <Thead>
            <Tr>
              <Th>Ilocano</Th>
              <Th>English</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              dialogWords.map((word) => {
                return (
                  <Tr key={word.ilocano}>
                    <Td>{word.ilocano}</Td>
                    <Td>{word.english}</Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}


