class ErrorHandler extends Error{
    constructor(message, statusCode) {
        super(message),
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req ,res,next)=>{
    err.message || "Internal Sever Error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "JsonWebTokenError"){
        const message = "Json web token is invalid, Please try again";
        err = new ErrorHandler(message, 400)
    }

    if(err.name === "TokenExpiredError"){
        const message = "Json web token is expired, Please try again";
        err = new ErrorHandler(message, 400)
    }

    if(err.name === "CastError"){
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    const errorMessage = err.errors ? Object.values(err.errors).map((error)=> error.message).join(" ") : err.message;

    // if err mein 'errors' field hai toh , toh err.errors mein jo values mein hain unpe map method run krna hai and usme jo bhi message aa jayenge vo sb get krna hai, aur un saare messages ko join krna hai , by giving a space between them, otherwise just give the err.message

    return res.status(err.statusCode).json({
        success : false,
        message : errorMessage
    });
};

export default ErrorHandler;