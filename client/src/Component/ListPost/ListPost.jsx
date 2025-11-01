import React, { useEffect, useState } from 'react';
import { Typography, TextField } from '@mui/material';

import { getAllPostAPI, createPostAPI, updatePostAPI, deletePostAPI } from '../../api/apiService';

import './ListPost.css'
import PROFILE from "../../images/profile.png"
import Loading from '../Loading/Loading';
const ListPost = () => {

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const [menuOpen, setMenuOpen] = useState(null);

    const [postList, setPostList] = useState(null);
    useEffect(()=>{console.log("postList", postList)},[postList])

    const [postData, setPostData] = useState({
        name: "", msg: ""
    });
    useEffect(()=>{console.log("postData", postData)},[postData])
    
    const getPost = async() => {
        const data = await getAllPostAPI();
        if(data == null) return;
        setPostList((prev)=> (data? data : []))
    }
    const savePost = async() => {
       //console.log("save")
        let str = postData.name
        let bl =  str === null || str.match(/^ *$/) !== null;
        if(bl) return alert("מלאה את כל השדות");
        str = postData.msg;
        bl = str === null || str.match(/^ *$/) !== null;
        if(bl) return alert("מלאה את כל השדות");
        const data = await createPostAPI(postData.name, postData.msg);
        if(data == null) return;
        setPostList((prev)=> (data? data : [...prev]))
        setPostData({name: "", msg: ""})
    }
    const updatePost = async(id, msg)=>{
       //console.log("update")
        const str = msg;
        const bl = str === null || str.match(/^ *$/) !== null;
        if(bl) return alert("מלאה את כל השדות");
        const data = await updatePostAPI(id, msg);
        if(data == null) return;
        setPostList((prev)=> (data? data : [...prev]))
        setEditingId(null);
    }
    const deletePost = async(id)=> {
       //console.log("delete")
        const data = await deletePostAPI(id);
        if(data == null) return;
        setPostList((prev)=> (data? data : [...prev]))
    }
    useEffect(()=>{getPost()},[])

    function timeAgo(date) {
        const now = new Date();
        const timeDifference = now - new Date(date); // החישוב במילישניות
    
        const seconds = Math.floor(timeDifference / 1000); // המרת זמן לשניות
        const minutes = Math.floor(seconds / 60); // המרת זמן לדקות
        const hours = Math.floor(minutes / 60); // המרת זמן לשעות
        const days = Math.floor(hours / 24); // המרת זמן לימים
        const weeks = Math.floor(days / 7); // המרת זמן לשבועות
        const months = Math.floor(weeks / 4); // המרת זמן לחודשים
        const years = Math.floor(months / 12); // המרת זמן לשנים
        // בודק איזה יחידת זמן להחזיר
        if(years > 0) {
            return `${years} years`;
        } else if (months > 0) {
            return `${months} months`;
        }
        else if (weeks > 0) {
            return `${weeks} weeks`;
        } else if (days > 0) {
            return `${days} days`;
        } else if (hours > 0) {
            return `${hours} hours`;
        } else if (minutes > 0) {
            return `${minutes} minutes`;
        } else {
            return `now`;
        }
    }
    return(
        <>
            <Typography gutterBottom variant='h3' align='center' style={{color: "yellow"}}>תגובות</Typography>
            <div className="bg-text-post comment">
                <div className="comment-header">
                    <div className='user-info'>
                        <img src= {PROFILE} alt= "profile" width={70} className='avatar'/>
                        <b style={{color: "green", margin: "5px"}}>שם:</b>
                        <TextField value={postData.name} onChange={(e) => setPostData((prev) => ({...prev, name:e.target.value}))} fullWidth />                    
                    </div>
                </div>
                    <div className="edit-section">
                        <b style={{color: "green", margin: "5px"}}>התגובה:</b>
                        <TextField value={postData.msg} onChange={(e) => setPostData((prev) => ({...prev, msg:e.target.value}))} multiline rows={4} fullWidth />
                    </div>
                    <button className="savebtn" onClick={() => { savePost(); }}>💾 שמור</button>
            </div>
            <ul>
                {!postList && <Loading/>}
                {postList && postList.slice(0).reverse().map((comment,index) => (
                    <div key={index} className="bg-text-post comment">
                        <div className="comment-header">
                            <div className='user-info'>
                                <img src= {PROFILE} alt="profile" width={70} className='avatar'/>
                                <b style={{color: "green", margin: "5px"}}>שם:</b><strong className="comment-name">{comment.name}</strong>
                            </div>
                             {/* כפתור אפשרויות */}
                            <div className="options-container">
                                {/* <button className="options-btn" onClick={() => setMenuOpen(menuOpen === comment._id ? null : comment._id)}>⋮</button> */}

                                {/* תפריט מחיקה ועריכה */}
                                {menuOpen === comment._id && (
                                <div className="options-menu">
                                    <button onClick={() => {setMenuOpen(null);deletePost(comment._id)}}>🗑</button>
                                    <button onClick={() => { setMenuOpen(null);setEditingId(comment._id); setEditText(comment.msg); }}>✏️</button>
                                </div>)}
                            </div>
                        </div>
                        {editingId === comment._id ? (
                            <div className="edit-section">
                                <b style={{color: "green", margin: "5px"}}>התגובה:</b>
                                <TextField value={editText} onChange={(e) => setEditText(e.target.value)} multiline rows={4} fullWidth />
                                <button onClick={() => { updatePost(comment._id, editText); }}>💾 שמור</button>
                            </div>):
                        (<>
                            <b style={{color: "green", margin: "5px"}}>התגובה:</b>
                            <Typography className="comment-text" style={{ whiteSpace: 'pre-line' }}>{comment.msg}</Typography>
                            <span dir="ltr">{timeAgo(comment.create)}</span>
                        </>)}    
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ListPost;