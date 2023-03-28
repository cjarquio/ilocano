import { useState, useEffect } from 'react';
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

interface DialogTableProps {
  lessonNumber: number
}

interface DialogWordsProps {
  english: string,
  ilokano: string
}

const DialogTable: React.FC<DialogTableProps> = (props: DialogTableProps) =>  {
  const { lessonNumber } = props
  const [words, setWords] = useState<DialogWordsProps[]>([])

  useEffect(() => {
    const refreshList = () => {
      axios
        .get(`/api/words/?lesson_number=${lessonNumber}`)
        .then((res) => {
          setWords(res.data)
        })
        .catch((err) => console.log(err));
    }

    refreshList()
  }, [lessonNumber])

  return (
    <TableContainer display={'flex'} sx={{border: '1px solid black'}} >
      <Table variant='striped' size='sm'>
        <Thead>
          <Tr>
            <Th>Ilokano</Th>
            <Th>English</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            words && words.map((word)=>{
              return(
                <Tr key={word.ilokano}>
                  <Td>{word.ilokano}</Td>
                  <Td>{word.english}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DialogTable;
