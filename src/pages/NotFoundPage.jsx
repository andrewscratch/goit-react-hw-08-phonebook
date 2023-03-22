import notPage from 'images/notPage.jpg';
import { Box, Image } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <>
      <Box p={10} fontSize="xl">
        This page doesn't exist. Click on "Home"
      </Box>
      <Image boxSize="xl" objectFit="cover" src={notPage} alt="Not Page" />
    </>
  );
};

export default NotFoundPage;