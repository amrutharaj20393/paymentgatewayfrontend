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
        const { _id, title, description, category, imageurl } = blogDetails
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
        const result = await deleteBlogApi(id, reqHeader)
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
    }, [token, modalstatus, deleteStatus]);




    return (
        <>


            <div id="blogs" className="flex flex-col items-center w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">My Blogs</h1>


                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6  w-full px-5 mt-6">

                    {homeBlog?.length > 0 ? (
                        homeBlog.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 shadow bg-gray-200 rounded-lg"
                            >

                                <img
                                    src={`${serverUrl}/serverupload/${item?.imageurl}`}
                                    alt="Blog"
                                    className="w-full h-70 object-cover rounded-md"
                                />

                                <div className="flex flex-col items-center mt-3">
                                    <p className="text-blue-700 font-bold text-center text-lg">
                                        {item?.title}
                                    </p>
                                    <p className="text-gray-600 text-center text-sm mt-1">
                                        {item?.description}
                                    </p>
                                    <p className="text-blue-700 text-sm mt-1">
                                        Category:
                                        <span className="text-red-700"> {item?.category}</span>
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-3">
                                    <button
                                        onClick={() => {
                                            setModalStatus(true);
                                            setblogDetails(item);
                                        }}
                                        className="w-full sm:w-auto bg-green-600 px-3 py-2 text-sm font-semibold text-white rounded hover:bg-green-500"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => deleteBlog(item?._id)}
                                        className="w-full sm:w-auto bg-orange-600 px-3 py-2 text-sm font-semibold text-white rounded hover:bg-orange-500"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-lg mt-10">Loading...</p>
                    )}
                </div>

                {/* Back Button */}
                <div className="flex justify-center mt-6">
                    <Link to="/">
                        <button className="bg-blue-600 px-4 py-3 text-white rounded-md">
                            Back
                        </button>
                    </Link>
                </div>
            </div>




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