import { useOutletContext, useParams, useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";

function PostDetails(){

  const { PostID } = useParams();
  const dummy_data_URL = 'http://localhost:8002/posts/'
  const [posts, SetPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const titleBar = useRef(null)
  const bodyBar = useRef(null)
  const navigate = useNavigate();


  useEffect(() => {async function getDummyData(){
      try{
        const { data } = await axios.get(dummy_data_URL)
        SetPosts(data)
      } catch (err){
        console.log(err);
      } finally{
        setLoading(false)
      }
    }
    getDummyData()
    }, [location.pathname])

    const chosenPost = useMemo(() => {return posts.filter((post) => {
      return post.id === PostID;
    });
    },[posts, PostID]);

    async function editPost(postToChange){
        try{
            const {data : updatedPost} = await axios.patch(dummy_data_URL + postToChange.id, {title: titleBar.current.value, body: bodyBar.current.value})
            SetPosts((prevPosts) => {
                return prevPosts.map((post) => {
                    if(post.id === postToChange.id){
                        return updatedPost
                    }
                    return post
                })
            })
        }catch (err){
            console.log(err) 
        }
    }  

    async function addLike(postToChange){
        const updatedReactions = { likes: postToChange.reactions.likes + 1 };
        try{
            const {data : updatedPost} = await axios.patch(dummy_data_URL + postToChange.id, {reactions: updatedReactions})
            SetPosts((prevPosts) => {
                return prevPosts.map((post) => {
                    if(post.id === postToChange.id){
                        return updatedPost
                    }
                    return post
                })
            })
        }catch (err){
            console.log(err) 
        }
    }
    
    const goToList = () => {
        navigate('/Feed/List');
    };

    async function deletePost(postId){
        try{
            await axios.delete(dummy_data_URL + postId)
            SetPosts((prevPosts) => {
                return prevPosts.filter((post) => post.id !== postId);})
            goToList()
        } catch(err){
            console.log(err)     
        }
    }

    if (loading) return <div>Loading...</div>;
    
    return(
        <>
            <div>PostDetailsPage</div>
            <div><p>{JSON.stringify(chosenPost[0].title)}</p></div>
            <div><p>{JSON.stringify(chosenPost[0].body)}</p></div>
            <div><p>Likes:{JSON.stringify(chosenPost[0].reactions.likes)}</p></div>
            <div><p>{JSON.stringify(chosenPost[0].comments)}</p></div>
            <div><p>Created at: {JSON.stringify(chosenPost[0].createdAt)}</p></div>
            <div><p>Edited at: {JSON.stringify(chosenPost[0].updatedAt)}</p></div>
            <button onClick={() => {addLike(chosenPost[0])}}>Like</button>
            <br></br>
            <input type="text" ref={titleBar} placeholder="Enter title"/>
            <br></br>
            <input type="text" ref={bodyBar} placeholder="Enter post's body"/>
            <br></br>
            <button onClick={() => {editPost(chosenPost[0])}}>Edit Post</button>
            <br></br>
            <button onClick={() => {deletePost(chosenPost[0].id)}}>Remove Post</button>
        </>
    )
}

export default PostDetails;