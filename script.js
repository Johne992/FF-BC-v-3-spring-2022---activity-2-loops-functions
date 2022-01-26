// loop review
            let count;
            document.write("Starting for Loop" + "<br />");

            
              for(count = 0; count < 10; count++) {
                  document.write("Current Count : " + count );
                  document.write("<br />");      
               }
              if (count > 10){
                 document.write("Loop not run, the count is off." + "<br />");
                }
              else {
               document.write("Loop stopped!" + "<br />");
              }
// calling a method (a function inside of an object) of another object
var person = {
  fullName: function(city, country){
    return this.firstName + " " + this.lastName + ',' + city + "," + country;
  }
}
var person1 = {
  firstName: "John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");

// callback function
function myDisplayer(value){
  document.write("This is double the count " + value);
}
function myDouble(num, myCallBackFunction){
  num *= 2;
  myCallBackFunction(num);
}
myDouble(count, myDisplayer)