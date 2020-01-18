import React, {useContext} from 'react'
import guestState from '../../context/guestContext/guestContext'

const GuestCounter = () => {
const {guests}  = useContext(guestState)
const totalIntnvited = guests.length
const attending = guests.filter(guest => guest.isconfirmed)
const totalAttending = attending.length
const invitedByDiet = (type)=> guests.filter(guest => guest.dietary===type).length
const attendingByDiet = (type)=> attending.filter(guest => guest.dietary===type).length


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Guest</th>
                        <th>Invited</th>
                        <th>Attending</th>
                    </tr>
                    <tr>
                        <th>No-Veg</th>
                        <td>{invitedByDiet('Non-Veg')}</td>
                        <td>{attendingByDiet('Non-veg')}</td>
                    </tr>
                    <tr>
                        <th>Vegan</th>
                        <td>{invitedByDiet('Vegan')}</td>
                        <td>{attendingByDiet('Vegan')}</td>
                    </tr>
                    <tr>
                        <th>Pescetarians</th>
                        <td>{invitedByDiet('Pescetarian')}</td>
                        <td>{attendingByDiet('Pescetarian')}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>{totalIntnvited}</td>
                        <td>{totalAttending}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GuestCounter
