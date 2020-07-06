qx.Class.define("myapp.testClass",
{
    extend:qx.ui.container.Composite,
    construct() {
        this.base(arguments);
        this.setLayout(new qx.ui.layout.Canvas());
        var script = this.getNameTest();
        var button1 = new qx.ui.form.Button("Click me", "myapp/test.png");

        // Add button to document at fixed coordinates
        this.add(button1, {left: 100, top: 50});
  
        // Add an event listener
        button1.addListener("execute", function() {
          /* eslint no-alert: "off" */
          script.getText();
        });
    },
    
    properties: {
        nameTest: {
            init: new TestScript()
        }
    }
    
});