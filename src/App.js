import './App.css';
import React, { useState ,useEffect} from 'react';


function App() {
//   const [chats, setChats] = useState([{ id: 1, names: 'Frank1', message: 'Hi, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
//   { id: 2, names: 'Frank2', message: 'Hi2, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
//   { id: 3, names: 'Frank3', message: 'Hi3, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
//   { id: 4, names: 'Frank4', message: 'Hi4, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
//   { id: 5, names: 'Frank5', message: 'Hi5, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
// ]);
// useEffect(() => {
//   localStorage.setItem('chats', JSON.stringify(chats));
// }, [chats]);
const [chats, setChats] = useState([]);
const [user, setUser] = useState('');
const [name, setName] = useState("");
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
                        
                        
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="media">
                                    <a class="pull-left" href="#">
                                        <img class="media-object img-circle img-chat" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">John Smith
                                            <span class="small pull-right">12:28 PM</span>
                                        </h4>
                                        <p>Yeah I did. Everything looks good.</p>
                                        <p>Did you have an update on purchase order #302?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="media">
                                    <a class="pull-left" href="#">
                                        <img class="media-object img-circle img-chat" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Jane Smith
                                            <span class="small pull-right">12:39 PM</span>
                                        </h4>
                                        <p>No not yet, the transaction hasn't cleared yet. I will let you know as soon as everything goes through. Any idea where you want to get lunch today?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
                    <div class="portlet-footer">
                        <form role="form">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Enter message..."></textarea>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-default pull-right" 
                                onClick={() => {
                                  setChats(chats => [...chats, { id: 2, names: 'stephen', message: 'Hi Stephen, I wanted to make sure you got the latest product report. Did Roddy get it to you?', dateTime: '12:28 PM', picture: 'https://bootdey.com/img/Content/avatar/avatar1.png' }]);
                                  localStorage.setItem('chats', JSON.stringify(chats));
                                }
                                }
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
