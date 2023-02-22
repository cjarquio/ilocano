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

interface VocabTableProps {
  lessonNumber: number
}

interface VocabWordsProps {
  id: number
  word: string
  pronunciation: string
  translation: string,
  lesson_number?: number
}

const VocabTable: React.FC<VocabTableProps> = (props: VocabTableProps) =>  {
  const { lessonNumber } = props
  const [words, setWords] = useState<VocabWordsProps[]>([])

  useEffect(() => {
    refreshList()
  }, [])

  const refreshList = () => {
    axios
      .get("/api/words/")
      .then((res) => setWords(res.data) )
      .catch((err) => console.log(err));
  };
  

  return (
    <TableContainer display={'flex'} >
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
                <Tr>
                  <Td>{word.word}</Td>
                  <Td>{word.translation}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default VocabTable;
