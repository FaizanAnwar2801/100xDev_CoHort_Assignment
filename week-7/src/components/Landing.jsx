import { Link } from "react-router-dom"

const links = [
    'assignment - 1',
    'assignment - 2',
    'assignment - 3',
    'assignment - 4',
    'assignment - 5',
    'assignment - 6',
    'assignment - 7',
]

const Landing = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-900 via-emerald-600 to-cyan-800'>
            <h1 className='mb-8 text-xl font-bold text-white md:text-2xl lg:text-4xl'>
                Welcome to Week 7 Assignment
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4'>
                {links.map((val, i) => {
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