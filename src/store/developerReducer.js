const ADD_DEVELOPER = "ADD_DEVELOPER"

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
       default : 
           return state
   } 
}

export const addFile = (user) => ({ type : ADD_DEVELOPER, payload : user})