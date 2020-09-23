App Rules:
What's for dinner was designed for users to store their dinner ideas along with the time needed
to prepare, so that daily meal decisions can be made quickly and efficiently. After signing up or signing in, users can create dinners, or search their stored dinners. Once the viewing table is populated with the stored dinners specific to the logged in user, the option to update or delete dinners is available.

This app contains a frontend and backend. The front end serves as a UI with which the user
interacts. The front end requests and renders all database information from the backend. The backend hosts a MongoDB database with dinner information and controls routes to and from the database.

Frontend Repo: https://github.com/gdASAP/whatsForDinner-Client
Frontend Deployment https://gdasap.github.io/whatsForDinner-Client/
Backend Repo: https://github.com/gdASAP/whatsForDinner_Backend
Backend Deployment: https://safe-sands-40791.herokuapp.com/

Technologies Used:
Node, Express, MongoDB

Development process:
My app was modeled after pinterest. Where the user has a glossary of images to scroll through. V1 only contains dinner names and time to prepare.

I began by creating curl scripts and RESTful routes on the backend. Once those were functional, I created a html space to create and test frontend API calls. I created the layout loosely based on the wireframes.

I took each requirement and broke it down into pieces. I wrote down a step by step process from the user standpoint in psuedo code and developed the project in the order the user would encouter or need to use various functionality. After testing a functionality requirement, I committed the code.

For problem solving I used console log to see how data was formated, how I could manipulate it and to see how the project was progressing (which functions were being called, when they were being called etc.)

Unsolved Problems, future revisions and improvements:
-Populate the dinner table with images
-ability to automatcially update the dinner table when a create, update or delete is performed
-update the styling
-clean up the code
-add additional fields to the dinner resource

ERD:
<img width="538" alt="Screen Shot 2020-09-04 at 4 26 43 PM" src="https://media.git.generalassemb.ly/user/30427/files/7961e480-f867-11ea-8543-848537fb014c">

User Stories:
As a user, I would like to have a field for time to prepare so that I can adjust my selection on the time I have available. This functionality is the MVP.
As a user, I would like to have a field for appliance required so that I can select dinner depending on if the oven or stovetop is needed. This is a stretch feature.
As a user, I want to know if the recipe yeild leftovers, in order to know if this meal will last several days (wont have to cook again). This is a stretch feature.
As a user, it is helpful to see the ingredients at a glance so that one can decide on dinner based on what ingredients are on hand in the home. This is a stretch feature due to the complexity of creating an array of subdocuments.
