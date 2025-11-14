import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"
 export const amountApi = async (reqBody) => {
     console.log(reqBody)
     return await commonApi('POST', `${serverUrl}/amount`, reqBody)


    }

    //register content-type application-json
export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/register`, reqBody)

}

export const loginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}

export const addBlogApi = async (reqBody, reqHeader) => {
    return await commonApi('POST', `${serverUrl}/add-blog`, reqBody, reqHeader)
}

export const GetAllBlogHomeApi = async () => {
    return await commonApi('GET', `${serverUrl}/all-blogs`)
}

export const GetAllBlogApi = async (reqHeader) => {
    //console.log(reqHeader)
    return await commonApi('GET', `${serverUrl}/all-user-blogs`,'',reqHeader)
}
export const updateBlogApi = async (reqBody,reqHeader) => {
    //console.log(reqHeader)
    return await commonApi('PUT', `${serverUrl}/update-blogs`,reqBody,reqHeader)
}

export const deleteBlogApi = async (id,reqHeader) => {

    return await commonApi('DELETE', `${serverUrl}/delete-blog/${id}`,'',reqHeader)
}
