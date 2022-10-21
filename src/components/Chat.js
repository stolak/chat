import React from 'react';

const Chat = ({ chat }) =>
<div class="portlet-body chat-widget">                      
  {<> 
    <a class="pull-left" href="#">
        <img class="media-object img-circle img-chat" src={chat.picture} alt=""/>
    </a>
    <div class="media-body">
        <h4 class="media-heading">{chat.names}
            <span class="small pull-right">{chat.dateTime}</span>
        </h4>
        <p>{chat.message}</p>
    </div>  
  </>
    }
</div>
export default Chat;
