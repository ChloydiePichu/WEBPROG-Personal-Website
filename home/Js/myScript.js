function myFunction() {
    document.getElementById("demo").innerHTML = "What is my nickname";
  }

  function myFunction2() {
    const element = document.getElementsByTagName("p");

    document.getElementById("demo").innerHTML = 'Its Chloyd! ' + element[0].innerHTML;


  }