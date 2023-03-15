import axios from 'axios'
import React, { useState } from 'react'

const AddComment = (props) => {
    const [username, setUsername] = useState("")
    const [text, settext] = useState("")

    function usernameFunc(e) {
        let value = e.target.value
        setUsername(value)
    }

    function textFunc(e) {
        let value = e.target.value
        settext(value)
    }


    const addComment = async () => {
        axios.post(`http://localhost:4000/api/article/${props.articleName}/add-comments`, {
            username: username,
            text: text
        }).then((res) => {
            props.setArticleInfo(res.json());
            setUsername('')
            settext('')
        }).catch((err) => {
            console.log(err)
        })
    }




    return (
        <div className='flex flex-col w-full md:w-1/2'>
            <form className='flex flex-col w-full md:w-1/2'>
                <label htmlFor="Comment" className='text-2xl font-bold inline border-b-4 border-gray-500 '>Add Comment</label>

                <input className='p-2 focus:outline-none mt-5 border-2 rounded-md ' required type="text" placeholder='Username' name='username'
                    value={username}
                    onChange={usernameFunc} />

                <textarea
                    value={text}
                    onChange={textFunc}
                    name="message"
                    style={{ resize: 'none' }}
                    placeholder="Enter your Comment"
                    rows="10"
                    className="p-2 mt-2 border-2 rounded-md  focus:outline-none"
                ></textarea>
                <button type="submit" onClick={() => addComment()} className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddComment
