console.log("Signup frontend javascript file");

//FRONTEND VALIDATION

$(function () {});

function validationSignUpForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();
  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please Insert all requiured inputs");
    return false;
  }
  if (memberPassword !== confirmPassword) {
    alert(" Password Differs Please Check Your Password");
    return false;
  }
}
