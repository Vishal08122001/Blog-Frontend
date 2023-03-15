import React from 'react'
import articles from '../pages/ArticleContent'
import Article from '../components/Article'

const ArticleList = () => {
    return (
        <div className='max-w-screen mx-auto pt-20 pl-20 py-5 bg-gradient-to-b from-gray-200 to-white h-screen'>
            <h1 className='font-bold text-4xl mt-5 text-black-600 pb-7'>Article List</h1>

            <div>
                <Article articles={articles} />
            </div>
        </div>

    )
}

export default ArticleList
