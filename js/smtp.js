let btn = document.querySelector('#contactSubmitBtn');
btn.addEventListener('click',function(e){
    e.preventDefault();

    let name = document.querySelector('#contactName').value;
    let email = document.querySelector('#contactMail').value;
    let mobile = document.querySelector('#contactNumber').value;
    let subject = document.querySelector('#contactSubject').value;
    let message = document.querySelector('#contactMessage').value;
    let body = 'name: ' +name+ '<br/> email: ' +email+ '<br/> mobile: ' +mobile+ '<br/> subject: ' +subject+ '<br/> message' +message;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ahemadirshad01@gmail.com",
    Password : "CE207024D17AF62968BA0DFB2FA5D94D003A",
    To : 'ahemadirshad01@gmail.com',
    From : 'ahemadirshad01@gmail.com',
    Subject : subject,
    Body : body
}).then(
  // message => alert(message)
  pop()
);
document.querySelector('#contactName').value='';
document.querySelector('#contactMail').value='';
document.querySelector('#contactNumber').value='';
document.querySelector('#contactSubject').value='';
document.querySelector('#contactMessage').value='';

})

function pop(){
    let div=document.createElement("div");
    let sub=document.getElementById("sub");

    div.setAttribute("id","popUp");
    document.body.append(div);

    let p=document.createElement("p");
    p.innerHTML=`SUCCESSFULLY SUBMITTED`;
    div.append(p);
    let btn1=document.createElement("input");
    btn1.setAttribute("type","button");
    btn1.setAttribute("value","click Me");
    btn1.setAttribute("onclick","Click()");
    div.append(btn1);
    sub.removeAttribute("onclick");
    let contact = document.querySelector('#contact');
    contact.append(div);

 
}
function Click()
 {
    sub.setAttribute("onclick","display()");
    location.reload();
 }
