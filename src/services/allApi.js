import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const amountApi = async (reqBody) => {
    console.log(reqBody)
    return await commonApi('POST', `${serverUrl}/amount`, reqBody)

}