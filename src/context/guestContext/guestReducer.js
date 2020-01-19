import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST
} from './../types'

export default (state, {type,payload})=>{
    switch(type){
        case ADD_GUEST:
            return{
                ...state,
                guests: [...state.guests, payload]
            }
        case SEARCH_GUEST:
            const reg = new RegExp(`${payload}`, 'gi')
            return{
                ...state,       // copy array
                search:state.guests.filter(guest=>guest.name.match(reg))
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                search:null
            }
        case TOGGLE_FILTER:
                return{
                    ...state,
                    filterGuest: ! state.filterGuest
                }
        default: return state
    }
}
