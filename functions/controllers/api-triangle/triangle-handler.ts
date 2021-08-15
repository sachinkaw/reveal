import {
    CategotyResponse,
    TriangleType
} from "./models/triangle";

export class TriangleHandler {

    /**
     * Get the triangle category
     * @param sideA Side A of the triangle
     * @param sideB Side B of the triangle
     * @param sideC Side C of the triangle
    */
    getTriangleCategory = async (sideA: number, sideB: number, sideC: number): Promise<CategotyResponse> => {
        try {
            let category: CategotyResponse = { "Type": TriangleType.EQUILATERAL };

            /* If all the 3 sides are equal */
            if ((sideA === sideB) && (sideB === sideC)) {
                return category;
            /* If all the 3 sides are differtent */
            } else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
                category.Type = TriangleType.SCALENE;
                return category;
            /* If 2 sides are equal */
            } else {
                category.Type = TriangleType.ISOCELES;
                return category;
            }
        } catch (e) {
            console.error("Error finding category");
            throw (e);
        }
    };
}