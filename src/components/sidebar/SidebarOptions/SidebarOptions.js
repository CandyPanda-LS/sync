import React from "react";
import "./SidebarOptions.css";
import {useHistory} from "react-router-dom";
import db from "../../../firebase";

function SidebarOptions({Icon, title, addChannelOption, id}) {

    const history = useHistory();

    const selectChannel = () => {

        if (id) {
            history.push(`/room/${id}`)
        }
        else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter a channel name");
        if (channelName) {
            db.collection('Rooms').add({
                name:channelName,
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className = "sidebarOptions__channel">
                <span className="sidebarOptions__hash">#</span>
                {title}
                </h3>
            )}
        </div>
    );
}

export default SidebarOptions;
