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

- [ ] **HTML pages** - 
- [ ] **Proper HTML element usage** - 
- [ ] **Links** - 
- [ ] **Text** - 
- [ ] **3rd party API placeholder** - 
- [ ] **Images** - 
- [ ] **Login placeholder** - 
- [ ] **DB data placeholder** - 
- [ ] **WebSocket placeholder** - 

<!-- ## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable. -->

<!-- ## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable. -->

<!-- ## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable. -->

<!-- ## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable. -->

<!-- ## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable. -->

<!-- ## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable. -->
