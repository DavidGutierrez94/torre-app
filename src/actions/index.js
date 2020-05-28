import axios from 'axios';

export function loadPerson(){
    return (dispatch)=>{
        return axios.get("https://bio.torre.co/api/bios/").then((response)=>{
            dispatch(getPerson(response.data.person));
            
            console.log(response.data.person);
        })
    }
}

export function getPerson(person){
    return{
        type:"CHANGE_PERSON",
        person:person
    }
}