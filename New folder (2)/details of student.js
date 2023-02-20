let web20={
    batch:2022,
    track:'unit 3',
    course:'js',
    type:'web devlopment',

};

let students=[];
function studentdetails(e){
    e.preventDefault();
    let form = document.getElementById("stud");
    let s1 = Object.create(web20);
    s1.name = form.name.value;
    s1.roll = form.roll.value;
    students.push(s1);
    console.log('students:',students)


}