import React, { useEffect } from 'react'
 
const ChatbotForm = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '55d94ad1-c618-4f4f-b6a8-c379ca3f1b18',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '55d94ad1-c618-4f4f-b6a8-c379ca3f1b18',
        lazySocket: true,
        frontendVersion: "v1",
        theme: "prism",
        useSessionStorage : true,
        themeColor: "#2563eb",
        
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default ChatbotForm