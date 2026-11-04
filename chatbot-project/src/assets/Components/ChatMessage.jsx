import RobotProfleImage from './assets/robot.jpeg'
import UserProfleImage from './assets/image1.jpeg'


 export  function ChatMessage({message , sender}) 
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
