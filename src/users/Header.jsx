import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { addBlogApi } from '../services/allApi'
import { toast, ToastContainer } from 'react-toastify'
import { allBlogAddContext } from '../context/ContextShare'

function Header() {
    const [token, setToken] = useState("")
    const [modalstatus, setModalStatus] = useState(false)
    const [preview, setpreview] = useState("")
     const { setaddBlogStatus } = useContext(allBlogAddContext)
    const [blogDetails, setblogDetails] = useState({
        title: "", description: "", uploadedImage: "", category: ""

    })


const navigate = useNavigate()
    //console.log(medDetails)
    const handleReset = () => {
        setblogDetails({
            title: "", description: "", uploadedImage: "", category: ""
        })
        setpreview("")
    }
    const handleupload = (e) => {
        console.log(e.target.files[0])
        const singlefile = e.target.files[0]
        setblogDetails({ ...blogDetails, uploadedImage: singlefile })

        const url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        setpreview(url)
    }
    const logout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setToken("")
    navigate('/')
  }
    const handleSubmit = async () => {
        const { title, description, category, uploadedImage } = blogDetails
        if (!title || !description || !category) {
            toast.info('please fill details')
        }
        else {

            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            console.log(uploadedImage)
            const reqBody = new FormData()//it is a class
            for (let key in blogDetails) {
                reqBody.append(key, blogDetails[key])
            }
            console.log(reqBody)
            const result = await addBlogApi(reqBody, reqHeader)
            console.log(result)
            if (result.status == 200) {
                toast.success("Blog added successfully")
                //setAddMedStatus(result.data)
                //setAllMedAddStatus(result.data)
                handleReset()
                setaddBlogStatus(result.data)
            }
            else if (result.data == 400) {
                toast.warning(result.response.data)
                handleReset()
            }
            else {
                toast.error('something went wrong')
                handleReset()
            }
        }
    }
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token) {
            setToken(token)
            //setSearchKey("")
        }


    }, [token])
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                <div className='flex  items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNUmHtk1gIkS9j5GiaXOvJbbRZxfrpTlPhA&s" alt="" style={{ width: '50px', height: '50px' }} />
                    <h1 className='text-green-700 font-bold'>Blog History</h1>
                </div>
                <div className='flex justify-center'>
                   { token &&<div className='md:flex justify-center items-center  '>

                        <button type='button' onClick={() => setModalStatus(true)} className='border border-cyan-950 rounded px-3 py-2 bg-cyan-800 text-white ms-3'>Create Your Blog</button>

                        <Link  to={'/blog'}><button type='button' onClick={() => setModalStatus(true)} className='border border-cyan-950 rounded px-3 py-2 md:mt-0 mt-2 bg-cyan-800 text-white ms-3'>Your Blogs</button></Link>
                    </div>}


                </div>
                <div>
                    {!token ? <div className='md:flex justify-end items-center hidden'>
                        <Link to={'/login'}><button className='border border-cyan-950 rounded px-3 py-2 bg-cyan-800 text-white ms-3'>Login</button></Link>

                    </div> : <div className='md:flex justify-end items-center hidden'>
                        <button type="button" onClick={logout} className='border border-cyan-950 rounded px-3 py-2 bg-cyan-800 text-white ms-3'>Logout</button>

                    </div>}



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
                                        <img src="https://cdn-icons-png.flaticon.com/512/3616/3616929.png" alt="" style={{ width: '150px', height: '150px' }} />
                                    </label> :
                                        <img src={preview} alt="" style={{ width: '150px', height: '150px' }} />
                                    }
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={handleSubmit} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Add Blog</button>
                                <button onClick={handleReset} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Header