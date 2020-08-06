function getCookie(name)
{
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  console.log(value);
  if (parts.length === 2) return parts.pop().split(';').shift();

}

function get()
{
  var username = getCookie("username");
  var password = getCookie("password");

  var userdecrypt =   CryptoJS.AES.decrypt(username, "randompass");
  var passdecrypt =   CryptoJS.AES.decrypt(password, "randompass");
  var user = userdecrypt.toString(CryptoJS.enc.Utf8);
  var pass = passdecrypt.toString(CryptoJS.enc.Utf8);
  if (user=="andy" && pass=="qwertyuiop"){
    console.log(user,pass);
    window.location='target.html';
  }
}
function validate(form)
{
 if(form.username.value == "andy" && form.password.value == "qwertyuiop")
  {
    if(form.remember.checked== true)
    {
      let usernameencrypted = CryptoJS.AES.encrypt(form.username.value, "randompass");
      let passwordencrypted = CryptoJS.AES.encrypt(form.password.value, "randompass");
      document.cookie = "username="+usernameencrypted+"; max-age=60;";
      document.cookie = "password="+passwordencrypted+"; max-age=60;";
    }
    alert('Login Successful');
    window.location = 'target.html';/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Invalid Username/Password. Try Again!")/*displays error message*/
 }
}
