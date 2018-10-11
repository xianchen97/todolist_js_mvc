var model = function() {
  anObject = {
    "1+1": ["1", "2", "3", "4"],
    "1-1": ["0", "1", "2", "3"]
  };

  localStorage.setItem("quizObject", JSON.stringify(anObject));

  answerObject = ["2", "0"];
  localStorage.setItem("answerObject", JSON.stringify(answerObject));
  // localStorage.clear();

  this.quizObj = localStorage.getItem("quizObject");
  this.answerObj = localStorage.getItem("answerObject");
  this.removeQuizQuestions();
  this.checkAnswer();
};

//Define functions that alter the model within here.
model.prototype = {
  //getters
  getQuizObj: function() {
    return JSON.parse(this.quizObj);
  },

  getAnswerObj: function() {
    return JSON.parse(this.answerObj);
  },

  checkAnswer: function(indexOfQuiz) {
    //console.log(typeof this.getAnswerObj());
  },

  //mutators

  addQuizQuestion: function(key, value, answer) {
    newQuizObject = this.getQuizObj();
    newQuizObject[key] = value;
    localStorage.setItem("quizObject", JSON.stringify(newQuizObject));

    newAnswerObject = this.getAnswerObj();
    newAnswerObject.push(answer);
    localStorage.setItem("answerObject", JSON.stringify(newAnswerObject));
  },

  changeQuizProperty: function(old_key, new_key, domObject) {
    newQuizObject = this.getQuizObj();
    if ($(domObject).is("p")) {
      Object.defineProperty(
        newQuizObject,
        new_key,
        Object.getOwnPropertyDescriptor(newQuizObject, old_key)
      );
      console.log(old_key);
      delete newQuizObject[old_key];
      console.log("xD");

      console.log(newQuizObject);
      localStorage.setItem("quizObject", JSON.stringify(newQuizObject));
    } else {
      index = $(domObject)
        .attr("for")
        .substring(21, 22);
      console.log("ENTERED THE LABEL TAG");
      console.log(index);
      console.log(old_key);
      console.log(newQuizObject);
      array = newQuizObject[old_key];
      console.log(array);
      array[index] = new_key;

      localStorage.setItem("quizObject", JSON.stringify(newQuizObject));
    }
  },

  removeQuizQuestions: function(key) {
    if (this.newQuizObject != null || this.newQuizObject != undefined) {
      this.newQuizObject = this.getQuizObj();
      delete newQuizObject[key];
      localStorage.setItem("quizObject", JSON.stringify(newQuizObject));
    }

    // localStorage.setItem('quizObject', clone)
  },

  //validation functions
  validateAnswers: function(index, val) {
    jsonObj = JSON.parse(this.answerObj);
    return jsonObj[index] == val;
  }
};
