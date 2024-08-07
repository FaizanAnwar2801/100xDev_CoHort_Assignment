import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const pages = [
    "signup",
    "login"
]

const Landing = () => {
    return (
        
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-violet-200 to-blue-500'>
            <Navbar/>
            <h1 className='mb-8 text-xl font-bold text-white md:text-2xl lg:text-4xl'>
                Payments-App
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4'>
                {pages.map((val, i) => {
                return (
                    <Link
                    key={i + 1}
                    className='px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 rounded-lg bg-slate-950 hover:bg-gray-800'
                    to={`/${val}`}>
                    {val.toUpperCase()}
                    </Link>
            )
            })}
            </div>
        </div>
    )
}

export default Landing