import React from 'react'
import GuestsForm from '../guests/GuestsForm'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import GuestSearch from '../guests/GuestSearch'

 const Home = () => {
    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                    <GuestFilter/>
                    <GuestSearch/>
                </div>
                <GuestsForm/>
                <GuestCounter/>
            </div>
        </div>
    )
}
export default Home