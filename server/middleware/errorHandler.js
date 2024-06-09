const errorHandler = (err,req,res,next) => {
    err.status = err.status || 500;
    err.message = err.message || err.msg ||  "Server Error";
    res.status(err.status).json({msg: err.message});
}

export default errorHandler