import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProfile from './MyProfile';
import Login from './Login';
import Layout from './Layout';
import Newsfeed from './Newsfeed';
import Chat from './Chat';
import FriendsList from './FriendsList';
import FindFriends from './FindFriends';
import Signup from './Signup';
import FriendsItem from './FriendsItem';
import './App.scss';
import '../index.scss';


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/newsfeed" element={<Newsfeed/>} />
          <Route path="/profile" element={<MyProfile/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/friends_list" element={<FriendsList/>} />
          <Route path="/find_friends" element={<FindFriends/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/temporary" element={<FriendsItem/>} />
        </Routes>
      </BrowserRouter>
    );
  }