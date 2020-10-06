import React,{useEffect,useState} from 'react';
import "./Chat.css";
import {useParams} from "react-router-dom";
import db from "./../../firebase"

import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {

    const {roomID} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        if (roomID) {
            db.collection("Rooms").doc(roomID).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
            })
        }
    }, [roomID])


    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <div className="chat_channelName">
                        <strong>
                            #{roomDetails?.name}
                        </strong>
                        <StarBorderIcon/>
                    </div>

                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
