# Full stack portfolio project



## Buy Nothing

Buy Nothing! An app where users are able to list items that they want to give away, so another user can reach out to the user who listed the item and pick up the item from them.

A user can see a Welcome page with a Navbar at the top. The Navbar has the app title which is clickable, that navigates the user to the home page. The Navbar also has 'About us' link which takes the user to an info page which describes about the app's purpose in brief. The Navbar on the Welcome page has a link with a text "Add New Item" that takes the user to a form that helps user to add new item in the app to give away. On the Welcome page under the welcome message user can see a button with text 'Visit Items', this link will take the user to the index page where they will be able to see the pictures of the items that are listed to be given away.

The items pictures on the index page are clickable. A user can click an item picture card that takes them to the show page. The show page displays the details of that individual item. Below the details, the user have access to following 3 buttons Back, Edit and Delete. Back button takes the user back to the index page, Edit button takes the user to the edit form which is pre-filled with the details of the current item the viewer is seeing. The user can update any info of that particular item. The Delete button helps the user to delete the item from the index, after deleting the item, the user is navigated back to the index page. The show page also has a 'Claim item form' which a user can fill in to leave their contact info and a note with message to show thier intrest in that item.


### Github repo links.

Github back-end repo link. [Back-end](https://github.com/NikeshW/portfolio-project-backend).

Github front-end repo link. [Front-end](https://github.com/NikeshW/portfolio-project-frontend).


### Deployed site links

Deployed back-end link from render. [Deployed-backend-site](https://portfolio-project-backend-qvhd.onrender.com)

Deployed front-end link from netlify. [Deployed-backend-site](https://buy-nothing.netlify.app)


### Instructions to use this app via the deployed site
1. Use the Deployed front end link to navigate to the site.
2. After navigating to the site user can use the info mentioned in the top of this readme (line 5) to use this app.

### Requirements to use the app via github repos
- Fork and clone the backend repo
- npm i
- keep the backend running, open a new tab
- fork and clone the front-end repo
- cd to the front-end directory
- npm i
- touch .env
- add the correct environmental variable
- example of .env variable `REACT_APP_API_URL=http://localhost:3000`
- npm start
