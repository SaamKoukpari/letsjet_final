import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsItem from './FriendsItem';
import './FriendsList.scss'


export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const userID = 1

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const users = response.data //all the users
      const user = response.data.find((user) => { //filtered to userID=1
        console.log("LOOK:", user.id)
        return user.id === userID 
      })

      const friends = user.friend_id.map((id) => { //array of friend_ids
      const friend = users.find((user) => user.id === id) //looking for where friend's user.id matches id from array
      return friend;
      }) 
      //console.log("friends INSIDE", friends);
      setFriends(friends) //set the state
    })
    .catch(error => console.log("error:", error))
    }, [])

  // console.log("Friends OUTSIDE", friends)
  const friendListItem = friends.map(user => {
    return(
      <FriendsItem
        key={user.id}
        userId={user.id}
        name={user.name}
        avatar={user.profile_picture}
      />
    )
  })
  //console.log("LOOP:", friendListItem)
  
  
  return (
    
    <div>
      <h1>Friends</h1>
      {/* Friend List  */}
      {friendListItem}
    </div>
  );
};