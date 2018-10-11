var view = function(model) {
  this.model = model;
  this.init();
};

view.prototype = {
  init: function() {
    this.renderDOM();
    this.createChildrenHooks();
  },

  renderDOM: function() {
    this.renderQuestions();
    this.renderQuestionOptions();
  },

  createChildrenHooks: function() {
    this.container = document.getElementsByClassName("quiz_container");
    this.addButton = document.getElementsByClassName(
      "add-button btn btn-outline-success"
    );
    this.removeButton = document.getElementsByClassName(
      "remove-button btn btn-outline-primary"
    );
    this.editButton = document.getElementsByClassName(
      "edit-button btn btn-outline-warning"
    );
  },

  //Function renders out questions viewed in local storage.
  renderQuestions: function() {
    counter = 0;
    document.title == "Admin"
      ? (holder = document.getElementsByTagName("div")[6])
      : (holder = document.getElementsByTagName("div")[1]);

    if (
      this.model.getQuizObj() != null ||
      this.model.getQuizObj() != undefined
    ) {
      for (var key in this.model.getQuizObj()) {
        quizTextNode = document.createTextNode(key);
        quizDiv = document.createElement("div");
        quizDiv.setAttribute("class", "col-12");
        quizDiv.setAttribute("id", "quiz_div_" + counter);
        createPTag = document.createElement("p");
        createPTag.setAttribute("class", "alert alert-primary changeable");
        createPTag.setAttribute("contenteditable", "false");
        createPTag.setAttribute("id", "" + key);
        quizDiv.appendChild(createPTag);
        quizTextNode = document.createTextNode(key);
        createPTag.appendChild(quizTextNode);
        holder.appendChild(quizDiv);
        counter++;
      }
    } else {
      p = document.createElement("p");
      text = document.createTextNode("No questions made!");
      p.appendChild(text);
      holder.appendChild(p);
    }
  },

  renderEditAnswerButton: function() {
    /** 
    $('#quizzes').children('div').each(function () {

      if(( $(buttonID) == undefined)){
        button = document.createElement("button");
        button.setAttribute("id", $(this).attr("div") + "_button");
        p_tag = $(this).find("p").append(button);
        console.log("APPENDED");
      }
      else{
        button = document.createElement("button");
        button.setAttribute("id", $(this).attr("div")+ "_button");
        $(this).remove('#' + $(this).attr('div'));
        console.log("You should not be able to see this message");
        
      }
    });

    */
  },

  renderAddQuestionPrompt: function() {
    html = `<form class="form-horizontal" action="" method="POST">
    <div class="form-group">
      <label class="control-label col-sm-2" for="Quiz">Question Maker:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="question" placeholder="Enter question">
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10"> 
        <input type="text" class="form-control" id="option1" placeholder="Option 1">
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10"> 
        <input type="text" class="form-control" id="option2" placeholder="Option 2">
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10"> 
        <input type="text" class="form-control" id="option3" placeholder="Option 3">
      </div>
    </div>  

    <div class="form-group">
      <div class="col-sm-10"> 
        <input type="text" class="form-control" id="option4" placeholder="Option 4">
      </div>
    </div>    

    <div class="form-group">
      <div class="col-sm-10"> 
        <input type="text" class="form-control" id="answer" placeholder="Answer">
      </div>
    </div>

    <div class="form-group"> 
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" id="submit_btn">Submit</button>
      </div>
    </div>  `;
    html = $.parseHTML(html);
    $("#question_prompt").append(html);
  },

  removeEditAnswerButton: function() {
    $("#quizzes")
      .children("div")
      .each(function() {
        button = document.createElement("button");
        button.setAttribute("id", $(this).attr("div"));
        $(this).remove("#" + $(this.attr("div")));
      });
  },

  //Following function renders out all question options.
  renderQuestionOptions: function() {
    counter = 0;
    for (var key in this.model.getQuizObj()) {
      quizQDiv = document.getElementById("quiz_div_" + counter);
      optionHolder = document.createElement("div");
      optionHolder.setAttribute("id", "optionholder_" + counter);
      optionHolder.setAttribute("class", "form-group");
      quizQDiv.appendChild(optionHolder);

      for (i = 0; i < this.model.getQuizObj()[key].length; i++) {
        //Div to hold option
        div = document.createElement("div");
        div.setAttribute("class", "from-check alert alert-light");

        //Create input
        li = document.createElement("input");
        li.setAttribute("type", "radio");
        li.setAttribute("value", "" + this.model.getQuizObj()[key][i]);
        li.setAttribute("name", "optionholder_" + counter);
        li.setAttribute("class", "form-check-input");
        li.setAttribute("id", "optionHolder_" + counter + "option_" + i);
        li.setAttribute("role", "alert");

        div.appendChild(li);

        //Label for input
        label = document.createElement("label");
        label.setAttribute("class", "form-check-label changeable");
        label.setAttribute("for", "optionHolder_" + counter + "option_" + i);
        label.innerHTML = this.model.getQuizObj()[key][i];
        label.setAttribute("contenteditable", "false");
        div.appendChild(label);

        //Add the option div
        ulholder = document.getElementById("optionholder_" + counter);
        ulholder.appendChild(div);
      }
      counter++;
    }
  },

  changeLabelView: function(val) {
    corrAns = this.model.validateAnswers(val.id.substring(13, 14), val.value);

    setTimeout(function() {
      $(val)
        .parent()
        .attr("class", "form-check-label changeable alert alert-light");
    }, 1000);
    if (corrAns) {
      $(val)
        .parent()
        .attr("class", "form-check-label changeable alert alert-success");
    } else {
      $(val)
        .parent()
        .attr("class", "form-check-label changeable alert alert-danger");
    }
  }
};
