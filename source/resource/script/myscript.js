var TestScript = function() {
    this.text = "This is a test script"
}

TestScript.prototype = {
    getText: function() {
        console.log(this.text);
    }
}