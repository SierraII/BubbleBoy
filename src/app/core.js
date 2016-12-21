(function(){

    "use strict";


    /* -------------------------------------------------------------------- */
    /*
            App.Content.Core
    */
    /* -------------------------------------------------------------------- */


    App.namespace("App.Content.Core");


    /* -------------------------------------------------------------------- */
    /*
            Public
    */
    /* -------------------------------------------------------------------- */


    App.Content.Core = {

        initialize : function(){

            var self = this;

            self.keywords = config.keywords;
            self.collections = config.collections;
            self.customSelectors = config.custom_selectors;

            self.mainSelectors = [];
            self.globalSelectors = [];
            self.globalParents = [];

            $(self.collections).each(function(collectionsIndex){

                var collection = self.collections[collectionsIndex];
                var containers = collection.containers;

                self.globalSelectors = collection.global_selectors;
                self.globalParents = collection.global_parents;

                $(containers).each(function(containerIndex){

                    var container = containers[containerIndex];

                    self.mainSelectors.push(container.selector);

                });

            });

            $(self.mainSelectors.join(", ")).bind("DOMNodeInserted", function(event){
                self.deligate($(event.target).parent());
            });

        },

        deligate : function(body){

            var self = this;

            body.each(function(bodyIndex){

                var parent = body[bodyIndex];
                var globals = $(parent).find(self.globalSelectors.join(", "));

                $(self.customSelectors).each(function(customSelectorsIndex){

                    var customSelector = self.customSelectors[customSelectorsIndex];
                    var customElements = $(parent).find(customSelector.id);
                    var customElementsTags = customElements.find(customSelector.join(", "));

                    self.filter(customElementsTags);

                });

                self.filter(globals);

            });

        },

        filter : function(elements){

            var self = this;

            elements.each(function(elementsIndex){

                var element = elements[elementsIndex];
                var text = element.innerHTML;

                if(new RegExp(self.keywords.join("|")).test(text)){
                    self.remove(element);
                }

            });

        },

        remove : function(element){

            var self = this;

            $(self.globalParents).each(function(parentsIndex){

                var parent = self.globalParents[parentsIndex];

                $(element).closest(parent).css("border", "3px solid red");

            });

        }

    };


    /* -------------------------------------------------------------------- */
    /*
            Bootstrap
    */
    /* -------------------------------------------------------------------- */


    $(function(){

        App.Content.Core.initialize();

    });


})();
