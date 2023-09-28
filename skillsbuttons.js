// Skills Buttons

// HTML

// HTML BUTTON
let html_skill = document.getElementById('html_skill');
// HTML LOGO
let html_logo = document.getElementById('html');
// HTML DESCRIPTION
let html_descrip = document.getElementById('html_description');
// HTML EVENT LISTENER
html_skill.addEventListener('click', function () {
    console.log("HTML Button");
    // make the logo dissapear
    html_logo.classList.add('dissapear');
    // add the inner HTML
    html_descrip.classList.add('show');
    // console.log(html_descrip);
    // Set the function for back on 
    function html_back_on() {
        html_logo.classList.remove('dissapear');
        html_descrip.classList.remove('show');
    };
    setTimeout(html_back_on, 3000);
});


// CSS

// CSS BUTTON
let css_skill = document.getElementById('css_skill');
// CSS LOGO
let css_logo = document.getElementById('css');
// CSS DESCRIPTION
let css_descrip = document.getElementById('css_description');
// CSS EVENT LISTENER
css_skill.addEventListener('click', function () {
    console.log("CSS Button");
    // make the logo dissapear
    css_logo.classList.add('dissapear');
    // make the description appear
    css_descrip.classList.add('show');
    // function to reset the button
    function css_back_on() {
        css_logo.classList.remove('dissapear');
        css_descrip.classList.remove('show');
    };
    setTimeout(css_back_on, 3000);
});

// SASS

// SASS BUTTON
let sass_skill = document.getElementById('sass_skill');
// SASS LOGO
let sass_logo = document.getElementById('sass');
// SASS DESCRIPTION
let sass_descrip = document.getElementById('sass_description');
// SASS EVENT LISTENER
sass_skill.addEventListener('click', function () {
    console.log("SASS Button");
});
// React
let react_skill = document.getElementById('react');
// Native
let native_skill = document.getElementById('react_native');
// Figma
let figma_skill = document.getElementById('figma');
// JavaScript
let javascript_skill = document.getElementById('javascript');
// Python
let python_skill = document.getElementById('python');
// NodeJS
let nodejs_skill = document.getElementById('nodejs');
// Django
let django_skill = document.getElementById('django');
// AWS
let aws_skill = document.getElementById('aws');
// Heroku
let heroku_skill = document.getElementById('heroku');

// QUERY THE LOGOS



// QUERY THE DESCRIPTIONS

// HTML
// let html_descrip = document.getElementById('html_description');
// Set the function to dissapear
// function html_words_off() {
//     html_descrip.classList.remove('show');
// };


// add event listener to each button

// in the event listener:
    // make the icon dissapear
    // make the title appear
    // after 5 seconds:
        // reverse everything

// REACT
react_skill.addEventListener('click', function () {
    console.log("React Button");
});
// NATIVE
native_skill.addEventListener('click', function () {
    console.log("Native Button");
});
// FIGMA
figma_skill.addEventListener('click', function () {
    console.log("Figma Button");
});
// JAVASCRIPT
javascript_skill.addEventListener('click', function () {
    console.log("JavaScript Button");
});
// PYTHON
python_skill.addEventListener('click', function () {
    console.log("Python Button");
});
// NODE JS
nodejs_skill.addEventListener('click', function () {
    console.log("Node JS Button");
});
// DJANGO
django_skill.addEventListener('click', function () {
    console.log("Django Button");
});
// AWS
aws_skill.addEventListener('click', function () {
    console.log("AWS Button");
});
// HEROKU
heroku_skill.addEventListener('click', function () {
    console.log("Heroku Button");
});