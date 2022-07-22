import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const AmountInputField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'purple'
    }
  },
  '& .Mui-focused fieldset': {
    borderColor: 'blue',
  },
  marginTop: '0.5rem',
  width: '5rem'
}));
