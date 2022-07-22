import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';

export const CounterButton = styled(Button)<ButtonProps>(() => ({
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  marginLeft: '2rem',
  marginRight: '2rem'
}));

export const AddButton = styled(Button)<ButtonProps>(() => ({
  marginTop: '1rem',
  marginBottom: '0.5rem',
  marginLeft: '1rem',
}));
