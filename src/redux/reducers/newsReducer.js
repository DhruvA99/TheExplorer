


const InitialState={
    token:null,
}

const newsReducer=(state=InitialState,action)=>{
    switch(action.type){
        default:
            return {
                ...state,
            }
    }
}


export default newsReducer;