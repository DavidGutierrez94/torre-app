let defaultState ={
    person:"torrenegra"
}

const mainReducer = (state=defaultState,action)=>{
    if(action.type==="CHANGE_PERSON"){
        return{
            ...state,
            person:action.person

        }
    }else{
            return{
                ...state
            }
        }
    }


export default mainReducer;