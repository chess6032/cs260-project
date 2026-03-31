# Please don't touch

One button. One instruction. But temptation is strong...

It was Gandhi who once said that "the simplest tests reveal the most about one's true character."<sup>1</sup> This single button test, being the simplest a test can be, thus reveals the truest aspects of one's character.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

(TODO: Delete this checklist after this assignment is graded.)

### Elevator pitch

The paradox with freewill is that it is not free&mdash;it comes with responsibility. Those who exercise their freewill with ill intent don't deserve to have it. *Please Don't Touch* presents users with a single button along with explicit instructions: "Don't press me." A user proves they can uphold the responsibility of such a choice by choosing not to do it. Users who press the button demonstrate they are not deserving of that responsibility, and they are thus banned from the site. 

### Design

![Design image](dontPressMeDesign.png)

This sequence diagram illustrates interactions between users, the server, and the database when a user presses the button:

![Diagram](dontPressMeDiagram.png)

### Key features

- A button that can be pressed. (But shouldn't!)

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic structure and site scaffolding.
- **CSS** - Making the website look pretty and professional.
- **React** - Interactivity with the button.
- **Service**:
    - Support for login, logout, and registering users.
    - Server endpoints: 
        - How long they have been resisting the button's temptation (i.e. how long since they first logged in), 
        - whether or not a user has pressed the button,
        - when the user pressed the button (if they have), and
        - how long the user lasted before pressing the button (if they've pressed it).
    - Calls to [kanye.rest](https://kanye.rest/)'s API to provide banned users with inspirational quotes from Kanye West&mdash;who philosophers unaminously agree is the wisest man on Earth<sup>2</sup>.
- **DB/Login** - Save login info, and track whether a user has pressed the button (and is thus banned from the site) or not.
- **WebSocket** - Updating users when other people have pressed the button. (Mob mentality adds extra temptation...)

### Sources

1. Gandhi never said that&mdash;nor did anyone else that I know of. Did I fool you?
2. Philosophers do not believe this.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://youmustnot.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages**: I have four pages: `index.html` just redirects to `login.html`; `login.html` is the landing page, where the user logins/registers; `button.html` houses the button (which the user MUST not press); and `banned.html` is where maldoers who press the button are sent.
- [X] **Proper HTML element usage**: I learned about many different HTML elements and implemented them wisely and correctly. These include header, footer, main, body, style, img, a, input, button, div, form, and others.
- [X] **Links**: I have a navigation menu at the top of each page with links to the other pages.
- [X] **Text**: `banned.html` has some text chastizing users who pressed the button.
- [X] **3rd party API placeholder**: `banned.html` has a place to grab Kanye West quotes w/ the [Kanye.rest](https://kanye.rest/) API. (In the future I'll have to make sure it filters out inappropriate quotes.)
- [X] **Images** - `banned.html` has a [picture of Kanye West](https://commons.wikimedia.org/wiki/File:Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2).jpg). (I'm pretty sure this picture is in the public domain... but then again I'm no lawyer.)
- [X] **Login placeholder**: `login.html` has a placeholder form element for logging in/registering.
- [X] **DB data placeholder**: Banned users will be redirected to `banned.html` after logging in on `login.html`. Non-banned users will be redirected to `button.html`. This will take a database call.
- [X] **WebSocket placeholder**: `button.html` has an area illustrating how notifications that will show when other users press the button.

 ## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Visually appealing colors and layout. No overflowing elements.**: I based my color scheme off of Bootstrap's default `bg-dark` color. Every page shares the same coherent color scheme. I ensured elements never overlap on top of one another, regardless of window size.
- [X] **Use of a CSS framework**: While I used Bootstrap on all my web pages, my usage was sparse: Since this is my first experience with using CSS, I opted to do most of the styling manually.
- [X] **All visual elements styled using CSS**: Every element is either directly styled with a ruleset or inherits styling from its parent.
- [X] **Responsive to window resizing using flexbox and/or grid display**: With wise application of flexboxes, grids, and media queries, all content of my webpage is always visible, regardless of viewport or text size.
- [X] **Use of a imported font**: On the banned page (which users will be sent to after pressing the button), I use the [Quintessential](https://fonts.google.com/specimen/Quintessential?categoryFilters=Feeling:%2FExpressive%2FSophisticated) font from Google Fonts to display Kanye's quote with the sophistication he (doesn't) deserve.
- [X] **Use of different types of selectors including element, class, ID, and pseudo selectors**: I used many types of selectors and combinators: element, class, ID, and pseudo-class selectors; and child and subsequent sibling combinators.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - I used Vite as a Command Line Interface for building and testing my web app.
- [X] **Components** - I have an App component containing the general layout of the page (including the header and footer), and then Login/Button/Banned components containing the content for other pages. 
- [X] **Router** - In the App component, I added the `react-router-dom` package's Router component so my page can dynamically load content from the Login/Button/Banned components. This gives the appearance of loading a different web page without making server calls.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out**
  - I mocked out WebSocket w/ `useEffect()` and `setInterval()`. (Notification list on the button page.)
  - I mocked out a 3rd party API call by filling the contents of the quote on the banned page via a function.
  - I mocked out database persistency by using local storage to save when usernames are banned, so you can't go back to the button when signed in as a banned user.
- [X] **Hooks** - I used `useState()` and `useEffect()` hooks extensively to implement reactivity.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Node.js/Express HTTP service**: Web server running on Port 4000, written in Node.js w/ the express package. Yay!
- [X] **Static middleware for frontend**: My web server uses `express.static()` to serve static files up from the `public/` directory, which the deploy script moves static content to. (Or something like that idrk tbh the GitHub instructions kinda skimmed over that part.)
- [X] **Calls to third party endpoints**: The banned page makes a fetch to the [Kanye.rest](kanye.rest) API to get a Kanye West quote.
  - (I made a function that uses regex to filter out quotes w/ inappropriate language.) 
- [X] **Backend service endpoints**: Placeholders for login/registration and logout endpoints. (Currently, user data is stored in an array in `index.js`, so it's not persistent yet.) Also added a banme endpoint to change a user's status to banned, which the browser calls when the (despicable) user pushes the button.
- [X] **Frontend calls service endpoints**: `login.jsx` makes calls to the login and registration endpoints, and `app.jsx`'s AuthGate component uses the isbanned endpoint to serve up the button or banned page when a user is logged in. 
- [X] **Supports registration, login, logout, and restricted endpoint**: Placeholders for login/registration/logout endpoints that don't interact w/ a database yet. The banme and isbanned endpoints both require a valid auth token be present in the cookies (and in the server).

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Stores data in MongoDB** - Existing users and their status (banned/not banned) is stored in a **users** MongoDB collection. (See `service/database.js`.)
- [X] **Stores credentials in MongoDB** - Auth tokens associated w/ users are stored in a **auths** MongoDB collection. (See `service/database.js`.)
  - In addition to user's username and email, each document in the auths collection includes a *timestamp* field. In the future, I can think about automatically deleting auths with old timestamps.
- Endpoints were rewritten to insert/query/update/delete items from the MongoDB. 

<!-- ## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable. -->
