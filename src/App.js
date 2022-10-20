import './App.css';
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
  const chats = JSON.parse(localStorage.getItem('chats'));
  if (chats) {
    setChats(chats);
  }
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
                    <div class="portlet-body chat-widget">
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="text-center text-muted small">January 1, 2014 at 12:23 PM</p>
                            </div>
                        </div>
                        {chats.map(chat =><>
                          <div class="row">
                            <div class="col-lg-12">
                                <div class="media">
                                    <a class="pull-left" href="#">
                                        <img class="media-object img-circle img-chat" src={chat.picture} alt=""/>
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">{chat.names}
                                            <span class="small pull-right">{chat.dateTime}</span>
                                        </h4>
                                        <p>{chat.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        </>
                          )}
                    </div>
                    
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
