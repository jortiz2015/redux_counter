import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.showCount);

  const increment = () => {
    dispatch(counterActions.increment());
  }
  
  const increase = () => {
    dispatch(counterActions.increase(5));
  }
  
  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button> 
        <button onClick={increase}>Increase by 5</button> 
        <button onClick={decrement}>decrement</button> 
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
