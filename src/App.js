
import { useDispatch } from 'react-redux';
import { add, remove } from './actions';
import './App.css';
import Box from './Box.js';
function App() {
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(add(10))
  }
  function handleRemove() {
    dispatch(remove())
  }
  return (
    <div className="App">
      <button onClick={handleAdd}>click to Add</button>
      <button onClick={handleRemove}>click to Remove</button>
      <Box/>
    </div>
  );
}

export default App;
