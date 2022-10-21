import React from 'react';

const Chats = ({ chats }) =>
<div class="portlet-body chat-widget">                      
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
export default Chats;
