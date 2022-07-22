import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, incrementAsync, incrementByAmount } from './counterSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UpdateIcon from '@mui/icons-material/Update';
import { CounterButton, AddButton } from '../../components/Button';
import { AmountInputField } from '../../components/Form';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleChangeIncrementAmount = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIncrementAmount(e.target.value);
  }
  const handleAddAmount = () => dispatch(incrementByAmount(Number(incrementAmount) || 0));
  const handleIncrementAsync = () => dispatch(incrementAsync(Number(incrementAmount) || 0));

  return (
    <div>
      <div className="counter-area">
        <CounterButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleDecrement}
        >
          <RemoveIcon aria-label="Decrement value" />
        </CounterButton>
        <div className="counter-value">{count}</div>
        <CounterButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleIncrement}
        >
          <AddIcon aria-label="Increment value" />
        </CounterButton>
      </div>
      <div className="extra-counter-actions-area">
        <AmountInputField
          id="outlined-number"
          label="Number"
          type="text"
          value={incrementAmount}
          onChange={handleChangeIncrementAmount}
          color="secondary"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*'
          }}
        />
        <AddButton
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleAddAmount}
          startIcon={<AddIcon aria-label="Add amount" />}
        >
          Add Amount
        </AddButton>
        <AddButton
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleIncrementAsync}
          startIcon={<UpdateIcon aria-label="Add async" />}
        >
          Add Async
        </AddButton>
      </div>
    </div>
  )
}

export default Counter
