const ADD_DEVELOPER = "ADD_DEVELOPER"
const DELETE_DEVELOPER = "DELETE_DEVELOPER"
const EDIT_DEVELOPER = "EDIT_DEVELOPER"

const defaultState = {
    developers : [
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
        {
            name : "Anvar Rashidov",
            position : "Frontend Developer",
            country : "Uzbekistan",
            region : "Tashkent",
            city : "Tashkent"
        },
    ]
}

export const developerReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_DEVELOPER : return {...state, developers : [...state.developers, action.payload]}
        case DELETE_DEVELOPER : return {...state, developers : [...state.developers, action.payload]}
        case EDIT_DEVELOPER : return {...state, developers : [...state.developers, action.payload]}
       default : 
           return state
   } 
}

export const addFile = (user) => ({ type : ADD_DEVELOPER, payload : user})