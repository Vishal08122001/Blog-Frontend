import React from 'react'

const commentList = (props) => {
    return (
        <div>
            <h1 className='text-4xl text-gray-700 pt-5'>Comments</h1>
            <div>{props.comments.map((item, index) => {
                return (

                    <div key={index}>
                        <h3 className='pl-3 pt-3 text-gray-700 font-bold'>{item.username}</h3>
                        <p className=' pl-5'>{item.text}</p>
                    </div>

                )
            })}</div>
        </div>
    )
}

export default commentList



/**
 
import axios from 'axios';
import React from "react";

export const AddCommentForm = (props) => {
    const [username, setUsername] = React.useState("");
    const [commentText, setCommentText ] = React.useState("");
    
        const addComment = async () => {
        axios.post(`http://localhost:5001/api/article/${props.articleName}/add-comments`, {
            username: username,
            text: commentText
        }).then(response => {
            // console.log(response);
            props.setArticleInfo(response.json());
            setUsername("");
            setCommentText("");
        }).catch(error => console.log(error));
    }

    return (
        <form className="shadow rounded px-8 pt-6 pb-9 mb-4">
            <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a comment</h3>
            <label className='nlock text-gray-700 text-sm font-bold mb-2'>Name:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label className='nlock text-gray-700 text-sm font-bold mb-2'>Comment:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' type="submit" onClick={()=>addComment()}/>

        </form>
    );
}
 */