import { Link } from 'react-router-dom'



const NotFound = () => {


    return (
        <div className=' max-h-screen'>
            <div className="inset-0 bg-black opacity-25 absolute ">
            </div>
            <div className="container mx-auto px-6 md:px-12  z-10 flex items-center">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        You are all alone here
                    </h1>
                    <p className="font-extrabold text-8xl my-40 text-white animate-bounce">
                        404
                    </p>
                </div>
                <Link to='/' className='text-white'>Go To Home</Link>
            </div>
        </div>


    )

}

export default NotFound;