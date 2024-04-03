import { asyncHandler } from "../utils/asyncHandler.util.js"

const registerUser = asyncHandler(async (req, res) => {
  /*
  GET USER DETAILS FROM FRONTEND -
    [userName, fullName, email, avatar - optonal, coverImage - optonal, password]
  VALIDATION - NOT EMPTY
    userName, fullName : chars, numbers only
  CHECK IF USER ALREADY EXISTS -
    By userName, email
  CHECK FOR IMAGES
  UPLOAD THEM TO CLOUDINARY -
    after uploading, unlink it from the server
  CREATE USER OBJECT - create entry in DB
  REMOVE PASSWORD, REFRESH TOKEN, WATCH-HISTORY [UNNECCESSARY] FIELDS FROM THE RESPONSE BEFORE SENDING IT TO FRONTEND
  CHECK: USER CREATED IN DB OR NOT
    check for user creation in DB
  RETURN RESPONSE TO FRONTEND 
  */

res.status(200).json({
  message: 'this code is working "OK"',
})

})

export {registerUser}