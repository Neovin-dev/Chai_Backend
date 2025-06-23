# How to upload file in backend | Multer

File upload is primiarily a backend job. We do file handling using different service or cloud like AWS. 

If you get the idea you can upload any type of file 
We use a utilty so we can use it again and again. whenever we need it we inject it as a middleware

WE will use cloudinary.

multer will be used here. it comes under express.

We will take file from user using mutler and keep it on local server and then upload it to cloudinary. this is done in production otherwise you can directly upload to multer. 
we can keep the cloudinary in either service or util