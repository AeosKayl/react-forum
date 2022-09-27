import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () =>{

  const [data,setData] = useState([]);
  
  const getPosts = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await response.json();
    setData(data);
    // return data
  }
  

  useEffect(() => {
    getPosts();
  }, []);
  // console.log(data);

  return (
    <>
    {
      data.map(({userId,id,title,body},index) =>{

        // const {userId,id,title,body} = post;
        return(
          <div key={index}>
            {/* <Link to={`/post/${post.id}`}> {post.id}. {post.title}</Link> */}
            <Link to={`/post/${id}`}> {id}. {title}</Link>
          </div>
        )
      })
    }
    </>
  )

}

export default Home;

    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    // .then(response => response.json())
    // .then(json => setData(json))