function sendMail(event) {
  event.preventDefault();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (params.name.value?.length === "") {
    params.name.focus();
    return false;
  }

  if (params.email.value?.length <= 0) {
    params.email.focus();
    return false;
  }
  if (params.subject.value?.length <= 0) {
    params.subject.focus();
    return false;
  }
  if (message.value.length <= 0) {
    message.focus();
    return false;
  }
  console.log(params.name, params.email, params.subject, params.message);
  const serviceID = "service_cl1njrs";
  const templateID = "template_z4hgljq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));

  // emailjs.send("service_cl1njrs", "template_z4hgljq", params).then(
  //   function (response) {
  //     console.log("SUCCESS!", response.status, response.text);
  //   },
  //   function (error) {
  //     console.log("FAILED...", error);
  //   }
  // );
}
