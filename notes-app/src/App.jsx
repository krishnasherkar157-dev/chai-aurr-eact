import React, { useEffect, useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
  const [details,setDetails] = useState(' ')

  const [task, setTask] = useState([])

  const submithandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    //setTask([...task, { title, details }])
    setDetails('')
    setTitle('')
  }


  const deleteNote= (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("copyTask"))

    if (storedTask && storedTask.length > 0) {
      setTask(storedTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("copyTask", JSON.stringify(task))
  }, [task])
  
  return (
    <>
    <div className='h-screen lg-flex text-white bg-black'>
      <form onSubmit={submithandler} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 foint-bold'>Add Notes</h1>
        <input 
        type='text'
        placeholder='Enter Notes'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        className='px-5 py-2 border-2 rounded w-full font-medium outline-none'
        />
        <textarea
        type='text'
        placeholder='write here'
        value={details}
        onChange={(e)=>{setDetails(e.target.value)}}
        className='border-2 w-full font-medium h-32 px-5 py-2 flex items-start outline-none rounded flex-row'
        />
        <button 
        type='submit'
        className=' bg-white px-5 py-2 text-black w-full  active:scale-95 font-medium outline-none rounded cursor-pointer'
        >Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-1-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrep items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx}className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                      <div>
                          <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                          <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
                      </div>
                      <button
                      onClick={()=>{
                        deleteNote(idx)
                      }}
                      className='border-2 py-1 w-full rounded-2xl  bg-amber-700 cursor-pointer active:scale:95 bg-red-500 text-xs font-bold text-white'
                      >Delete</button>
                    </div>
          })}
          

        </div>
         
      </div>

    </div>
    </>
  )
}

export default App