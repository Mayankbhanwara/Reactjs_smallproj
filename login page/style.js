let otp_val; // it is define globally

function sendOTP() {
    const Email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    otp_val = Math.floor(1000 + Math.random() * 9000); // Generate 4 digit OTP

    let emailbody = `<h2>Your OTP is:</h2><h3>${otp_val}</h3>`;

    Email.send({
        SecureToken: "13c96ff6-f824-4702-b8fc-a19f13fa647b",
        To: Email.value,
        From: "mayankjain20072004@gmail.com",
        Subject: "Email OTP Verification",
        Body: emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email: " + Email.value);
                otpverify.style.display = "block"; 
            } else {
                alert("Failed to send OTP. Please try again.");
            }
        }
    );
}
// OTP Verification
document.getElementById('otp_btn').addEventListener('click', () => {
    const otp_inp = document.getElementById('otp_inp').value;
    if (otp_inp == otp_val) {
        alert("Email address verified!");
    } else {
        alert("Invalid OTP. Try again.");
    }
});
