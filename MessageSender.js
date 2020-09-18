import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from 'firebase'
function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = e =>{
      e.preventDefault();
     db.collection('posts').add({
         message:input,
         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         profilePic:user.photoURL,
         username:user.displayName,
         image:imageUrl,
     });
      setInput('');
      setImageUrl('');
    }
    return (
        <div className="messageSender">
           <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="messageSender__input"
                    value={input} onChange={e => setInput(e.target.value)}
                    placeholder={`Whats on your mind,${user.displayName}?`} />
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)}
                    placeholder="image URL (optional)" />
                <button type="submit" onClick={handleSubmit}
                >Hidden Submit</button>
                </form>
           </div>
           <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
           </div>
           
        </div>
    )
}

export default MessageSender
