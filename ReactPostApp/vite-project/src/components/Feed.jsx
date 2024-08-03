import React, { useEffect, useState, useMemo, forwardRef } from "react";
import axios from 'axios';
import { Link, NavLink, Navigate, useNavigate , Route, Routes } from "react-router-dom";



function Feed(){
    
    const dummy_data_URL = 'http://localhost:8002/posts'
    const [posts, SetPosts] = useState([])

    useEffect(() => {async function getDummyData(){
        try{
          const { data } = await axios.get(dummy_data_URL)
          SetPosts(data)
        } catch (err){
          console.log(err);
        }
      }
      getDummyData()
      }, [location.pathname])

      const TopNavLink = forwardRef((props, ref) => {
        const { href, children } = props;
        return (
            <NavLink
            style={({ isActive }) => {
                return isActive ? { color: "salmon" } : {};
            }}
            to={href}
            >
            {children}
            </NavLink>
        );
    })
    
    return (
        <>
            <ul>
                {posts.map((post) => {return (
                        <li key = {post.id}>  
                            <TopNavLink href= { "/Feed/" + post.id }>{post.title}</TopNavLink>
                            <br></br>
                            {post.body}
                            <br></br>
                            {post.reactions.likes} likes
                        </li>)})}
            </ul>
        
        </>
    )
}

export default Feed
