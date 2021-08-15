import { APIGatewayProxyHandler } from 'aws-lambda';
import { errorHandler, successHandler } from '../functions/response-handler';
import { TriangleHandler } from "../functions/controllers/api-triangle/triangle-handler";

const triangleHandler = new TriangleHandler();

/**
 * Router for fetching the Triangle Category
 * @param event Event Object
 * @param _context Context Object
 */

export const router: APIGatewayProxyHandler = async (_event, _context) => {
    try {
        switch (_event.path) {
            /* Get Triangle Category */
            case '/triangle':
                let sideA: number = 0;
                let sideB: number = 0;
                let sideC: number = 0;
                if (_event['queryStringParameters'] != null) {
                    if ((_event['queryStringParameters']['a'] != null)
                        && (_event['queryStringParameters']['b'] != null)
                        && (_event['queryStringParameters']['c'] != null)) {
                        sideA = parseInt(_event['queryStringParameters']['a']);
                        sideB = parseInt(_event['queryStringParameters']['b']);
                        sideC = parseInt(_event['queryStringParameters']['c']);
                    } else throw new Error("No queryStringParameters parameter");
                } else throw new Error("Invalid Request");
                /* Get Category */
                const category = await triangleHandler.getTriangleCategory(sideA, sideB, sideC);
                if (category !== undefined) {
                    /* Responding back with the success response */
                    return successHandler(200, category);
                } else throw new Error("Error getting the category");

            default: {
                /* Responding back with the error response */
                return errorHandler(404, new Error("Invalid endpoint"));
            }
        }
    } catch (error) {
        /* Unauthorised Access */
        return errorHandler(401, error)
    }
}