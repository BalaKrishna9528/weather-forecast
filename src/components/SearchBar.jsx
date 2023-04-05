import { stateSearchWeather } from '../redux/actionGenerators/actions'
import ButtonComp from './ButtonComp'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import InputText from './InputText'
const SearchBar = () => {
    const dispatch = useDispatch()
    const inputTextValue = useSelector((state) => {
        return state.searchReducerState.inputText
    })
    return (
        <div className="SearchBarMain">
            <InputText inputTextValue={inputTextValue} />
            <ButtonComp handleWeather={() => { dispatch(stateSearchWeather(inputTextValue)) }} />
        </div>
    )
}

export default SearchBar
