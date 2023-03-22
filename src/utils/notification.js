import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = window.localStorage.getItem('chakra-ui-color-mode');

const optionsToast = {
  position: 'bottom-right',
  autoClose: 3000,
  theme: theme === 'dark' ? 'dark' : 'light',
};

export const alreadyInContact = addedName =>
  toast.warn(`"${addedName}" is already in contacts`, optionsToast);

export const commonError = () =>
  toast.error('Something is wrong. Try again', optionsToast);

export const registerSuccess = () =>
  toast.success(
    'You have registered. Enjoy creating your own phone book',
    optionsToast
  );
export const registerError = () =>
  toast.error('Your registration was failed. Try again', optionsToast);

export const loginSuccess = () =>
  toast.success(
    'You have logged in. Add or delete new contacts in your phone book',
    optionsToast
  );
export const loginError = () =>
  toast.error('Your loginisation was failed. Try again', optionsToast);

export const logoutSuccess = () =>
  toast.info('You have logged out.', optionsToast);
export const logoutError = () =>
  toast.error('Logout failed. Try again', optionsToast);