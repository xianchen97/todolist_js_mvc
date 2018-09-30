var view = function (model) {
    this.model = model;
    this.addEvent = new Event(this);
    this.removeEvent = new Event(this);
    this.editEvent = new Event(this);
    this.init();
}

view.prototype = 
{
    init : function(){
        this.renderDOM();
        this.createChildrenHooks();
        this.setupHandlers();
    },

    renderDOM : function(){
        this.renderQuestions(); 
        this.renderQuestionOptions();
    },

    createChildrenHooks: function()
    {
        this.container = document.getElementsByClassName("quiz_container");
        this.addButton = document.getElementsByClassName("add-button btn btn-outline-success");
        this.removeButton = document.getElementsByClassName("remove-button btn btn-outline-primary");
        this.editButton = document.getElementsByClassName("edit-button btn btn-outline-warning");
    },  



    renderQuestions: function(){
        counter = 0;
        for ( var key in this.model.getQuizObj()) {
            quizDiv = document.createElement("div");
            quizDiv.setAttribute("class", "col-12");
            quizDiv.setAttribute("id", "quiz_div_" + counter);
            createPTag = document.createElement("p");
            createPTag.setAttribute("id", "col-12 quiz");
            quizDiv.appendChild(createPTag);
            quizTextNode = document.createTextNode(key);
            createPTag.appendChild(quizTextNode);
            holder =(document.getElementsByTagName("div")[1]);
            holder.appendChild(quizDiv);
            counter++;
        }

    },

    renderQuestionOptions: function()
    {
        counter = 0;
        for(var key in this.model.getQuizObj())
        {
            quizQDiv = document.getElementById("quiz_div_" + counter);
            optionHolder = document.createElement("ul");
            optionHolder.setAttribute("id", "optionholder_" + counter);
            quizQDiv.appendChild(optionHolder);

            for(i = 0; i < this.model.getQuizObj()[key].length; i++){
                li = document.createElement("li");
                textnode = document.createTextNode("" + this.model.getQuizObj()[key][i]);
                li.appendChild(textnode);

                ulholder = document.getElementById("optionholder_" + counter);
                console.log(ulholder);
                ulholder.appendChild(li);
            }
            counter++;
        }
    },

    setupHandlers: function()
    {

    },

    
}


