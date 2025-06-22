// const asyncHandler = (fn) => (req, res, next) => {}

const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}   

    // we generally write the code in such a way that whatever we get wheather it be response or error is in in a standard format. for taht we use `nodejs api error` where nodejs give us a whole class of error read documentation

export {asyncHandler}

// ways of doing it
// const asyncHandler = () => {}
// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => async (req, res, next) => {


// In some codebases we can encounter this pattern where we wrap our async functions in a try-catch block to handle errors. This is a common practice to ensure that any errors thrown in the async function are caught and handled appropriately, preventing unhandled promise rejections.
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next);
//         // if the function is successful, it will call the next middleware or route handler 
//     }catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }

// In some codebases, we can encounter this pattern where we wrap our async functions in a try-catch block to handle errors. This is a common practice to ensure that any errors thrown in the async function are caught and handled appropriately, preventing unhandled promise rejections.

