import React, { useEffect, useState } from 'react'
import { deleteBlogApi, GetAllBlogApi, GetAllBlogHomeApi, updateBlogApi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Blogs() {
    const [homeBlog, sethomeBlog] = useState([])
    const [token, setToken] = useState("")
    const [modalstatus, setModalStatus] = useState(false)
    const [blogDetails, setblogDetails] = useState({})
    const [preview, setpreview] = useState("")
    const [existingProfileImage, setExistingProfileImage] = useState("")
     const [deleteStatus, setDeleteStatus] = useState({})
    //const [editBlogDetails, seteditBlogDetails] = useState({})
    const getHomeBlog = async (token) => {
        // console.log(token)
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }


        const result = await GetAllBlogApi(reqHeader)
        console.log(result)
        if (result.status == 200) {
            sethomeBlog(result.data)
            
        }
    }
    

    const handleupload = (e) => {
        console.log(e.target.files[0])
        const singlefile = e.target.files[0]
        setblogDetails({ ...blogDetails, imageurl: singlefile })

        const url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        setpreview(url)
        
    }
//console.log(blogDetails)
    const handleSubmit = async () => {
        const { _id,title, description, category, imageurl } = blogDetails
        if (!title || !description || !category) {
            toast.info('please fill details')
        }
        else {

            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            console.log(imageurl)
            const reqBody = new FormData()//it is a class
            for (let key in blogDetails) {
                reqBody.append(key, blogDetails[key])
            }
            console.log(reqBody)
            const result = await updateBlogApi(reqBody, reqHeader)
            console.log(result)
            if (result.status == 200) {
                toast.success("Blog Uodated successfully")
                //setAddMedStatus(result.data)
                //setAllMedAddStatus(result.data)
              //  handleReset()
              setModalStatus(false)
            }
            else if (result.data == 400) {
                toast.warning(result.response.data)
               // handleReset()
            }
            else {
                toast.error('something went wrong')
               // handleReset()
            }
        }
    }

     const deleteBlog = async (id) => {

        const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
        const result = await deleteBlogApi(id,reqHeader)
        ///console.log(result)
        if (result.status == 200) {
            toast.success("Deleted successfully")
            setDeleteStatus(result)

        }
    }

    //console.log()
    useEffect(() => {
        const storedtoken = sessionStorage.getItem("token")
        console.log(storedtoken)
        if (storedtoken) {
            setToken(storedtoken)
            //setSearchKey("")'
           // const user = JSON.parse(sessionStorage.getItem("existingUser"))
            //setUserDetails({ username: user.username, password: user.password, cpassword: user.password})
           // setExistingProfileImage(user.profile)
        }

    }, [])

    useEffect(() => {
        if (token) {
            getHomeBlog(token)
        }
    }, [token,modalstatus,deleteStatus]);




    return (
        <>
            <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
                <h1 className='text-5xl  font-bold text-cyan-900'>My Blogs</h1>

                <div className='md:grid grid-cols-4 w-full mt-5 '>
                    {homeBlog?.length > 0 ?
                        homeBlog?.map((item, index) => (

                            <div className='p-3 shadow bg-gray-200 ms-5 mt-5' key={index}>
                                <img src={`${serverUrl}/serverupload/${item?.imageurl}`} alt="" style={{ width: '100%', height: '200px' }} />
                                <div className='flex  justify-center items-center flex-col ms-3'>
                                    <p className='text-blue-700 text-bold text-center'>{item?.title}</p>
                                    <h3 className='text-gray-500'>{item?.description}</h3>
                                    <h3 className='text-blue-700'>Category:<span className='text-red-700'>{item?.category}</span></h3>

                                </div>

                                <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" onClick={() => {
                                        setModalStatus(true)
                                        setblogDetails(item)
                                    }
                                    } className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Update Blog</button>
                                    <button type="button" onClick={() => deleteBlog(item?._id)} className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Delete</button>
                                </div>
                            </div>

                        )) : <p>Loading</p>}

                </div>

<div className='md:flex justify-center items-center mt-5'>
     <Link to={'/'}><button className='bg-blue-600 px-4 py-3 text-white mb-5'>back</button></Link> 
</div>

            </section>
            {modalstatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                            {/**title */}
                            <div className="bg-cyan-500 p-4 flex sm:px-6 justify-between">
                                <h1 className='text-white text-2xl'>Add Blog</h1>
                                <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} className='text-white fa-2x' />
                            </div>

                            {/**body */}
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mb-3">
                                    <input value={blogDetails.title} onChange={(e) => setblogDetails({ ...blogDetails, title: e.target.value })} type="text" placeholder='Title' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input value={blogDetails.description} onChange={(e) => setblogDetails({ ...blogDetails, description: e.target.value })} type="text" placeholder='Description' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                                </div>
                                <div className="mb-3">
                                    <input value={blogDetails.category} onChange={(e) => setblogDetails({ ...blogDetails, category: e.target.value })} type="text" placeholder='Category' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                                </div>


                                <div className="mb-3 flex justify-center items-center w-full mt-5">
                                    {!preview ? <label htmlFor='imagefile'>
                                        <input id="imagefile" type='file' style={{ display: 'none' }} onChange={(e) => handleupload(e)} />
                                        <img src={`${serverUrl}/serverupload/${blogDetails?.imageurl}`} alt="" style={{ width: '150px', height: '150px' }} />
                                    </label> :
                                        <img src={preview} alt="" style={{ width: '150px', height: '150px' }} />
                                    }
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={handleSubmit} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Update Blog</button>
                                <button onClick={() => setModalStatus(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Blogs