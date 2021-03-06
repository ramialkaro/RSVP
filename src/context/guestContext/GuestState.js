import React,{useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT
} from './../types'

const GuestState = (props) => {
    const initialState ={
        filterGuest:false,
        search: null,
        editAble:null,
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
    
    //add guest
    const addGuest =(guest)=>{
        guest.id = Date.now()
        guest.isconfirmed = false
        dispatch({
            type:ADD_GUEST,
            payload:guest
        })
    }

    // remove guest
    const removeGuest =(id)=>{
        dispatch({
            type: REMOVE_GUEST,
            payload:id
        })
    }

    //update guest
    const updateGuest =(guest)=>{
        dispatch({
            type:UPDATE_GUEST,
            payload:guest
        })
    }

    // edit guest data
    const editGuest =(guest)=>{
        dispatch({
            type:EDIT_GUEST,
            payload: guest
        })
    }
    const clearEdit =()=>{
        dispatch({
            type:CLEAR_EDIT,
        })
    }


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
                editAble: state.editAble,
                addGuest,
                removeGuest,
                updateGuest,
                editGuest,
                clearEdit,
                searchGuest,
                clearSearch
            }}
            >{props.children}</GuestContext.Provider>
    )
}

export default GuestState
