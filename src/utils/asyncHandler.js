// const asyncHandler = (fn) => (req, res, next) => {}



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
//             message: error.message || "Internal Server Error",
//         });
//     }

// In some codebases, we can encounter this pattern where we wrap our async functions in a try-catch block to handle errors. This is a common practice to ensure that any errors thrown in the async function are caught and handled appropriately, preventing unhandled promise rejections.

