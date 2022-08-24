
function sendEmail(){

  var info ={
      from_name:document.getElementById("name").Value,
      email:document.getElementById("email").Value,
      msg:document.getElementById("msg").Value,
  }
  emailjs.send("service_te706wr","template_ar24s4n",info)
     alert("thank you !" );
}
