Deltahacks 2025
https://devpost.com/software/eventure-pocs6g

How to Demo It;

git clone the repo into an empty directory
run npm install in both backend and frontend
run npm --run initdb and npm --run start on the backend
run npm run dev on the frontend
go to localhost:5173/dashboard to view the project
Inspiration As 3 Waterloo students (and a TMU student), we find that our daily lives are miserable and alone, having no human connection in our daily lives. Now, our nerd selves thought that the we could use technology to solve the problem, and bring people together, providing a way for lonely people like us to meet face to face and experience life!

What it does: It lets us know about events in our area and when they are. By providing a live map of the area, we can plan our schedules around what we want to do and join. As well, we are able to add our own events, bringing together other people into a community for our own niches.

How we built it: We used Google Map API to provide the map interface, and the markers are placed by clicking on the map which fetches the latitude and longitude and adds the event to an SQLite database. The backend was written in express.js, and the frontend was written in React + Tailwind. We used Firebase to authenticate users.

Challenges we ran into: We had struggles implementing the Google Map API as it is an API we were unfamiliar with. We also faced some difficulty with authentication as Firebase is a platform we learned for this competition. There were other struggles we faced with merging as we would work on our own projects.

Accomplishments that we're proud of: We're proud of successfully finishing our main project and having all features to make the base website. We are also proud about what we were able to learn in this short period despite starting from the bottom for all of them.

What we learned: We learned Firebase and the Google Maps API. Some of our members less familiar with programming also developed their personal knowledge in React and JS as a whole.

What's next for Eventure: We wanted to add AI to our project to filter out potential events that users would be interested in, maybe using the classify endpoint from Cohere API to determine the relevance of each event according to a user-provided prompt. Unfortunately, we weren't able to implement this idea due to time constraints

In the future, we would want to implement more quality of life features such as a function for users to opt-in for certain events, so that people could see who was attending. We'd also like to implement a friends list so that people could make events private for only close friends, or other people within their community
