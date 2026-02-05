# Typing Speed Test

A simple typing speed test project built using HTML, CSS, and JavaScript.
This project is made for practice to understand DOM manipulation, timers, and basic JavaScript logic.


## Features
- 60 seconds typing test
- Real-time mistake counting
- Typing speed calculation (Words Per Minute)
- Accuracy calculation
- Start and Stop button
- Disabled text selection on quote


## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6 Modules)


## Project Structure
Typing-Speed-Test/
├── index.html
├── style.css
├── script.js
├── textfile.js
└── README.md



## How It Works
- A random quote is generated when the test starts
- Each character is wrapped in a span element
- User input is compared character by character
- Mistakes are counted in real time
- Timer runs for 60 seconds
- Result is shown when time ends or stop button is clicked


## Calculation Logic
Speed (WPM):
(total characters / 5) / time taken (in minutes)

Accuracy:
((total characters - mistakes) / total characters) * 100


## Learning Outcome
- DOM manipulation
- Event handling
- setInterval and clearInterval
- ES6 module usage
- Basic project structuring


## Note
This is a beginner-level project. I am currently learning JavaScript and building small projects to improve my skills.


## Author
Tazrian Islam
