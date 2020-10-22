

 export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'remove':
            return [...action.payload]

        case 'CrossOut':
            return [...action.payload]
               
        default:
                return state 
         
                

}
 }