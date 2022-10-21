import React from 'react';
import Chat from './Chat';

const Chats = ({ chats }) =>
<div class="portlet-body chat-widget">                      
  {chats.map(chat =><>
    <div class="row">
      <div class="col-lg-12">
          <div class="media">
          <Chat chat={chat} />
          </div>
      </div>
  </div>
  <hr/>
  </>
    )}
</div>
export default Chats;
