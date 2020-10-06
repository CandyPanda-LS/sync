import React from 'react'
import "./Sidebar.css"

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

import SidebarOptions from "./SidebarOptions/SidebarOptions"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

                <div className="sidebar_info">
                    <h2>Sync space</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Lasal Hettiarachchi
                    </h3>
                </div>
                <CreateIcon />

            </div>
            <SidebarOptions Icon={InsertCommentIcon} title = "Threads"/>

        </div>
    )
}

export default Sidebar
