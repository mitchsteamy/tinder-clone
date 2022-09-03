import React, { useState } from 'react'
import "./ChatScreen.css"

import { Avatar } from '@mui/material'


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Cho Khan",
            imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9929dcd0-b1ef-43d0-be62-92a63f4dfbab/deep9pi-544b7d4b-e7dd-4ec4-8f29-99ccc09d1766.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5MjlkY2QwLWIxZWYtNDNkMC1iZTYyLTkyYTYzZjRkZmJhYlwvZGVlcDlwaS01NDRiN2Q0Yi1lN2RkLTRlYzQtOGYyOS05OWNjYzA5ZDE3NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.61MKBlhN2n46IsyMpuYbvriuAhc9tLo1QDz43op5R2E",
            message: "I just matched with a gnome druid named Snigh. He is so Sexy!! 👩‍❤️‍👨",
        },
        {
            message: "I matched with him too!! Get you some booboo.",
        },
        {
            name: "Cho Khan",
            imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9929dcd0-b1ef-43d0-be62-92a63f4dfbab/deep9pi-544b7d4b-e7dd-4ec4-8f29-99ccc09d1766.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5MjlkY2QwLWIxZWYtNDNkMC1iZTYyLTkyYTYzZjRkZmJhYlwvZGVlcDlwaS01NDRiN2Q0Yi1lN2RkLTRlYzQtOGYyOS05OWNjYzA5ZDE3NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.61MKBlhN2n46IsyMpuYbvriuAhc9tLo1QDz43op5R2E",
            message: "Snigh gave me crabs!!! 😠... he used Conjure Animals.🦀",
        }

    ])

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleSend = (event) => {
        event.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className='chatScreen' >
            <p className='chatScreen__timestamp' >You matched with Cho on date</p>
            {messages.map((message) => (
                message.name ? (
                    <div className='chatScreen__message' >
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.imageUrl}
                        />
                        <p className='chatScreen__text' >{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message' >
                        <p className='chatScreen__textUser' >{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input" >
                <input
                    value={input.state}
                    onChange={handleInputChange}
                    className="chatScreen__inputField"
                    placeholder='Type a message...'
                    type="text"
                ></input>
                <button type="sybmit" onClick={handleSend} className="chatScreen__inputButton" >SEND</button>
            </form >
        </div >
    );
}


export default ChatScreen