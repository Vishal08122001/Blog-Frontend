import ArticleList from './ArticleList'

const Home = () => {
    return (
        <>
            <div className="mx-auto pt-20 pl-10 pr-10 sm:pl-20 sm:pr-20 bg-gradient-to-b from-gray-400 to-gray-200 min-h-screen flex flex-col justify-center sm:flex-row items-center">
                <div className="mb-20 max-w-screen-md sm:pr-9">
                    <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 pb-8">Welcome to my Blog!</h1>

                    <p className="mx-auto leading-relaxed text-base mb-4">Welcome to our blogging site! We are thrilled to have you here and we hope you'll find our content informative, engaging, and thought-provoking. Our goal is to provide you with a diverse range of topics, from current events to lifestyle, technology, travel, and more. We believe that blogging is a powerful way to connect with our readers and create a community of individuals who share our passion for learning and discovery.</p>

                    <p>So whether you're a seasoned blogger or just getting started, we invite you to join us on this journey and explore the world of ideas together. Thank you for visiting our site and we look forward to hearing from you!</p>
                </div>
                <img className="mx-auto mb-10 sm:mb-0" style={{ height: "300px", width: "300px" }} src="https://cdn1.vectorstock.com/i/1000x1000/77/05/bearded-coder-hacker-vector-17477705.jpg" alt="CodeImg" />
            </div>
            <ArticleList />
        </>


    )
}


export default Home