var total;  //sum of grades

var gradeCounter;  //number of grades entered

var grade;  //grade typed by user

var gradeValue;  //grade converted to integer

var average; 

//Processing phase
total = 0;
gradeCounter = 1;

for (var i = 0; i <=10; i++) //loop 10 times for grades for 10 students
      {
        //prompt for input and read grade from user
       grade = window.prompt("Enter numerical score:", "0");
        //convert grade from string to integer
        gradeValue = parseInt(grade);
        //add gradeValue to total
        total = total + gradeValue;
      }  //ends while statement
    
//Termination phase
    average = total / 10; //calculate the average
    //display average of exam grades
//the following is not my code
let p = document.createElement("p");
p.innerText = "The class average for " + (i - 1) + " students is " + average + "."
document.querySelector('body').appendChild(p);

//the following is my coding
document.writeln(
  "<p>The class average for " + (i-1) + " students is " + average + ".</p>");