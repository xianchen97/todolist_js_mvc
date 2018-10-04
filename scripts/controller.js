var controller  = function(model, view){
    this.model = model;
    this.view = view;
    this.init();
    currentObj = this;    
    modelo = model;

}

controller.prototype =
{
    init: function()
    {
        this.createHandlers();
        this.notifyChangeable();
    },

    createHandlers : function(){
        modelVal = this.model;
        viewVal = this.view;
        if(document.title == "User"){
            $( "input" ).click(function() {
                viewVal.changeLabelView(this);
                
            });
        }

        $("#edit").click(function(){
            currentObj.toggleContentEditable();
        });


        $("#remove").click(function(){
            currentObj.removeElements();
        });


    },

    notifyChangeable: function(){
   
        $('.changeable').each(function(){
            $(this).bind('input', function(){
                console.log($(this));
                console.log($(this).text());
                modelo.changeQuizProperty("" +$(this).attr("id"), $(this).text());

                if (event.keycode == "insertParagraph"){
                }
            });
        });



    },

    toggleContentEditable : function(){
        $('.changeable').each(function(){
            if ($(this).attr('contenteditable') == 'false') {
                $(this).attr('contenteditable','true');
            }
            else {
                $(this).attr('contenteditable','false');
            }
        })
    },

    removeElements: function(){
        $(".quizzes").each(function(){
            $(this).children().each(function(){
                $(this).click(function(){
                    $(this).empty();
                    console.log(this);
                })
            });
        });

    }

    
  
}