import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SinglePostPage = ()=>{
//https://jsonplaceholder.typicode.com/comments?postId={}
const params = useParams();
const navigate = useNavigate();
const [post,setPost] = useState();
const [comments,setComments] = useState([]);


   
const getSinglePost = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  let data = await response.json()
  setPost(data);
  // return data
}

const getComments = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
  let data = await response.json()
  // console.log(data);
  setComments(data);
  // return data;
}

useEffect(()=>{
 getSinglePost();
 getComments();

},[])
// console.log(comments);

  return(
    <>
      {/* <button onClick={() => navigate('/')}>Back to Home</button>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p> */}
      {post && comments ? <article>
          <section className="Post">
            <button onClick={() => navigate('/')}>Back to Home</button>
            <h2>Title: {post?.title}</h2>
            <p>{post?.body}</p>
          </section>
          <section className="Comments">
            <h2>Comments:</h2>
            <ul>
              {comments.map((comment,index)=>{
                return(
                  <li key={index}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                    <h4>Commented by:</h4>
                    <a href='#'>{comment.email}</a>
                  </li>
                )
              })}
            </ul>
          </section>
        </article> : <p>Loading content...</p>
      }


    </>
//

  )

}

export default SinglePostPage;


// useEffect(()=>{
//   location.state ? setPost(location.state) : getSinglePost().then(data => setPost(data))
// }, [])