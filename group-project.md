# Front-End Boot Camp Group Project

Welcome to the Final Group Project!

Before you code do the following:

- Choose a Name for the Group
- Select a Team Mascot from Google Images
- Take a Group Picture
- Motivational Team Slogan
- Select Team Colors for your theme (the team mascot colors are a good source for this)

After I approve the above for your group, you may begin your work.

Coding of the project will occur on Wednesday (starting at 3pm), Thursday (all day), and the first Friday morning until 10am, donuts will be provided on Thursday. Please be on time, and plan to stay all day (9-5pm minimum unless your team finished early). The day will go by fast, and you do not want to demonstrate a non-working application because you did not put in enough time to complete it. I am happy to stay as late as needed on Wednesday night, and come in as early as needed on Thursday and Friday.

On Friday, coding will continue until 10am, then the public code review will start and all coding will stop (notebook lids closed). Each team's project will be reviewed publicly for at least 20 mins. This is a real code review. Come prepared to explain your code and personal contribution to the project in front of the whole class.

## Objective

Build an Online Voting web application using HTML/CSS/JS and the libraries React and Redux

## Requirements

The application must support 3 of 3 workflows. To switch between work flows consider using React Router (we did not cover it, its the "surprise" requirement, check out the documentation on how to use it).

### Workflow 1 - Register Voters

1. Create a voter registration system which collects the following information from the voter: first name, last name, address, county/city, birthdate, email, and phone.

2. From a main screen, the user will click a "Register Voter" button. A registration form will be displayed. The user will enter the data, click "Complete Registration" and return to the main screen.

3. On the main screen there should be a button to display the list of registered voters.

4. Add the ability to delete voters, edit voters and delete multiple voters.

5. Add the ability to sort the voter list on a given field by clicking the column header. Only an ascending sort needs to be supported.

6. Use CSS styling to style the table.

### Workflow 2 - Capture Votes

1. From the main screen, select a ballot to be used for voting. Then click a button named 'Vote' to commence the voting process.

2. The user will type in their identifying information. If their identifying information is valid the ballot should be shown. If the identifying information is not valid, the ballot should not be shown, and an error message should be shown. The identifying information can be anything, just pick something simple and unique to each voter.

3. Users are limited to voting once in an election.

4. The ballot should list the items under consideration with a checkbox next to each item. Checking the box is considered to be 'Yes', leaving it blank is a 'No'. You can do something more complex than a checkbox, but a checkbox is the minimum.

5. When the ballot is completed, the user should click a 'Cast Vote' button. A success screen is shown with a button to return to the main screen.

6. Use CSS grid to organize the layout of the voting screen. Ensure the font size of the voting screen adjusts to the browser's current font-size settings.

### Workflow 3 - Election Creation

1. Elections are a list of questions (one or more). Create a form to create new elections, and a table to display the elections in the system.

1. Each row in the table should have a 'View Results' button to see the completed ballots for a particular election.

1. Once created, elections cannot be modified or deleted.

### Additional Requirements

- The theme of the web site should match the color scheme of the mascot image.

- On each page, display a header which includes the team name and mascot picture. Also, include some kind of motivational team slogan statement in the header.

- Elsewhere on the main page, display the team photo.

- Concerning state, use Redux to manage application state. Use React to manage form control state (controlled components). Please use React-Redux to connect React and Redux, and use Redux-Thunk for handling asychronous operations. Consider using React-Redux Hooks instead of the Connect API

- Please use React Hooks to manage component state. 

## Conditions of Victory

- Three of the three workflows are completed.

- There are no errors in the console.

- All of the requirements are met.

- Each member of the team made a significant contribution, and can describe to the instructor what they coded (this will be asked publicly during the presentation).

- The application looks good. There will be some evidence of effort to make it look good and use the color theme.

### Important!!!

- Do not underestimate the time it will take to integrate code created by each member of the team. I recommend using a shared Git repository where you commit/push code often. Do not wait until the last minute - integration takes a lot more time than you think. Also, no Git heros, you can lose code with Git, be careful and make simple code backups with copy/paste in the file system if you attempt to do anything with Git which could result in the loss of code.

- Keep the database structure in db.json simple. Do not over complicate the data structure with deeply nested objects and such. Think in terms of REST services and relatively flat independent resources. Another way to think of endpoints is as database tables. Just as tables are related to each other, simple resource-based endpoints are related to each other.

- Please ask me to review your project design and source code from time to time. Better to **have** me correct your code during development than during the presentation. Also, when you ask questions, I will attempt to help you come up with the answer on your own before giving you the answer. I will ask questions such as "do you remember when we covered such and such" to help you remember something we covered to see if you can reason your way to the answer instead of me telling you directly. 