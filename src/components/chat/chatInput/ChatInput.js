import {Button} from '@material-ui/core'
import React,{useState} from 'react'
import {useStateValue} from '../../../contextAPI/stateProvider';
import db from "./../../../firebase"
import firebase from "firebase"

import "./ChatInput.css"


function ChatInput(channelName, channelId) {

    console.log(channelId)
    console.log()


    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        console.log(input)

        if (channelName.channelId) {
            db.collection("Rooms").doc(channelName.channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage : user.photoURL,
            })
        }
    }
    return (
        <div className = "chat_input">
            <form>
                <input placeholder={`Message #${channelName.channelName}`}
                    onChange = {(e) =>setInput(e.target.value)}
                />
                <button type="submit" onClick ={sendMessage}>send</button>
            </form>
        </div>
    )
}

export default ChatInput
