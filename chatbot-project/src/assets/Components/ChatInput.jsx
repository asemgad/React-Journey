import {useState} from "react";
import {Chatbot} from 'supersimpledev'
         
      export   function ChatInput ({chatMessages , setChatMessages})
            { 
                 const [inputText , setInputText] = useState(''); // as the initial value will be ""

                function SaveInputText(e) {
                  setInputText(e.target.value);// so when this value changes the inputText will be udpated to the new data 
                  // so setInputText is a func that upates inputText
                     
                  
                }
                
                function sendMessage() {
                  console.log(inputText)

                  const newChatMessages = [

                            ...chatMessages , 
                            {
                              message : inputText , sender : "user" , id : crypto.randomUUID()
                            }
                            ]
 
                 setChatMessages(newChatMessages);

                            const response =    Chatbot.getResponse(inputText)
                              setChatMessages([

                            ...newChatMessages , 
                            {
                              message : response , sender : "robot" , id : crypto.randomUUID()
                            }
                            ]);

                            console.log(response);



                             setInputText('');  

                }

                return ( 
                
                  <>
                  <input placeholder ="send a message to chatbot" value = {inputText}  size ="30" type="text" onChange = {SaveInputText}/>
                  <button onClick = {sendMessage}>send</button>
                  </>    
                );
            }