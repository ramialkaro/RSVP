import React,{useContext} from 'react'
import GuestContext from '../../context/guestContext/guestContext'
import Guest from '../guests/Guest'

const Guests = () => {
    const {guests, filterGuest} = useContext(GuestContext)
    return (
        <div className="guests">
            {guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => <Guest key={guest.id} guest={guest}/>)}
        </div>
    )
}

export default Guests
