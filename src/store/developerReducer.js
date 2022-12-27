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
            company : "Google",
            position : "Frontend Developer",
        },
        {
            id : 2,
            name : "Obid Yusupov",
            age : 23,
            email : "obid@gmail.com",
            company : "EPAM",
            position : "Android Developer",
        },
        {
            id : 3,
            name : "Sardor Ochilov",
            age : 20,
            email : "sardor@gmail.com",
            company : "Itransition",
            position : "IOS Developer",
        },
        {
            id : 4,
            name : "Ruslan Rashidov",
            age : 24,
            email : "ruslan@gmail.com",
            company : "ITechArt",
            position : ".Net Developer",
        },
        {
            id : 5,
            name : "Jamoliddin Ochilov",
            age : 22,
            email : "jamoliddin@gmail.com",
            company : "EPAM",
            position : "PHP Developer",
        },
        {
            id : 6,
            name : "Murodilla Normahmatov",
            age : 25,
            email : "murod17@gmail.com",
            company : "Google",
            position : "Frontend Developer",
        },
        {
            id : 7,
            name : "Xolmurod Boqiyev",
            age : 23,
            email : "xolmurod7@gmail.com",
            company : "Udevs",
            position : "Frontend Developer",
        },
        {
            id : 8,
            name : "Humoyun G'ulomov",
            age : 23,
            email : "humoyun@gmail.com",
            company : "Apple",
            position : "Android Developer",
        },
    ]
}

export const developerReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_DEVELOPER : return {...state, developers : [...state.developers, action.payload]}
        case DELETE_DEVELOPER : return {...state, developers : [...state.developers.filter(developer => developer.id !== action.payload)]}
       default : 
           return state     
   } 
}

export const addFile = (user) => ({ type : ADD_DEVELOPER, payload : user})
export const deleteDeveloper = (developerId) => ({type : DELETE_DEVELOPER, payload : developerId})