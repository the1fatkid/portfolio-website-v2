import chefCueImg from "./project-card-images/chefCue.png"
import moodifyImg from "./project-card-images/moodify.png"
import assemblyEndgameImg from "./project-card-images/assemblyEndgame.png"
import vanLifeImg from "./project-card-images/vanLife.png"
import megasaurusImg from "./project-card-images/megasaurus.png"
import simonSaysImg from "./project-card-images/simonSays.png"
import crestCampsImg from "./project-card-images/crestCamps.png"
import typedTenziesImg from "./project-card-images/typedTenzies.png"
import reactQuizImg from "./project-card-images/reactQuiz.png"
import weatherAppImg from "./project-card-images/weatherApp.png"
import ticTacToeImg from "./project-card-images/ticTacToe.png"
import amPmToggleImg from "./project-card-images/amPmToggle.png"
import todoListImg from "./project-card-images/todoList.png"

const projects = [
    {
      id: 'chef-cue',
      title: "Chef Cue",
      description: "A fullstack AI recipe generator and recipe book app. ",
      url:"https://chef-cue.onrender.com/",
      image: chefCueImg,
      techStack: ["React.js", "React Router", "Express.js", "MongoDB", "CSS", "OpenAI API"]
    },
    {
      id: 'moodify',
      title: "Moodify",
      description: "A mood tracking app that helps you visualize emotional patterns through an interactive calendar.",
      url:"https://moodify-mood-tracker.netlify.app/",
      image: moodifyImg,
      techStack: ["Next.js", "JavaScript", "Tailwind CSS", "Firebase Auth", "Firestore"]
    },
    {
      id: 'assembly-endgame',
      title: "Assembly Endgame",
      description: "A hangman style word guessing game with a twist.",
      url:"https://the1fatkid.github.io/assembly-endgame/",
      image: assemblyEndgameImg,
      techStack: ["React.js", "TypeScript", "CSS", "HTML"]
    },
    {
      id: 'van-life',
      title: "Vanlife",
      description: "A fully responsive, multi-page van rental platform.",
      url:"https://vanlife-van-rentals.netlify.app/",
      image: vanLifeImg,
      techStack: ["React.js", "React Router", "JavaScript", "CSS", "Firestore"]
    },
    {
      id: 'megasaurus',
      title: "Megasaurus",
      description: "A dynamic workout planning app that helps users generate customized workout plans. ",
      url: "https://the1fatkid.github.io/megasaurus-gym-app/",
      image: megasaurusImg,
      techStack: ["React.js", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 'simon-says',
      title: "Simon Says",
      description: "A fun and interactive game that challenges players to remember and replicate a sequence of blinking buttons, testing memory and reflexes.",
      url: "https://the1fatkid.github.io/simon-says-game-reactjs/",
      image: simonSaysImg,
      techStack: ["React.js", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 'crest-camps',
      title: "Crest Camps",
      description: "A fully responsive static website built using HTML, Bootstrap, and SASS. Designed for a serene camping business nestled in the woods.",
      url: "",
      image: crestCampsImg,
      techStack: ["HTML", "SASS", "Bootstrap"]
    },
    {
      id: 'react-quiz-app',
      title: "React Quiz",
      description: "A fast-paced, interactive multiple-choice quiz game that challenges users with randomized questions within a strict 2-minute countdown.",
      url: "https://the1fatkid.github.io/react-quiz/",
      image: reactQuizImg,
      techStack: ["React.js", "JavaScript","CSS", "HTML"]
    },
    {
      id: 'typed-tenzies',
      title: "Tenzies",
      description: "A fun dice game built with React! The goal is to roll until all 10 dice show the same number.",
      url: "https://the1fatkid.github.io/tenzies-game/",
      image: typedTenziesImg,
      techStack: ["React.js", "TypeScript","CSS", "HTML"]
    },
  
    {
      id: 'weather-app',
      title: "Weather App",
      description: "A fully responsive web app that uses the OpenWeatherMap API to fetch and display weather data for a given city.",
      url: "https://the1fatkid.github.io/weather-app/",
      image: weatherAppImg,
      techStack: ["JavaScript", "CSS", "HTML", "OpenWeatherMap API"]
    },
    {
      id: 'tic-tac-toe',
      title: "Tic Tac Toe",
      description: "A simple, interactive Tic-Tac-Toe game with two player mode and dynamic gameplay.",
      url: "https://the1fatkid.github.io/tic-tac-toe-vanillajs/",
      image: ticTacToeImg,
      techStack: ["JavaScript", "CSS", "HTML"]
    },
    {
      id: 'am-pm-toggle',
      title: "AM-PM Toggle",
      description: "A beautifully designed toggle switch that dynamically changes its background theme from a bright, sunny day to a calm, starry night. ",
      url: "https://the1fatkid.github.io/am-pm-toggle/",
      image: amPmToggleImg,
      techStack: ["HTML", "CSS"]
    },
    {
      id: 'todo-list',
      title: "Todo List",
      description: "A simple and intuitive Todo List designed to keep your tasks organized and manageable.",
      url: "https://the1fatkid.github.io/todo-list-context-api-local/",
      image: todoListImg,
      techStack: ["React", "Context API", "JavaScript", "CSS"]
    },

  ];

export default projects;  