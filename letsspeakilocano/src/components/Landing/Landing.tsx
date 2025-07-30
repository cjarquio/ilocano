import { Container, Title, Text, Image, Center, Box } from '@mantine/core';
import NextImage from 'next/image';
import * as React from 'react';
import Hello from '../../assets/images/Hello.jpg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Center>
        <Title order={1} m={0} p={0}>
          Agsaritatayo ti Ilocano (Let{"'"}s Speak Ilocano)
        </Title>
      </Center>
      <Box>
        {/** TODO: Keep this left aligned */}
        <Image
          component={NextImage}
          radius={'md'}
          src={Hello}
          alt="Filipino Couple"
        />
        <Title order={2}>Welcome!</Title>
        <Text>
          Ilocano is a rich language rooted in the northern part of the Luzon
          region and is one of the major languages in the Philippines. As an
          Austronesian language, it also has ties to other languages such as
          Chamorro, Indonesian, and Hawaiian. This platform aims to help others
          learn the Ilocano language and traditions.
        </Text>
        <Text>
          You can start learning Ilocano without any prior knowledge. Once you
          {"'"}ve signed up for an account, you will have access to interactive
          lessons and quizzes. It{"'"}s easy to get started!
        </Text>
      </Box>

      {/* {"TODO: Add sign up and Login anchor here"} */}
    </Container>
  );
};

export default Landing;
