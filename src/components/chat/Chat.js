import React,{useEffect,useState} from 'react';
import "./Chat.css";
import {useParams} from "react-router-dom";
import db from "./../../firebase"

import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Message from "./messages/Message"
import ChatInput from "./chatInput/ChatInput"

function Chat() {

    const {roomID} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setroomMessages] = useState([])

    useEffect(() => {
        if (roomID) {
            db.collection("Rooms").doc(roomID).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
            })
        }

        db.collection("Rooms").doc(roomID).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot =>

            setroomMessages(snapshot.docs.map((doc)=>doc.data())))



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

            <div className="chat_messages">
                {roomMessages.map(({message,timestamp,user,userImage}) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage = {userImage}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomID}/>
        </div>
    )
}

export default Chat
