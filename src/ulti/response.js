const successCode = (res, message, data ) => {
    res.status(200).json({
        status: "success",
        message: message,
        data: data
    });
};

const errorCode = (res, message) => {
    res.status(400).json({
        status: "error",
        message: message
    });
};

const failCode = (res) => {
    res.status(500).json({
        status: "fail",
        message: "Internal Server Error"
    });
};

module.exports = {
    successCode,
    errorCode,
    failCode
};