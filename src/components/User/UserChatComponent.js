import React from "react";
import "../../Style/chats.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ChatIcon from "@mui/icons-material/Chat";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "react-bootstrap";
const UserChatComponent = (props) => {
  return (
    <>
      <input type="checkbox" name="checkbox" id="check" />
      <label htmlFor="check" className="chat-btn">
        <ChatIcon className="comment"></ChatIcon>
        <CancelIcon className="close" />
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 20 }).map((_, idx) => {
              return (
                <div key={idx}>
                  {" "}
                  <p>
                    <b> You wrote: </b>Hello, World. This is a tost message.
                  </p>
                  <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                    {" "}
                    <b> Support wrote: </b>Hello, World2. This is a tost
                    message.
                  </p>
                </div>
              );
            })}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>
          <Button variant="success">
            <SendIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
