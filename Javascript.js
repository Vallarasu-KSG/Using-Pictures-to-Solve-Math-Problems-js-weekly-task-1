function Circle()
{
    const pi=3.14
    const r=prompt('Enter Radius');
    const res1=pi*r*r;
    alert("The area Circle of : " +res1)
}
function square()
{
    const a=prompt('Enter The Area')
    const res2=a*a;
    alert("The area Square of : " +res2)
}
function Cylinder()
{
    const pi=3.14
    const r=prompt("Enter Radius")
    const h=prompt("Enter Height")
    const res3=pi*r*r*h
    alert("The Volume of a cylinder : " +res3)
}
function interest()
{
    const p=prompt("Enter Amount")
    const n=prompt("Enter Year")
    const r=prompt("Enter Rate")
    const res4=p*n*r/100
    alert("The Interest of : " +res4)
}
function mean_value()
{
    const a=Number(prompt("Enter A Value"))
    const b=Number(prompt("Enter B Value"))
    const c=Number(prompt("Enter C Value"))
    const d=Number(prompt("Enter D Value"))
    const e=Number(prompt("Enter E Value"))
    const to=a+b+c+d+e
    // const res5=to/5
    alert('The average of : ' +to/5)
}


// function triangle ()
// {
//     let a=prompt('Enter the side of square');
//     let b=prompt('Enter the side of square');
   
//     let ress= 0.5*a*b;
//     document.write("A value ",a);

//     document.write(" + B Value ",b)
//     document.write(" = Total",ress)
//     // alert(ress);
// }