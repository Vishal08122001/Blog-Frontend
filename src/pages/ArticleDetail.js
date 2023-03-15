import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from './ArticleContent'
import ArticleCard from '../components/Article'
import axios from 'axios'
import CommentList from '../components/CommentList'
import AddComment from '../components/AddComment'


const Article = () => {

    let params = useParams();
    let article = articles.find((article) => article.name === params.name)
    const [articleInfo, setArticleinfo] = useState({ comments: [] })

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:4000/api/article/${params.name}`).then((res) => {
                setArticleinfo(res.data)
            })
        }
        fetchData()
    }, [params.name])

    let RemainArticles = articles.filter((article) => article.name !== params.name)

    if (!article) {
        return <h1>Aricle not exist</h1>
    }
    return (
        <div className='max-w-screen mx-auto pt-20 p-20 py-5 bg-gradient-to-b from-gray-400 to-white h-screen'>
            <h1 className='font-bold text-4xl'>{article.title}</h1>
            <h3 className='pt-5'>{article.content}</h3>

            {/* <div className='flex flex-col justify-center'>
                <CommentList comments={articleInfo.comments} />
                <AddComment articleName={params.name} setArticleinfo={setArticleinfo} />
            </div> */}

            <h1 className='font-bold mt-4 mb-4 text-grey-700 text-2xl pt-12 '>
                Other Articles
            </h1>
            <div className='flex flex-wrap m-4'>
                <ArticleCard articles={RemainArticles} />
            </div>
        </div>

    )
}

export default Article
