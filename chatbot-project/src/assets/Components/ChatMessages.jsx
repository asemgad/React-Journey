import {  useRef , useEffect } from 'react'
import { ChatMessage } from "./ChatMessage.jsx";

   
         export   function ChatMessages({chatMessages}) {

              const chatMessagesRef = useRef (null);

               useEffect(() => {
                  const containerElem =  chatMessagesRef.current  ; 
                    if (containerElem)
                    {
                      containerElem.scrollTop = containerElem.scrollHeight ;
                    }

                    localStorage.setItem("messages" , JSON.stringify(chatMessages))

                } , [chatMessages]) 
           


                    return ( 
                      
                    <div className="chat-messages" ref = {chatMessagesRef} >
                       { chatMessages.map((chatMessage) => {
                         return (
                         <ChatMessage message = {chatMessage.message} sender = {chatMessage.sender} key = {chatMessage.id} />
                       )
                     })}

                     </div>
                     

                    );
            }

