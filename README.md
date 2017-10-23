# matchMaker
Developed by : Sangeetha
Week 13: Friend Finder application published on heroku
URL : https://git.heroku.com/whispering-reef-95336.git

The FriendFinder application using MySQL, Express

Application: Finds the perfect friend. The User Answers Survey questions on the scale of 1-5 with 1 beign 'Hate it' and 5 being 'Love it'. The Application finds the friend with closet match.

Programmin Details :

The server.js - has the setting for expres, bodyparser, path.
The survey.html - has the JS script tag handlig the logic for finding the Friend. The ajax calls to handle data(corresponding logic of apiroutes.js)
The apiroutes.js - has the routes for all data. Get and post calls handle userData. This reqiuires firends.js which has the data stored in an array.
The home.html is the landing page. Which takes to survey.html from the click of a button.
The htmlroutes.js - for url -> server side path conversion.
The newly created data is stored in the array. the friends list displays all the friends details in JSON format. You can see the newly created record here.

