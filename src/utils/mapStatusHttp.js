const httpMap = {
    SUCCESSFUL: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INVALID_VALUE: 422,
    DELETE: 204,
  };
  
  const mapStatusHTTP = (status) => httpMap[status] || 500;
  
  module.exports = mapStatusHTTP;