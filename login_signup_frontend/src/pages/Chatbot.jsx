import React from 'react'
import "./Chatbot.css";
function Chatbot() {
  return (
    <>
    <div>
    <h2 style={{textAlign:"center"}} >MineBot</h2>
<div className="chatbot-box absolute inset-4" style={{marginTop:"-60px"}}>

<div
    className="center-div relative h-full w-full overflow-clip rounded-md border border-zinc-200 bg-white p-2 px-0 pу-8">                      
    <iframe
        style={{border: "none"}}
        srcdoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
        <script>
            window.botpressWebChat.init({

            'compose Placeholder': 'Chat with bot',
            'botConversationDescription': 'MineBot is your personal mining related queries assistants',

            'botId': '66230ddf-491d-4fb4-be60-441f48d082a5',
            'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',

            'messagingUrl': 'https://messaging.botpress.cloud',
            'clientId': '66230ddf-491d-4fb4-be60-441f48d082a5',

            'enableConversationDeletion': true,
            'showPoweredBy': true,

            'className': 'webchatIframe',
            'containerWidth': '100%25',

            'layoutWidth': '100%25',
            'hideWidget': true,

            'showCloseButton': false,
            'disableAnimations': true,

            'closeOnEscape': false,
            'showConversationsButton': false,

            'enableTranscriptDownload': false,
            
    });
    window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type : 'show' }) }, ['LIFECYCLE.LOADED']);
                                            
        </script></body>"
     width="100%"
    height="100%"
    ></iframe>

</div>
</div>

  </div>
    </>
  )
}

export default Chatbot