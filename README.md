Create a simple REST service. This service will expose a single endpoint, in the form of:

/triangle?a=10&b=10&c=10
In other words, it will accept a GET request on /triangle, with three URL parameters named a, b and c.

These three values represent the lengths of sides of a triangle. All triangles can be categorised as one of three types: equilateral, isoceles or scalene. The REST service needs to categorise that triangle and return as a simple string one of EQUILATERAL, ISOCELES or SCALENE (just as plain text), with a 200 HTTP result.

If an error occurs, return a 400 or 500 status code as appropriate, ideally with some explanatory text.