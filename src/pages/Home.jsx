import { Flex, Image, Box, useColorMode } from '@chakra-ui/react';
import bookImg from 'images/logo.png';

const Home = () => {
  const { colorMode } = useColorMode();
  const colorText = colorMode === 'dark' ? 'grey.200' : 'grey.800';

  return (
    <Flex alignItems="center" flexDirection="column" gap={5} p={5}>
      <Box as="samp" fontSize="xl" color={colorText}>
        Create your own phone book.
      </Box>
      <Image src={bookImg} alt="book" borderRadius="full" />
      <Box as="samp" fontSize="xl" color={colorText}>
        If you are visiting for the first time, please register.
      </Box>
      <Box
        as="samp"
        fontSize="xl"
        color={colorMode === 'dark' ? 'grey.200' : 'grey.800'}
      >
        In other case, log in and manage your contacts.
      </Box>
    </Flex>
  );
};

export default Home;