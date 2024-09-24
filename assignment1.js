// Step 1: Declare variables of each persona 

// persona1: Student Information
let studentFirstName = "Juan";
let studentMiddleName = "Gamoso";
let studentLastName = "Dela Cruz";
let studentBirthdate = "January 01, 2001";
let studentBirthPlace = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
let studentAddress = "San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
let studentCourse = "Bachelor of Science in Computer Science";
let studentDreamJob = "Software Engineer";

// persona2: Classmate's Student Information
let classmateFirstName = "Precious";
let classmateMiddleName = "Camiring";
let classmateLastName = "Haduca";
let classmateBirthDate = "December 15, 2003";
let classmateBirthplace = "Palali Norte, Sta. Lucia, Ilocos Sur";
let classmateAddress = "Palali Norte, Sta. Lucia, Ilocos Sur";
let classmateCourse = "Bachelor of Science in Hospitality Management";
let classmateDreamJob = "Service Crew in Cruise Ship";

// persona3: Classmate's Student Information
let classmateFirstName2 = "Jiemar";
let classmateMiddleName2 = "Habungan";
let classmateLastName2 = "Anub";
let classmateBirthDate2 = "March 01, 2005";
let classmateBirthplace2 = "Palali Norte, Sta. Lucia, Ilocos Sur";
let classmateAddress2 = "Palali Norte, Sta. Lucia, Ilocos Sur";
let classmateCourse2 = "Bachelor of Arts in Political Science";
let classmateDreamJob2 = "Philippine Army";


//Step2: Print the Information using string and concatenation

//For Student
let studentInfo = "[" + studentFirstName.toUpperCase() + " " + studentMiddleName.toUpperCase() + " " + studentLastName.toUpperCase() + "]" + " " + "was born [" + studentBirthdate + "]" + " " + "at"+ " " + "[" + studentBirthPlace + "]," + "and currently living [" + studentAddress + "]." + " " + "[" + studentFirstName.toLowerCase() + " " + studentMiddleName.toLowerCase() + " " + studentLastName.toLowerCase() + "]" + "is taking up [" + studentCourse + "] and dreams to be [" + studentDreamJob + "]" + " " + "after graduation.";

console.log(studentInfo);

//for classmate1
let classmateInfo = "[" + classmateFirstName.toUpperCase() + " " + classmateMiddleName.toUpperCase() + " " + classmateLastName.toUpperCase() + "]" + " " + "was born [" + classmateBirthDate + "]" + " " + "at"+ " " + "[" + classmateBirthplace + "]," + "and currently living [" + classmateAddress + "]." + " " + "[" + classmateFirstName.toLowerCase() + " " + classmateMiddleName.toLowerCase() + " " + classmateLastName.toLowerCase() + "]" + "is taking up [" + classmateCourse + "] and dreams to be [" + classmateDreamJob + "]" + " " + "after graduation.";

console.log(classmateInfo);

//for classmate2
let classmateInfo2 = "[" + classmateFirstName2.toUpperCase() + " " + classmateMiddleName2.toUpperCase() + " " + classmateLastName2.toUpperCase() + "]" + " " + "was born [" + classmateBirthDate2 + "]" + " " + "at"+ " " + "[" + classmateBirthplace2 + "]," + "and currently living [" + classmateAddress2 + "]." + " " + "[" + classmateFirstName2.toLowerCase() + " " + classmateMiddleName2.toLowerCase() + " " + classmateLastName2.toLowerCase() + "]" + "is taking up [" + classmateCourse2 + "] and dreams to be [" + classmateDreamJob2 + "]" + " " + "after graduation.";

console.log(classmateInfo2);

