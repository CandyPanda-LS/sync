import {Button} from '@material-ui/core'
import React,{useState} from 'react'
import "./ChatInput.css"


function ChatInput(channelName, channelId) {

    const [input, setInput] = useState('')

    const sendMessage = e => {
        e.preventDefault();

        if
    }
    return (
        <div className = "chat_input">
            <form>
                <input placeholder={`Message #${channelName}`}
                    onChange = {(e) =>setInput(e.target.value)}
                />
                <Button type="submit" onClick ={sendMessage}></Button>
            </form>
        </div>
    )
}

export default ChatInput
