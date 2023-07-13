function sendMail() {
    var param = {
        name : document.getElementById("fname").value+" "+document.getElementById("lname").value,
        email: document.getElementById("email").value,
        insta: document.getElementById("insta").value,
        message: document.getElementById("message").value
    }
    const serviceId = "service_8yolehg"
    const templateId = "template_hfbpjwu"
    emailjs.send(serviceId, templateId, param).then(
        (res) =>{
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("email").value="";
            document.getElementById("insta").value="";
            document.getElementById("message").value="";
            console.log(res)
            alert("Mail Sent !!!")
        }
    ).catch(
        (err)=>console.log(err)
    );
}