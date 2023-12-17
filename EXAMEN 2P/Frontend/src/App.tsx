import React from 'react'
import Swal from 'sweetalert2'
import { IFlight } from './interfaces/flight.interface'

function App() {
  const [data, setData] = React.useState({} as IFlight)

  const findFlight = () => {
    fetch('http://localhost:4000/api/flight/' + data.code)
      .then((response) => {
        response.json().then((data) => {
          setData(data)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteFlight = () => {
    if (!data.reason) return
    const newData = {
      reason: data.reason,
      deleted: true,
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:4000/api/flight/' + data.code)
          .then((response) => response.json())
          .then((response) => {
            fetch('http://localhost:4000/api/flight/' + response.id, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newData),
            })
              .then(() => {
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
                })
                setData({
                  id: '',
                  code: 0,
                  from: '',
                  to: '',
                  capacity: 0,
                  reason: '',
                })
              })
              .catch((error) => {
                console.log(error)
              })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <div className='max-w-sm w-full lg:max-w-full lg:flex content-center'>
        <div
          className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          title='Woman holding a mug'
        ></div>
        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-8 flex justify-start items-center'>
            <div>
              <div className='mb-4 w-full flex justify-around'>
                <label className='mx-2 text-black' htmlFor='code'>
                  Code
                </label>
                <input
                  type='number'
                  name='code'
                  id='code'
                  onChange={handleChange}
                  value={data.code}
                  placeholder='Code'
                  className='border p-2 mb-2 rounded dark:bg-slate-400 dark:text-black'
                />
              </div>
              <div className='mb-4 w-full flex justify-around'>
                <label className='mx-2 text-black' htmlFor='from'>
                  From:
                </label>
                <input
                  type='text'
                  name='from'
                  onChange={handleChange}
                  value={data.from}
                  placeholder='From'
                  className='border p-2 mb-2 rounded dark:bg-slate-400 dark:text-black'
                />
              </div>
              <div className='mb-4 w-full flex justify-around'>
                <label className='mx-2 text-black' htmlFor='to'>
                  To:
                </label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='to'
                  value={data.to}
                  placeholder='To'
                  className='border p-2 mb-2 rounded  dark:bg-slate-400 dark:text-black'
                />
              </div>
              <div className='mb-4 w-full flex justify-around'>
                <label className='mx-2 text-black' htmlFor='capacity'>
                  Capacity:
                </label>
                <input
                  type='number'
                  onChange={handleChange}
                  name='capacity'
                  value={data.capacity}
                  placeholder='Capacity'
                  className='border p-2 mb-2 rounded dark:bg-slate-400 dark:text-black'
                />
              </div>

              <div className='mb-4 w-full flex justify-around'>
                <textarea
                  name='reason'
                  onChange={handleChangeTextArea}
                  value={data.reason}
                  placeholder='Reason'
                  className='border p-2 mb-2 rounded dark:bg-slate-400 dark:text-black'
                  rows={5}
                  cols={30}
                />
              </div>
            </div>
            <div className='flex justify-between items-between ps-4'>
              <div className='flex gap-4 flex-col justify-center items-center'>
                <button
                  type='button'
                  onClick={findFlight}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
                >
                  Buscar
                </button>
                <button
                  onClick={deleteFlight}
                  type='button'
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded dark:text-black w-full'
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
