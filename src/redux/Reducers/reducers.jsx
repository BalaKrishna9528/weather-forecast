const InitialState={
    inputText:"",
    weatherData:[]
}

 const searchReducer=(state=InitialState,action)=>{
    switch(action.type){
        case "INPUT_TEXT":{
            return {...state,inputText:action.payload}
        }
        case 'ADD_WEATHER_DATA':{
            return {...state, weatherData:action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default searchReducer