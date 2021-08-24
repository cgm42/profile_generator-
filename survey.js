const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];

rl.question('What is your name? ', (answer) => {
  answers.push(answer);
  rl.question('What is your favourite programming language? ', (answer) => {
    answers.push(answer);
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      answers.push(answer);
      rl.question('What is your superpower?  ', (answer) => {
        answers.push(answer);
        rl.question('Which country do you want to visit next?  ', (answer) => {
          answers.push(answer);
          rl.question('What colour is your favourite?  ', (answer) => {
            answers.push(answer);
            rl.question('Favourite animal', (answer) => {
              answers.push(answer);
              console.log(`${answers[0]} loves coding in ${answers[1]}, eating ${answers[2]} while utilizing the superpower of ${answers[3]}, wants to visit ${answers[4]} wearing a ${answers[5]} beanie and is enthused about the idea of petting a ${answers[6]} `);
              rl.close();
            });
            
          });
});
      });
      

    });
    

  
});

});


