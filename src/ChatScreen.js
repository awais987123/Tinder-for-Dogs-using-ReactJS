import React ,{useState}from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
    const [input, setInput]=useState('');
    const [messages, setMessages]=useState([
        {
name:"Meryam Lucifer!",
profilePic:"https://i.pinimg.com/564x/27/a2/e8/27a2e88c5148f5966e7047e595cfbf48.jpg",
message:"Hi",
        },
        {

            name:"Meryam Lucifer!",
            profilePic:"https://i.pinimg.com/564x/27/a2/e8/27a2e88c5148f5966e7047e595cfbf48.jpg",
            message:"i miss you Awais",
        },
        {
            
message:"Hey! what are you doing???",

        },
    ])

    const handleSend = e =>{
        e.preventDefault();
setMessages([...messages,{message:input}]);
setInput('');

    }

return(
  <div>
     <p className="chatscreen__timestamp">YOU MATCH WITH MERYAM ON 10/02/2019</p>

     {messages.map((messages) =>
       messages.name ?
        (
            <div className="chatscreen__messages">
            <Avatar className="chatscreen__image"
            alt={messages.name}
            src={messages.profilePic}
            />

            <p className="chatscreen__text">{messages.message}</p>
            </div>
        )
        :
        (
            <div className="chatscreen__messages">
            <p className="chatscreen__usertext">{messages.message}</p>


            </div>
          
     ))}
     
     <form className="chatscreen__input">
     <input
     value={input}
     onChange={ e=> setInput(e.target.value)}
     className="chatscreen__inputText"
     placeholder="Type a message...."
     />
     <button
     onClick={handleSend}
     type="submit"
     className="chatscreen__button">SEND</button>
     </form>

     </div>
  
);
}

export default ChatScreen;