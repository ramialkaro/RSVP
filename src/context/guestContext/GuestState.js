import React,{useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH
} from './../types'

const GuestState = (props) => {
    const initialState ={
        filterGuest:false,
        search: null,
        guests:[
            {
                id: 1,
                name: 'Rami Al-Karo',
                phone: '040 444 1312',
                dietary: 'Vegan',
                isconfirmed: false
            },
            {
                id: 2,
                name: 'Jukka Ahonen',
                phone: '040 333 1112',
                dietary: 'Non-Veg',
                isconfirmed: true
            },
            {
                id: 3,
                name: 'Markkus Räsäinen',
                phone: '040 222 9990',
                dietary: 'Pescetarian',
                isconfirmed: false
            },
            {
                id: 4,
                name: 'Matti Johinen',
                phone: '040 121 9383',
                dietary: 'Vegan',
                isconfirmed: true
            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState)

    // to create action

    const toggleFilter = ()=>{
        dispatch({
            type:TOGGLE_FILTER
        })
    }
    const searchGuest = (guest)=>{
        dispatch({
            type:SEARCH_GUEST,
            payload:guest
        })
    }
    const clearSearch =()=>{
        dispatch({
            type:CLEAR_SEARCH
        })
    }
    return (
            <GuestContext.Provider
            value = {{
                guests: state.guests,
                filterGuest: state.filterGuest,
                toggleFilter,
                search:state.search,
                searchGuest,
                clearSearch
            }}
            >{props.children}</GuestContext.Provider>
    )
}

export default GuestState
