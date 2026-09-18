const logger=function(req, res, next){
    console.log("logger called")

    //this is not important part
    //middleware always calls next function 
    //rather than giving response
    next();

}
module.exports=logger;