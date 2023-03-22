import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Text, Flex, Container, Image } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/contactSelectors';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { Loader } from 'utils/loader';
import travolta from 'images/nothing.gif';

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW={'container.lg'}>
      <AddContactForm />
      <Filter />
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My favourite contacts
      </Text>
      {isLoading && <Loader />}
      {!isLoading && !contacts.length && isLoggedIn && (
        <Image src={travolta} alt="Travolta" />
      )}
      <Flex gap={12} flexWrap="wrap">
        {filteredContacts.map(item => (
          <ContactItem key={item.id} contacts={item} />
        ))}
      </Flex>
    </Container>
  );
};

export default Contacts;