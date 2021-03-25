function createUsers(){
    const inputs = document.getElementsByTagName("input");
  
    fetch("https://whispering-savannah-30451.herokuapp.com/new_user/",{
        method: 'POST',
        body: JSON.stringify({
            username: inputs[3].value,
            password: inputs[4].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
      alert("User has been created");
      document.getElementById("register").reset();
      window.location.href="./index.html";
    });
  };




let Users = [];

fetch("https://whispering-savannah-30451.herokuapp.com/users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    Users = data;
});

function loginMain(){
    let inputs = document.getElementsByTagName("input");
    
    let logName = inputs[0].value;
    let logPass = inputs[1].value;

    let log = Users.filter(Users => {
        return Users.Username == logName && Users.Password == logPass ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert(logName + " have successfully logged in");
        window.location.href = "./display.html";
    }else{
        alert("Please enter a valid username and password");
    }
}
