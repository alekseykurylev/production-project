import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import PlusIcon from "shared/assets/icons/plus.svg";
import MinusIcon from "shared/assets/icons/minus.svg";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={decrement} variant='filled' data-testid='decrement-button'>
        <MinusIcon />
      </Button>
      <Button onClick={increment} variant='filled' data-testid='increment-button'>
        <PlusIcon />
      </Button>
    </div>
  );
};
