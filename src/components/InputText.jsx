import { useDispatch } from 'react-redux/es/exports'
import { setInputText } from '../redux/actionGenerators/actions'

const InputText = ({ inputTextValue }) => {
  const dispatch = useDispatch()
  return <input type="text" value={inputTextValue} onChange={(e) => {
    const { value } = e.target
    dispatch(setInputText(value))
  }} />
}

export default InputText
