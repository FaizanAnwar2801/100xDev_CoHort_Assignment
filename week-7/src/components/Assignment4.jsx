import { useState , useMemo } from "react";

const Assignment4 = ()=>{

    const [wordCount, setwordCount] = useState(0)
    const [paragraph, setparagraph] = useState(' ')
    const para = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quis aliquam nesciunt ipsa reprehenderit officiis velit in, blanditiis modi. Reiciendis excepturi, velit eligendi earum et facere libero sit soluta. Beatae.'
    const wordArr = useMemo(() => {
        return para.split(' ')
    }, [])
    
    const handleSubmit = () => {
    let temp = []
    for (let index = 0; index < wordCount; index++) {
        temp.push(wordArr[Math.floor(Math.random() * wordArr.length)])
    }
    setparagraph(temp.join(' '))
    }

    return(
        <>
        <h1 className='flex items-center justify-center w-full pt-20 pb-5 font-bold'>
            Paragraph Generator
        </h1>
        <div className='flex justify-center w-full gap-2 '>
            <input
            className='border-2 w-[50%] border-black px-2'
            type='number'
            name=''
            id=''
            value={wordCount}
            onChange={(e) => {setwordCount(e.target.value)}}
            onKeyDown={(e) =>{
                if(e.key == "Enter")
                    handleSubmit();
            }}
            />
            <button className='p-2 text-white bg-black border-2 border-black rounded-lg' 
            onClick={handleSubmit}>
            Submit</button>
        </div>
        <div className='flex justify-center w-full '>
            <p className='flex items-center w-[80%] py-4 justify-center text-justify'>{paragraph}</p>
        </div>
        </>
    )
}


export default Assignment4