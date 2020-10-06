import React,{useState,useEffect} from 'react'
import "./Sidebar.css"

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';


import SidebarOptions from "./SidebarOptions/SidebarOptions"
import db from './../../firebase';
import {useStateValue} from '../../contextAPI/stateProvider';


function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
    //run this code once, after the side bar component is rendered
        db.collection('Rooms').onSnapshot((snapshot) => {
            setChannels(snapshot.docs.map((doc) => ({
                id: doc.id,
                name:doc.data().name
            })))
        })

    }, [])



    return (
        <div className="sidebar">
            <div className="sidebar_header">

                <div className="sidebar_info">
                    <h2>Sync space</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />

            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOptions Icon={AddIcon} title="Add Channels" addChannelOption/>

            {/* connect to db and list channels */}
            {/* connect to db and list channels end */}

            {channels.map(Channel => (
                <SidebarOptions id={Channel.id} title={Channel.name} />
                ))}

        </div>
    )
}

export default Sidebar
