//@ts-check

import React from 'react'
import "./ChatContainer.css"

import Chat from '../Chat/Chat'

const people = [
  {
    name: "Cho Khan",
    profilePic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9929dcd0-b1ef-43d0-be62-92a63f4dfbab/deep9pi-544b7d4b-e7dd-4ec4-8f29-99ccc09d1766.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5MjlkY2QwLWIxZWYtNDNkMC1iZTYyLTkyYTYzZjRkZmJhYlwvZGVlcDlwaS01NDRiN2Q0Yi1lN2RkLTRlYzQtOGYyOS05OWNjYzA5ZDE3NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.61MKBlhN2n46IsyMpuYbvriuAhc9tLo1QDz43op5R2E",
    messages: [
      {
        message: "Snigh gave me crabs!!! 😠... he used Conjure Animals.🦀",
        timeStamp: "Just now",
      }
    ]
  },
  {
    name: "Snigh P.Y.P.",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDdZqeQwgSX5Sp2v-VCMVqPaelmanhoL0YA&usqp=CAU",
    messages: [
      {
        message: "Wanna see a magic trick? :)",
        timeStamp: "30 minutes ago",
      }
    ]
  }
]

function ChatContainer(messages) {
  return (
    people.map(person => (
      <div className='chatContainer'>
      <Chat
        name={person.name}
        message={person.messages[0].message}
        profilePic={person.profilePic}   
        timeStamp={person.messages[0].timeStamp}
      />
    </div>
    ))
  )
};

export default ChatContainer;