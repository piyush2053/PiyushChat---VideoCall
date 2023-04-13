import React from "react";
import "./Room.css"
import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"

const Room = () => {
  useEffect(() => {
    let userNameCheck = localStorage.getItem("name")
    if (userNameCheck === null) {
      let PromptName = prompt("You are not Logged in this Machine please Enter Name-:")
      localStorage.setItem("name", PromptName)
      window.location.reload();

    }
  })
  const { roomId } = useParams();
  const navigate = useNavigate()
  const friendsName = localStorage.getItem("friendsName")
  let userName = localStorage.getItem("name")
  const myMeeting = async (element) => {
    const appID = 1024801857;
    const date = Date.now()
    const serverSecret = "ac9b78d89d4d73ef050074b5f4e4b690";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, JSON.stringify(date), userName);
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
      lowerLeftNotification: {
        showUserJoinAndLeave: false,
        showTextChat: false,
      },
      showUserList: true,

      showRemoveUserButton: false,
      showPinButton: false,
      showRoomDetailsButton: false,
      container: element,
      showPreJoinView: false,

      onJoinRoom: (users) => {
        localStorage.setItem("Joined", users)
      },
      onLeaveRoom: (users) => {
        localStorage.setItem("Leaved", users)
        navigate('/home')

      },
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenSharingButton: false,
    })
  }
  return (
    <>
      <p id="calling" style={{ backgroundColor: "green", opacity: "70%", color: "white", padding: "10px", borderRadius: "10px" }}>In a call with {friendsName}  <icon class="fa fa-phone"></icon></p>

      <div>
        <div ref={myMeeting} />
      </div>
    </>
  )
};

export default Room;
