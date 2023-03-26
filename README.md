HackTheChain

<<<<<<< HEAD
# Statement of HackTheChain 
 * To find the generic medicine and their location (currently jaipur) and their availability at different Jan Aushadhi Kendra
 * To find other brand alternative and its price 

# MedHub 
=======
# MedHub
>>>>>>> 3ae7636a9f9b4acb22ec7a5d65cf4a1b0e1a4966
This API allows users to search for medicines and get the generic medicine for it , including the available medical shops ( Currently Jaipur) and their respective quantities.

# Technologies Used
* NodeJs
* MongoDb
* Express.js

# To install and run this project, follow these steps:

* Clone the repository by `git clone <url-of-repo>`.
* Install the required packages by `npm install`
* Create a .env file at the root directory 
      DB_USERNAME=admin-pranav
      DB_PASSWORD=pranavweber
      DB_NAME=DocHub
      PORT=3000 
* Start the server using the `nodemon index.js` or `npm index.js`


# API Endpoints
* GET /
   - Returns a Welcome Message.
   For Example  -: https://confused-clam-houndstooth.cyclic.app/

* GET /Autocomplete
   - Autocompletes the search query as the user types and returns a list of matching medicine names.
   For Example  -: https://confused-clam-houndstooth.cyclic.app/Autocomplete?MediName=Ci

* GET /Get_Medicine
   - Searches for the given medicine name and returns the generic medicine for it , including the available medical shops ( Currently Jaipur) and their respective quantities.
   - Query Parameters 
            MediName: (required) The medicine name for which generic name want
<<<<<<< HEAD
   For Example -: https://confused-clam-houndstooth.cyclic.app/Get_Medicine?MediName=Cipro



 `* Some of Data Has been used for Test Purpose only ( We do not own this data)*` 
=======
   For Example -: https://confused-clam-houndstooth.cyclic.app/Get_Medicines?MediName=Cipro
>>>>>>> 3ae7636a9f9b4acb22ec7a5d65cf4a1b0e1a4966
