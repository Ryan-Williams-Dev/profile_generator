const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pf = {}

const question1 = function() {
  rl.question('What is your name? ', (name) => {
    pf.name = name;
    question2();
  });
};
const question2 =  function() {
  rl.question("What is an activity you like doing? ", (activity) => {
    pf.activity = activity;
    question3();
  });
};
const question3 = function() {
  rl.question("What do you listen to while doing that? ", (listenTo) => {
    pf.listenTo = listenTo;
    question4();
  });
};
const question4 = function() {
  rl.question("Which meal is your favourite? ", (meal) => {
    pf.meal = meal
    question5();
  });
};
const question5 = function() {
  rl.question("What is your favourite thing to eat for that meal? ", (food) => {
    pf.food = food;
    question6();
  });
};
const question6 = function() {
  rl.question("What sport is your aboslute favourite? ", (sport) => {
    pf.sport = sport;
    question7();
  });
};
const question7 = function() {
  rl.question("What is your superpower? What are you amazing at? ", (power) => {
    pf.power = power;
    console.log(`${pf.name} loves listening to ${pf.listenTo} while ${pf.activity}, devouring ${pf.food} for ${pf.meal}, prefers ${pf.sport} over any other sport, and is amazing at ${pf.power}.`);
    rl.close();
  });
};
question1();