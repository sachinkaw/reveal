/* Response to the Caller */
export interface CategotyResponse {
    Type: TriangleType;
  }

  /* Type/Category of the Triangle */
export enum TriangleType {
    EQUILATERAL = "EQUILATERAL",
    ISOCELES = "ISOCELES",
    SCALENE = "SCALENE"
}