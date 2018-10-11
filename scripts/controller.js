var controller = function(model, view) {
  this.model = model;
  this.view = view;
  currentObj = this;
  modelo = model;
  this.init();
};

controller.prototype = {
  init: function() {
    this.createHandlers();
    this.notifyChangeable();
  },

  createHandlers: function() {
    modelVal = this.model;
    viewVal = this.view;
    if (document.title == "User") {
      $("input").click(function() {
        viewVal.changeLabelView(this);
      });
    }

    $("#edit").click(function() {
      currentObj.toggleContentEditable();
      currentObj.view.renderEditAnswerButton();
    });

    $("#remove").click(function() {
      currentObj.removeElements();
    });

    $("#add").click(function() {
      currentObj.view.renderAddQuestionPrompt();
      $("#submit_btn").click(function(event) {
        key = $("#question").val();
        array = [
          $("#option1").val(),
          $("#option2").val(),
          $("#option3").val(),
          $("#option4").val()
        ];
        answer = $("#answer").val();
        currentObj.model.addQuizQuestion(key, array, answer);
      });
    });
  },

  notifyChangeable: function() {
    $(".changeable").each(function() {
      $(this).bind("keydown", function(event) {
        console.log(event.keyCode);
        if (event.keyCode == 13) {
          event.preventDefault();
          currentObj.toggleContentEditable();
          location.reload();
        }

        if ($(this).is("p")) {
          modelo.changeQuizProperty(
            "" + $(this).attr("id"),
            $(this).text(),
            this
          );
          console.log("" + $(this).attr("id"), $(this).text());
        } else {
          quizHolderID = $(
            "#" +
              "quiz_div_" +
              $(this)
                .attr("for")
                .substring(13, 14)
          )
            .find("p")
            .text();
          modelo.changeQuizProperty(quizHolderID, $(this).text(), this);
        }
      });
    });
  },

  toggleContentEditable: function() {
    $(".changeable").each(function() {
      if ($(this).attr("contenteditable") == "false") {
        $(this).attr("contenteditable", "true");
      } else {
        $(this).attr("contenteditable", "false");
      }
    });
  },

  removeElements: function() {
    $(".quizzes").each(function() {
      $(this)
        .children()
        .each(function() {
          $(this).click(function() {
            currentObj.model.removeQuizQuestions(
              $(this)
                .find("p")
                .text()
            );
            $(this).empty();
          });
        });
    });
  }
};
