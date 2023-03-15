import React from 'react'
import { Link } from 'react-router-dom'


const Article = ({ articles }) => {
    return (
        <div className='grid grid-cols-1 gap-4 pr-12 md:grid-cols-2 lg:grid-cols-3'>
            {articles.map((item, index) => {
                return (
                    <div className='p-5' key={index + 1} >
                        <div className='' >
                            <Link to={`/Article/${item.name}`}>
                                <img src={item.thumbnail} alt="" />
                            </Link>
                        </div>


                        <div className='flex-wrap'>
                            <Link to={`/Article/${item.name}`}>
                                <h3 className='title-font text-2xl hover:text-red-500 duration-500 text-gray-900 mb-3 '>
                                    {item.title}
                                </h3>
                            </Link>
                        </div>


                        <p className='leading-relaxed mb-3'>
                            {item.content[0].substring(0, 100)}...
                        </p>

                        <div className='flex justify-between flex-wrap hover:text-red-500 duration-500'>
                            <Link className='text-indigo-500 hover:text-red-500 duration-500' to={`/Article/${item.name}`} >
                                Learn more
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Article
