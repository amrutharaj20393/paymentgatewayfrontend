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



    //amazon
export const amazonregisterApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/amazonregister`, reqBody)

}

export const amazonloginemailApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/amazonrloginemail`, reqBody)

}

export const amazonloginApi = async (email) => {
    return await commonApi('GET', `${serverUrl}/amazonrlogin?email=${email}`)

}


export const amazonpasswordApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/amazonrpassword`, reqBody)

}

export const amazonallProductApi = async () => {
    return await commonApi('GET', `${serverUrl}/amazonallProduct`)

}
export const addToCartAmazonApi = async (reqBody) => {

    //query parameterbaseurl?key=value
    return await commonApi('POST', `${serverUrl}/cart`, reqBody)
}

export const getCartApi = async (email) => {
    return await commonApi('GET', `${serverUrl}/getCart?email=${email}`)
    //get-all-medicines?search=${searchKey}

}

//delete a medicine
export const deleteItemApi = async (id) => {

    return await commonApi('DELETE', `${serverUrl}/deleteitem/${id}`)
}

//delete a medicine
export const updateQuantityApi = async (reqBody) => {

    return await commonApi('PUT', `${serverUrl}/updatequantity`,reqBody)
}
//
//delete a medicine
export const uodateOrderCartApi = async (reqBody) => {

    return await commonApi('PUT', `${serverUrl}/updateorderStatus`,reqBody)
}
export const GoogleRegisterApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/GoogleRegister`, reqBody)
}


export const orderListApi = async (email) => {
    return await commonApi('GET', `${serverUrl}/orderlist?email=${email}`)
    //get-all-medicines?search=${searchKey}

}
export const GetAProductApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/getaproduct/${id}`)
}
//delete a medicine
export const updateProductQuantityApi = async (reqBody) => {

    return await commonApi('POST', `${serverUrl}/updateproductquantity`,reqBody)
}
