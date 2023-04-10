import React from "react";
import "./Home.css"
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const Room = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) =>{
        let userName = localStorage.getItem("name")
        const appID = 1024801857 ;
        const date = Date.now()
        const serverSecret = "ac9b78d89d4d73ef050074b5f4e4b690";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, JSON.stringify(date), userName);
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            sharedLinks: [
                {
                    name: 'Copy Links',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false,
        })
    }
  return (
    <>
      <div>
        <div ref={myMeeting}/>
        </div>
      
      
    </>
  )

};

export default Room;
