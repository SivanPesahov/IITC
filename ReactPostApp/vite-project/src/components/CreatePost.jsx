import { useRef } from 'react'
import axios from 'axios'

function CreatePost(){

const dummy_data_URL = 'http://localhost:8002/posts'
  const titleBar = useRef(null)
  const bodyBar = useRef(null)


  async function createPost(ev){
    ev.preventDefault();
    try{
        const { data } = await axios.post(dummy_data_URL, {
            id: 'abcd123',
            title: titleBar.current.value,
            body: bodyBar.current.value,
            userId : 'abc123',
            reactions : {likes : 0},
            comments : [],
            createdAt : '19.06.24',
            updatedAt : '19.06.24'

            })
            titleBar.current.value = ''
            bodyBar.current.value = ''
    }catch (err) {
      console.log(err);
    }
  }

    return (
        <>
            <div>CreatePostPage</div>
            <form onSubmit={createPost}>
                <input type="text" ref={titleBar}/>
                <input type="text" ref={bodyBar}/>
                <button>Add Post</button>
            </form>
        </>
    )
}

export default CreatePost;