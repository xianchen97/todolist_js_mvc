var model = function () 
{
    map = new Map();

    testObj = {
        '1+1': ['1','2','3','4'],
        '1-1': ['1','2','3','4'],
        '1+2': ['1','2','3','4']
    };
    localStorage.setItem('quizObject', JSON.stringify(testObj));
    this.quizObj = localStorage.getItem('quizObject')
    this.answerObj = localStorage.getItem('answerObject')
    this.removeQuizQuestions();
    this.checkAnswer();
};

//Define functions that alter the model within here.
model.prototype = {

    //getters
    getQuizObj : function ()
    {
        return JSON.parse(this.quizObj);
    },

    getAnswerObj: function(){
        return JSON.parse(this.answerObj);
    },

    checkAnswer : function (indexOfQuiz){
        //console.log(typeof this.getAnswerObj());
    },


    //mutators

    addQuizQuestion: function(property, options, value)
    {
        let clone = {...(this.getQuizObj)};
        clone[property] = value;
    

    },


    changeQuizProperty: function(key, value){
        console.log("The key is: "+ key);
        console.log(key);
        console.log(value);
        let clone = {...(this.getQuizObj())};
        clone.value = clone.key; 
        console.log(clone);
       // localStorage.setItem('quizObject', clone)
    },

    removeQuizQuestions: function(index)
    {
    
        let clone = {...(this.getQuizObj())};
        var key = Array.from(Object.keys(clone))[index]; 
        console.log(key);
        delete clone[""+key];
       // localStorage.setItem('quizObject', clone)
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
        jsonObj = JSON.parse(this.answerObj);
        return(jsonObj[index] == val);

    }

};