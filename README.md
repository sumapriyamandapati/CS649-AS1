# CS649-AS1

In this simple, introductory assignment, your job will be to create a basic single page application (SPA) using the technologies and skills that you’ve acquired in this course thus far. The idea here is simple, create an application that uses React, Express, and Node to display a simple interface that displays your name, a picture of yourself, an introduction to yourself, and a button that links to your GitHub repository. The design should roughly resemble the following:
 
You will then serve the app up in a browser using Node and Express. To complete this assignment, take the following into consideration:
•	Create a project folder called “assignment1”.
•	Make sure Node is installed and that NPM is working.
•	Divide your project folder up into logical folders. You should have a /public/ folder for your static .html file (this folder will include a /css/ folder for your .css file), a /server/ folder for your server.js file which will be served up using Node, and a /src/ folder for your .jsx file. *
•	Initialize your project folder for NPM. This will give you your package.json file at the root of the site.
•	Create your .html and .css files in their respective folders. 
•	The markup will be built using JSX and will reside in a .jsx file in the /src/ folder. Make sure you link it up to the .html file in the /public/ folder. 
•	Using NPM, install all of the necessary tools that you will need including Babel, Nodemon, React, Express, etc. Some of these tools you will need globally and are probably already installed. Others are project-specific and will need to be installed again for this project.
•	Within the /server/ folder, build out the server.js file using Express. The app should launch and run on port 3000. 
•	When I run your application, and then open a browser to localhost:3000, I should see your name, headshot, introductory paragraph, and button visible in the page. 
•	If I make a change to your .jsx file and save, I should be able to refresh the browser and see the change automatically. This should tell you that you’ll need to add some lines of code to your package.json file to “watch” for changes real-time within the application.
* Note, if you took CS648, we used a tool called create-react-app that handled a lot of the scaffolding for us. We are not using that tool in this course.
