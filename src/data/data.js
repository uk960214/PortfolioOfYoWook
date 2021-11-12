import github from "../images/stacks/GithubLogo.png";
import django from "../images/stacks/DjangoLogo.svg";
import html from "../images/stacks/HTML5Logo.svg";
import css from "../images/stacks/CSS3Logo.svg";
import js from "../images/stacks/JSLogo.svg";
import react from "../images/stacks/ReactLogo.svg";
import hugo from "../images/stacks/HugoLogo.png";

import ileum1 from "../images/prevImgs/ileum1.PNG";
import ileum2 from "../images/prevImgs/ileum2.PNG";
import ileum3 from "../images/prevImgs/ileum3.PNG";
import ileum4 from "../images/prevImgs/ileum4.PNG";

import camp1 from "../images/prevImgs/camp1.PNG";
import camp2 from "../images/prevImgs/camp2.PNG";
import camp3 from "../images/prevImgs/camp3.PNG";
import camp4 from "../images/prevImgs/camp4.PNG";
import camp5 from "../images/prevImgs/camp5.PNG";

import ele1 from "../images/prevImgs/ele1.PNG";
import ele2 from "../images/prevImgs/ele2.PNG";
import ele3 from "../images/prevImgs/ele3.PNG";
import ele4 from "../images/prevImgs/ele4.PNG";

import blog1 from "../images/prevImgs/blog1.PNG";
import blog2 from "../images/prevImgs/blog2.PNG";
import blog3 from "../images/prevImgs/blog3.PNG";
import blog4 from "../images/prevImgs/blog4.PNG";

import cal1 from "../images/prevImgs/cal1.PNG";
import cal2 from "../images/prevImgs/cal2.PNG";
import cal3 from "../images/prevImgs/cal3.PNG";
import cal4 from "../images/prevImgs/cal4.PNG";
import cal5 from "../images/prevImgs/cal5.PNG";

export const sampleData = {
  0: {
    title: "Campaign <4 Days-a-Week>",
    imgs: [camp1, camp2, camp3, camp4, camp5],
    stacks: [react, html, css, js],
    date: "July, 2021",
    demo: "https://uk960214.github.io/campaign4/",
    source: "https://github.com/uk960214/campaign4",
    short:
      "Campaign Signature Form with Dynamic Image to Share via Social Media",
    long: "This Campaign app is a serverless react app that collects the user information to create a dynamic svg image that can be downloaded. As the influence of Social Media grows, this app allows the user to take advantage of it by creating a image that can be shared through social media, showing that this person supports something (ie. an initiative) and spread the word. This app uses the power of the svg image format, and edits the color of the energy ball, and add the name of the participant to the image dynamically. With connection to google speeadsheet, the user data can also be collected for further engagement. Finally, the participant can download the image as a png file, and the hashtags for tagging on social media is automatically copied to the clipboard.",
  },
  1: {
    title: "Ileum",
    imgs: [ileum1, ileum2, ileum3, ileum4],
    stacks: [django, html, css, js],
    date: "August, 2021",
    demo: "https://ileum.herokuapp.com/",
    source: "https://github.com/2eum/musicdiary",
    short: "Diary App with Music Attached",
    long: "Ileum is a web diary app with a unique feature that allows users to attach a music that matches with their diary entry. Using the Spotify API, users can search for a music of their liking that best describes the mood of their diary entry and record the music title, artist, cover art, and a 30 second preview of the music. This app is built with django, taking advantage of the many built in models such as the User model. My role in this project as the project manager and a frontend developer was to lead the team, be in charge of most of the DevOps including the role of PR manager, and at the same time build front end templates of the main page, list page, and login/register page.",
  },
  2: {
    title: "Elevator Portfolio Template",
    imgs: [ele1, ele2, ele3, ele4],
    stacks: [react, html, css, js],
    date: "September, 2021",
    demo: "https://ms-elevators.github.io/elevator-portfolio/",
    source: "https://github.com/ms-elevators/elevator-portfolio",
    short: "Elevator Themed Portfolio Template",
    long: "An Elevator Themed Portfolio Template. The door closes and open to reveal and hide the main content. If a floor button has been pressed, the floor changes, changing the content, floor information above the door, and the screen content. Using the async functions of JS, this app's animation replicates the motion of the real life elevator.",
  },
  3: {
    title: "Personal Dev Blog",
    imgs: [blog1, blog2, blog3, blog4],
    stacks: [github, hugo],
    date: "January, 2021",
    demo: "https://github.com/uk960214/uk960214.github.io",
    source: "https://uk960214.github.io/",
    short: "Personal Dev Blog Built with Static Site Generator",
    long: "Static Blog created with hugo and github pages.",
  },
  4: {
    title: "React Calendar Component",
    imgs: [cal3, cal4, cal5, cal1, cal2],
    stacks: [react, html, css, js],
    date: "October, 2021",
    demo: "https://uk960214.github.io/react-calendar-test/",
    source: "https://github.com/uk960214/react-calendar-test",
    short: "Calendar Date and Time Picker",
    long: "This is a reusable calendar component that automatically calculates the dates of a month, including the dates of previous and next months to fill the gap of the beginning and the end of the calendar. As an example for application, this calendar could be used as a date and time picker for reservations and event recorder. To add on to this, a horizontal slide bar with functions to set available time blocks for each weekday can be also found. As another example, content can also be inserted to each date block.",
  },
};
