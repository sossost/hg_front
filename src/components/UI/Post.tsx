import React from "react";
import { Link } from "react-router-dom";



const author = {
  id: 1,
  thumbnail: '/profile_mirabel.webp',
  name: '미라벨 마드리갈',
}

const post = {
  id: 1,
  thumbnail: '/thumbnail.jpg',
  author: author,
  location: '\uD83C\uDDEB\uD83C\uDDF7 프랑스',
  title: '파리의 노트르성dddddddddddddddddddddddd당',
  content: '',
  likes: 42,
  views: 1203,
}

const Post = () => {
  return (
    <div className="bg-white overflow-hidden desktop:w-[30%] w-[80%] h-[500px] desktop:h-[400px] rounded-3xl border border-solid flex flex-col m-3 shadow-md justify-start items-center ">
      <div className="w-full h-[70%] bg-slate-100 ">
        <Link to={`/`}><img className=" w-full h-full object-cover" src={post.thumbnail}/></Link>
      </div>
      <div className="w-[95%] h-[15%] flex flex-col justify-between items-start px-1 py-3 relative truncate">
        <Link to={`/`}><p className="w-full h-[20px] justify-center items-center font-extrabold text-md ">{post.title}</p></Link>
        <Link to="/explore"><span className="w-[100%] flex flex-row justify-between items-center my-1 text-[#73BBFB]">{post.location}</span></Link>
        <div className="absolute right-0 w-[40%] h-[100%] bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
      </div>
      <div className="w-[95%] h-[15%] flex flex-row justify-between items-center px-1 py-3 border-t border-solid mt-3">
        <div className="w-[60%] flex flex-row items-center">
          <div className=" w-[35px] h-[35px] rounded-full bg-slate-100 mr-2 overflow-hidden">
          <img className=" w-full h-full object-cover" src={post.author.thumbnail}/>
          </div>
        <Link to={`/`}><span className=" flex flex-row justify-between items-center">{post.author.name}</span></Link>
        </div>
        <div></div>
        
      </div>

    </div>
  )
}

export default Post;