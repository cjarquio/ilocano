import { Container, Title, Text } from '@mantine/core';
import * as React from 'react';

const Landing: React.FC = () => {
  return (
    <Container>
      {/**TODO: Center this title on page */}
      <Title order={1} m={0} p={0}>
        Agsaritatayo ti ilocano (Let{"'"}s Talk in Ilocano)
      </Title>
      {/** TODO: Keep this left aligned */}
      {/** TODO: Add AI image of cartoon me with speech bubble saying kumustakayo amin? */}
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

      {/* {"TODO: Add sign up and Login anchor here"} */}
    </Container>
  );
};

export default Landing;
