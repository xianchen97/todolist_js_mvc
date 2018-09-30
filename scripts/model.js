var model = function () 
{
    var quizObject = 
    { 
        '1+1?': ["1","2","3", "4"] ,
        '1-1?': ["1","2","3", "0"] ,
        '1+2?': ["1","5","3", "6"] 
     };

     var answerObject = ["2","0","3"];

     localStorage.setItem('quizObject', JSON.stringify(quizObject));
     localStorage.setItem('answerObject', JSON.stringify(answerObject));

 

    this.quizQuestions = [];
    this.quizAnswers = [];
    this.quizOptions = [];
    this.quizQuestions.push("1");
    this.quizQuestions.push("2");
    this.quizQuestions.push("3");
    this.quizAnswers.push(["1","2","3","4"]);

};

//Define functions that alter the model within here.
model.prototype = {

    //getters
    getQuizObj : function ()
    {
        return JSON.parse(retrievedObj = localStorage.getItem('quizObject'));
    },

    checkAnswer : function (indexOfQuiz){

    },
    //mutators
    addQuizQuestions: function(question)
    {
        this.quizQuestions.push(question);
    },

    addQuizQuestionOptions : function(answer)
    {
        this.quizAnswers.push(answer);
    },

    addQuizQuestionAnswers: function()
    {

    },

    removeQuizQuestions: function()
    {

    },

    removeQuizQuestionOptions : function()
    {

    },

    removeQuizQuestionAnswers: function()
    {

    },

    //validation functions
    validateAnswers: function(index, val)
    {
        jsonObj = JSON.parse(retrievedObj = localStorage.getItem('answerObject'));
        console.log(jsonObj[index] == val);

        return(jsonObj[index] == val)
    }

};