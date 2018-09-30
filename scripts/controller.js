var controller  = function(model, view){
    this.model = model;
    this.view = view;
    console.log(this.model);
    this.init();
}

controller.prototype =
{
    init: function()
    {
        this.createHandlers();
    },

    createHandlers : function(){
        modelVal = this.model;
        $( "li" ).click(function() {
            console.log(modelVal);
            modelVal.validateAnswers(this.parentNode.id.substring(13,14), this.innerHTML)
        });

    },

    
}