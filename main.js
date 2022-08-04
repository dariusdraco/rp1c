function submit() {
    var name_1= document.getElementById("name_of_the_student_1").ariaValueMax;
    var name_2= document.getElementById("name_of_the_student_2").ariaValueMax;
    var name_3= document.getElementById("name_of_the_student_3").ariaValueMax;
    var name_4= document.getElementById("name_of_the_student_4").ariaValueMax;
    name_of_the_student_1.push(name_1);
    name_of_the_student_2.push(name_2);
    name_of_the_student_3.push(name_3);
    name_of_the_student_4.push(name_4);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student;
    document.getElementById(submit_button).style.display ="none";
    document.getElementById(sort_button).style.display ="inline-block";
}
function sorting(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name").innnerHTML = name_of_the_student_array
}
