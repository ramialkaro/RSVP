import React from 'react'
import GuestsForm from '../guests/GuestsForm'
import GuestCounter from '../guests/GuestCounter'

 const Home = () => {
    return (
        <div className="app-container">
            <div className="main">
                <GuestsForm/>
                <GuestCounter/>
            </div>
        </div>
    )
}
export default Home