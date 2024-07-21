import { useState } from 'react'
import '../index.css'

const colors = [
    {
        name: 'Red',
        value: '#f70505',
    },
    {
        name: 'Yellow',
        value: '#ffff00',
    },
    {
        name: 'Black',
        value: '#000000',
    },
    {
        name: 'Purple',
        value: '#a020f0',
    },
    {
        name: 'Green',
        value: '#2b771d',
    },
    {
        name: 'Blue',
        value: '#0000ff',
    },

    {
        name: 'Default',
        value: '#f76a05',
    }
    ]

const Assignment2 = ()=>{
const [color , setColor] = useState()

    return (
        <div style={{background:color}}>
            <div className='flex flex-col justify-end w-screen h-screen'>
                <div className='flex items-center justify-center py-2'>
                    <div className='flex p-2 rounded-md space-x-2 bg-slate-200 '>
                    {colors.map((value)=>{
                        return(
                            <button
                            key = {value.value}
                            onClick={()=>{
                                setColor(value.value)
                            }}
                            style={{background:value.value, }}
                            type='button'
                            className='w-20 p-2 text-center text-white rounded-lg'>
                                {value.name}
                            </button>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment2