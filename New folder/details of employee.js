let details={
    company:`wipro`,
    role:`developer`,
    batch:2022,
}
let employees=[]
function empdetail(e){
    e.preventDefault();
    let form=document.getElementById("emp");
    let emp1=Object.create(details);
    emp1.name=form.name.value;
    emp1.id=form.id.value;
    emp1.password=form.pass.value;
    employees.push(emp1);
    console.log('employees:',employees);
}