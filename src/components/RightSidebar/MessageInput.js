import { InsertEmoticon, MicOutlined } from '@mui/icons-material';
import { green, pink } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState('');
  useEffect(() => {
    // reset input value when contact component changes
    setMessage('');
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert('Type some message text before submitting');
    }
    setMessage('');
    // scroll to the bottom
  };
  return (
    <>
      <div className="message-input">
        <Col  lg={8}>
        <div className="chat_footer">
        <InsertEmoticon   sx={{ fontSize: 30 ,color: pink[100]
        // padding:'10px'
        }}/>
        <form >
          <input type="text" placeholder="Enter your message"
                value={message}
                onChange={handleInputChange}
           />
        <MicOutlined sx={{ fontSize: 30 ,color: pink[100]
        // padding:'10px' 
        }}/>
          <button onClick={handleSubmit}>Send a message</button>
        </form>
      </div>
        </Col>
        {/* <Col xs={3} lg={4}>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col> */}
      </div>
{/* <div className="chating">
      <div className="chat_footer">
        <InsertEmoticon  sx={{ fontSize: 30 ,
        // padding:'10px'
        }}/>
        <form >
          <input type="text" placeholder="Enter your message"
                value={message}
                onChange={handleInputChange}
           />
        <MicOutlined sx={{ fontSize: 30 ,
        // padding:'10px'
        }}/>
          <button onClick={handleSubmit}>Send a message</button>
        </form>
      </div>
      </div>
       */}
    </>
  );
}

export default MessageInput;
