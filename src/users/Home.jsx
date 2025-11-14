import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { serverUrl } from '../services/serverUrl'
import { GetAllBlogHomeApi } from '../services/allApi'
import { Link } from 'react-router-dom'
import { allBlogAddContext } from '../context/ContextShare'
import Footer from './Footer'

function Home() {
    const [homeBlog, sethomeBlog] = useState([])
const { addBlogStatus } = useContext(allBlogAddContext)
    const getHomeBlog = async () => {

        const result = await GetAllBlogHomeApi()
        console.log(result)
        if (result.status == 200) {
            sethomeBlog(result.data)
        }
    }
    useEffect(() => {
        getHomeBlog()
    }, [addBlogStatus])
    return (
        <>
            <Header />
            <section className='flex justify-center items-center p-2 '>

                <img src="https://plus.unsplash.com/premium_photo-1723629817274-5408105f3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbCUyMGJsb2dnZXJ8ZW58MHx8MHx8fDA%3D" alt="" style={{ width: '100%', height: '500px' }} />


            </section>

            <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
                <h1 className='text-5xl  font-bold text-cyan-900'>Trending Blogs</h1>

                <div className='md:grid grid-cols-4 w-full mt-5 p-4 sm:py-2'>
                    {homeBlog?.length > 0 ?
                        homeBlog?.map((item, index) => (

                            <div className='p-3 shadow bg-gray-200 ms-5 py-3 ' key={index}>
                                <img src={`${serverUrl}/serverupload/${item?.imageurl}`} alt="" style={{ width: '100%', height: '300px' }} />
                                <div className='flex  justify-center items-center flex-col ms-3'>
                                    <p className='text-blue-700 text-bold text-center'>{item?.title}</p>
                                    <h3 className='text-gray-500'>{item?.description}</h3>
                                    <h3 className='text-blue-700'>Category:<span className='text-red-700'>{item?.category}</span></h3>

                                </div>

                                {/* <div className='flex justify-center items-center my-5'>
                                    <Link to={'/medicines'}><button className='px-3 py-2 bg-blue-800 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Click here</button></Link>
                                </div> */}
                            </div>

                        )) : <p>Loading</p>}

                </div>


            </section>
            <Footer/>
        </>
    )
}

export default Home