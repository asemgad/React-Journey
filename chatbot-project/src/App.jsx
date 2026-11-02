import { useState , useRef , useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import RobotProfleImage from './assets/robot.jpeg'
import UserProfleImage from './assets/image1.jpeg'
import './App.css' // vite lets us import any type of files

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }



   function ChatMessage({message , sender}) 
          {
         

            return (
                <div>
                  {sender === "robot" &&( 
                    <img src={RobotProfleImage} width ="50" alt=""/>
                  )}
                {message}
                  { sender ==="user" &&  <img src={UserProfleImage} width ="50" alt=""/> }
                  
                </div>

            );
          }


          function ChatInput ({chatMessages , setChatMessages})
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


            
            function ChatMessages({chatMessages}) {

              const chatMessagesRef = useRef (null);

               useEffect(() => {
                  const containerElem =  chatMessagesRef.current  ; 
                    if (containerElem)
                    {
                      containerElem.scrollTop = containerElem.scrollHeight ;
                    }

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





 
            function App(){
                   

                  const [chatMessages , setChatMessages]  =   useState([ // we do not need to write React .useState because we have imported useState from react
                      {message : "Hello chatbot" , sender : "user" , id : "id01"},
                      {message : "Hello , how can I help you today" , sender : "robot" , id : "id02"},
                      {message : "Can you get me today date?" , sender : "user" , id : "id03"},
                      {message : "Today is 29 October" , sender : "robot" , id : "id04"}
                    ]);

                    // const chatMessageComponents = chatMessages.map((chatMessage) => {
                    //   return (
                    //     <ChatMessageex message = {chatMessage.message} sender = {chatMessage.sender} />
                    //   )
                    // })

                return(
                  <>
                    <ChatInput  chatMessages = {chatMessages}  setChatMessages = {setChatMessages} />
                    <ChatMessages chatMessages = {chatMessages} />

                </>
              );
             }

export default App
