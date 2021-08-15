/* HTTP Response */
interface HttpResponse {
    statusCode: number,
    headers: any,
    body: string
}

/**
 * Success response to the caller, with a payload
 * @param statusCode code to send back to the caller
 * @param payload body to be sent to the caller
 */
export function successHandler(statusCode: number, payload?: any): HttpResponse {
    let response: HttpResponse =
    {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": ""
        },
        body: JSON.stringify(payload)
    }
    return response;
}

/**
 * Returns an error object to the caller, used in try / catch statements
 * @param errorStatus Error status code provided from caller (400, 404, etc)
 * @param error Error object 
 */
export function errorHandler(errorStatus: number, error: Error): HttpResponse {
    let response: HttpResponse =
    {
        statusCode: errorStatus,
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": ""
        },
        body: JSON.stringify(error)
    }
    return response;
}