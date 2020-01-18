import React,{useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'

const GuestState = (props) => {
    const initialState ={
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
    return (
            <GuestContext.Provider
            value = {{
                guests: state.guests
            }}
            >{props.children}</GuestContext.Provider>
    )
}

export default GuestState