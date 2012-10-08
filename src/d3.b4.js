(function(b4){
    
    var D3_WIKI = "https://github.com/mbostock/d3/wiki/";
    
    var D3_TYPES = {
        SELECTION: "Selection"
    };

    // set up a base configuration
    var d3_mold = b4.block()
            .generator("JavaScript")
            .helpUrlTemplate(D3_WIKI)
            .namespace("")
            .colour("blue"),
            
        // make a subconfiguration
        select_mold = d3_mold.clone()
            .namespace("d3_select")
            .helpUrlTemplate(D3_WIKI +"Selections#wiki-<%= block.id() %>")
            .category("d3 Selection");
            
        select_mold.clone("")
            .appendTitle("select the first element that matches")
            .appendTitle(
                b4.field.text("SELECTOR")
                    .init("#svg")
            )
            .tooltip("The first element that matches the selector")
            .output(D3_TYPES.SELECTION)
            .code("d3.select('<%= block.getTitleValue('SELECTOR') %>')")
            .done();
        /*
        BJS.d3_d3_select = function() {
            return join_none([
                "d3.select('",
                this.getTitleValue('TEXT'),
                "')"
            ]);
        };
    
        BL.d3_d3_select = {
          // d3.select - select an element from the current document.
          init: function() {
            this.appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
          }
        };
        */
            
})(b4);