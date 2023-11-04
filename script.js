console.log('Welcome to Quiz Questions');
document.addEventListener("DOMContentLoaded", function () {

    const Questions = [{
        'que': " Where is the correct place to insert a JavaScript ? ",

        'a': 'Head',
        'b': 'Body',
        'c': 'At Both ',
        'd': 'None of them',

        'correct': 'b',

    },
    {
        'que': " Which of the following keywords is used to define a variable in Javascript ? ",

        'a': 'var',
        'b': 'let',
        'c': 'Both A and B',
        'd': 'None',

        'correct': 'c'

    },

    {
        'que': "javascript is an _______ language? ",

        'a': 'object oriented',
        'b': 'object based',
        'c': 'Procedural',
        'd': 'None of them',

        'correct': 'b'

    },

    {
        'que': "Upon encountering empty statements, what does the Javascript Interpreter do?",

        'a': 'Throw an error',
        'b': 'ignore statement',
        'c': 'give a warning',
        'd': 'None of them',

        'correct': 'b'

    },

    {
        'que': "When the switch statement matches the expression with the given labels, how is the comparison done? ",

        'a': 'both the datatype and result of the expression are compared',
        'b': 'only the datatype of an expression is compared',
        'c': 'only the value of the expression is compared',
        'd': 'None of them',

        'correct': 'a'

    },
    {
        'que': " what keyword is used to check whether a given property is valid or not? ",

        'a': 'in',
        'b': 'is in',
        'c': 'lies',
        'd': 'exits',

        'correct': 'a'

    },
    {
        'que': "what is the use of the <noscript> tag in Javascript?",

        'a': 'the content are disabled by non-js browser',
        'b': 'clear all cookies',
        'c': 'Both A and B',
        'd': 'None',

        'correct': 'a'

    },

    {
        'que': "when an operator’s value is NULL, the typeof returned by the unary operator is:",

        'a': 'boolean',
        'b': 'object',
        'c': 'integer',
        'd': 'undefined',

        'correct': 'b'

    },

    {
        'que': "what does the Javascript “debugger” statement do? ",

        'a': 'it will debug all the errors in the program at a time',
        'b': 'it act as a breakpoint in a prog',
        'c': 'it will debug error in current statement if any',
        'd': 'All the above',

        'correct': 'b'

    },
    {
        'que': "What does the ‘toLocateString()’ method do in JS? ",

        'a': 'Return a localized object representation',
        'b': 'Return a parsed string',
        'c': 'Return a localized string of an object',
        'd': 'None of them',

        'correct': 'c'

    }];

    let index = 0;
    let quesBox = document.getElementById('quesBox');
    let optionBox = document.querySelectorAll("input[type='radio']")
    let correct = 0;
    let incorrect = 0;
    let total = Questions.length;

    const loadQuestion = () => {

        if (index === total) {
            return QuizEnd();
        }
        reset();

        const data = Questions[index];
        quesBox.innerText = `${index + 1}) ${data.que}`;

        optionBox[0].nextElementSibling.innerText = data.a;
        optionBox[1].nextElementSibling.innerText = data.b;
        optionBox[2].nextElementSibling.innerText = data.c;
        optionBox[3].nextElementSibling.innerText = data.d;
    };

    document.querySelector('#submit').addEventListener('click',
        function () {
            const data = Questions[index];
            const ans = Answer();
            if (ans === data.correct) {
                correct++;
            } else {
                incorrect++;
            }

            index++;
            loadQuestion();

        });
    function Answer() {
        let ans;
        optionBox.forEach((inputE1, i) => {
            if (inputE1.checked) {
                ans = optionBox[i].value;
            }
        });
        return ans;
    }

    const reset = () => {
        optionBox.forEach((inputE1) => {

            inputE1.checked = false;

        });
    };

    const QuizEnd = () => {
        document.querySelector('.container').innerText = `thank you for playing & your score is : 
             ${correct} / ${total} `;
        document.querySelector('.container').style.fonts = '2.5rem'
    };

    loadQuestion(index);
});





