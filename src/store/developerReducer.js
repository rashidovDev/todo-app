const ADD_DEVELOPER = "ADD_DEVELOPER"
const DELETE_DEVELOPER = "DELETE_DEVELOPER"
const EDIT_DEVELOPER = "EDIT_DEVELOPER"

const defaultState = {
    developers : [
        {
            id : 1,  
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
        },
        {
            id : 1,
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
        },
        {
            id : 1,
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
        },
        {
            id : 1,
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
        },
        {
            id : 1,
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
        },
        {
            id : 1,
            name : "Anvar Rashidov",
            age : 21,
            email : "anvarrashidov17@gmail.com",
            company : "EPAM",
            position : "Frontend Developer",
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