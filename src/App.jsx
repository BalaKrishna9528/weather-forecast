import './App.css';
import SearchBar from './components/SearchBar';
import TableComp from './components/TableComp';
import { useSelector } from 'react-redux/es/exports'
const App = () => {
  const { list } = useSelector((state) => {
    return state.searchReducerState.weatherData
  })

  return (
    <div>
      <SearchBar />
      <div className='table'>
        {list?.length ? (
          <TableComp list={list} />
        ) : (
          <p>Enter the city name to get the weather forecast for 5 days</p>
        )}

      </div>

    </div>
  );
}

export default App;
