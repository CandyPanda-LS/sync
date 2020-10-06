import React from 'react';
import './Haeder.css';

import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../../contextAPI/stateProvider';

function Header() {

    const [{user}] =  useStateValue();
    return (
        <div className = "header">

            {/* header left */}
            <div className="header_left">
                {/* Avatar for the loged in user */}
                <Avatar
                    className="header_avater"
                    alt={user?.displayName}
                    src = { user?.photoURL}
                />
                {/* Time icon */}
                <AccessTimeIcon/>

            </div>
            {/* header left end */}

            {/* header search */}

            <div className="header_search">
                {/* search icon */}
                <SearchIcon />
                <input placeholder = "search" type="text"/>

                {/* input */}
            </div>
            {/* header search end */}

            {/* header right */}

            <div className="header_right">

                {/* help outline icon */}
                <HelpOutlineIcon/>
            </div>

            {/* header right end */}
        </div>
    )
}

export default Header
