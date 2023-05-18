import React from "react";
import { Link } from "react-router-dom";

const Post = (post:{}) => {
  return (
    <div className="bg-white desktop:w-[30%] w-[95%] h-[600px] rounded-lg flex flex-col justify-around items-center">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <Link to={`/post/${post.id}`}><img src={post.thumbnail}/></Link>
      </div>
      <div>
        <Link to={`/post/${post.id}`}><span className="w-[100%] flex flex-row justify-between items-center px-2">{post.title}</span></Link>
        <Link to="/explore"><span className="w-[100%] flex flex-row justify-between items-center px-2">{post.nation}</span></Link>
      </div>
      <div className="w-full">
        <Link to={`/mypage/${post.author.id}`}><span className="w-[70%] flex flex-row justify-between items-center">{post.author}</span></Link>
        <LikeBtn/>
      </div>

    </div>
  )
}

export default Post;