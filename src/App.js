import './App.css';
import Chats from './components/Chats';
import React, { useState ,useEffect} from 'react';



function App() {
const [chats, setChats] = useState([]);
const [user, setUser] = useState('');
const [name, setName] = useState("");
const [chat, setChat] = useState("");
const sendChat= ()=>{
  if(chat){
  const currentdate = new Date();
  const dateTime=  currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
  const newchart = {names: name, message: chat, dateTime: dateTime, picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' }
  setChats(chats => [...chats, newchart]);
  localStorage.setItem('chats', JSON.stringify([...chats, newchart]));
  setChat('');
  }
}
useEffect(() => {
  
  const interval = setInterval(() => {
    const chats = JSON.parse(localStorage.getItem('chats'));
    if (chats) {
      setChats(chats);
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);
  return (
    <div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="portlet portlet-default">
                <div class="portlet-heading">
                {user &&
                    <div class="portlet-title">
                        <h4><i class="fa fa-circle text-green"></i> welcome {user}!</h4>   
                    </div>
                }
                    <div class="portlet-widgets">
                    {!user &&
                    <input 
                    type="text" 
                    style={{ color: 'black'}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                    }
                        <div class="btn-group">
                          {!user &&
                          <button type="button" class="btn btn-default pull-right" 
                                  onClick={() => setUser(name)}
                          >Login</button>
                          }
                          {user &&
                          <button type="button" class="btn btn-default pull-right" 
                                  onClick={() => setUser('')}
                          >Logout</button>
                          }
                        </div>
                          
                        <span class="divider"></span>
                        <a data-toggle="collapse" data-parent="#accordion" href="#chat"><i class="fa fa-chevron-down"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </div>
                {user && 
                <div id="chat" class="panel-collapse collapse in">
                    <Chats chats={chats} />
                    <div class="portlet-footer">
                        <form role="form">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Enter message..."
                                value={chat}
                                onChange={(e) => setChat(e.target.value)}
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-default pull-right" 
                                onClick={(e) => sendChat() }
                                >Send</button>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  </div>  
  );
}


export default App;
