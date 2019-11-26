
module.exports.loginSuccessResponse =function(id){


    return `{
"status_code":"200",
"id":${id},
"status":"login failed",
"error_message":""}
`;
} ;

module.exports.error=`{
"status_code":400,
"status":"failed",
"error_message":"Bad Request Error"}
`;

module.exports.loginFailedResponse=function(status,messasge){
    return  `{
"status_code":${status},
"status":"login failed",
"error_message":"${messasge}"}
`;
};


module.exports.signupSucessResponse =function (id) {
  return  {
"status_code":200,
"id":id,
"status":"success",
"error_message":""}
;};

module.exports.signupFailedResponse = function(status,message){
    return `{
"status_code":${status},
"status":"success",
"error_message":${message}
`;
};