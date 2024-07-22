import '../index.css'
const Assignment1 = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen bg-slate-100'>
        <div className='w-max'>
            <div className='relative flex flex-col justify-between h-96 w-96'>
                <img src="https://media.licdn.com/dms/image/D5603AQFY58SItLL7NA/profile-displayphoto-shrink_400_400/0/1688229304727?e=1726704000&v=beta&t=oKhDI05r1bc4PoNHHez_eDZluBOMUKG9ah3LllZE9jY" alt=""
                className='absolute inset-0 object-cover m-auto border-4 border-black rounded-full w-36 h-36'/>

                <img src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover" 
                className='h-[50%] object-cover bg-cyan-200'/>

                <div className='flex flex-col items-center justify-end h-full py-5 bg-white'>
                    <div>
                        <h2 className='font-bold'>
                        Faizan Anwar <span className='font-semibold opacity-50'> 22 </span>
                        </h2>
                        <p className='text-center opacity-30'> Kolkata </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-around py-4 bg-white'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>803K</h2> {' '}
                    <p className='text-sm opacity-50'>Followers</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>800K</h2>{' '}
                    <p className='text-sm opacity-50'>Likes</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>1.4K</h2>{' '}
                    <p className='text-sm opacity-50'>Photos</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Assignment1