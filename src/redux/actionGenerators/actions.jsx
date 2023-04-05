import axios from "axios"

export const setInputText=(text)=>{
    return {
        type:"INPUT_TEXT",
        payload:text
    }
}
export const stateSearchWeather=(text)=>{
    return (dispatch)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=ac217a817cc25c4a21c80882be2fd744`)
        .then((res)=>{
            const {data}=res
            dispatch(setSearchWeather(data))
        }).catch((err)=>{
           alert(err.message)
        })
    }
}

const setSearchWeather =(data)=>{
    return{
        type:"ADD_WEATHER_DATA",
        payload:data
    } 
}
