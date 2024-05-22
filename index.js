const display = document.getElementById("display");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const six = document.getElementById("six");
const four = document.getElementById("four");
const five = document.getElementById("five");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const backSpace = document.getElementById("backSpace");
const remove = document.getElementById("remove");
const modulo = document.getElementById("modulo");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const double = document.getElementById("double");
const dot = document.getElementById("dot");
const button = document.querySelector(".buttons");


one.addEventListener("click", function () {
  display.value += '1';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "1"){
    display.value += '1';
    console.log(event.key);
  }
})
two.addEventListener("click", function () {
  display.value += '2';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "2"){
    display.value += '2';
  }
})

three.addEventListener("click", function () {
  display.value += '3';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "3"){
    display.value += '3';
  }
})
four.addEventListener("click", function () {
  display.value += '4';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "4"){
    display.value += '4';
    console.log(event.key);
  }
})

five.addEventListener("click", function () {
  display.value +='5';
  console.log(five);
});
document.addEventListener("keydown", function(event) {
  if (event.key === "5"){
    display.value += '5';
    console.log(event.key);
  }
})

six.addEventListener("click", function () {
  display.value += '6';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "6"){
    display.value += '6';
    console.log(event.key);
  }
})

seven.addEventListener("click", function () {
  display.value+= '7';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "7"){
    display.value += '7';
    console.log(event.key);
  }
})

eight.addEventListener("click", function () {
  display.value += '8';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "8"){
    display.value += '8';
    console.log(event.key);
  }
})

nine.addEventListener("click", function () {
  display.value += '9';
});
document.addEventListener("keydown", function(event) {
  if (event.key === "9"){
    display.value += '9';
    console.log(event.key);
  }
})

zero.addEventListener("click", function () {
    display.value += '0';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "0"){
      display.value += '0';
    }
  })

  double.addEventListener("click", function () {
    display.value += '00';
  });
  

  dot.addEventListener("click", function () {
    display.value += '.';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "."){
      display.value += '.';
      console.log(event.key);
    }
  })
  multiply.addEventListener("click", function () {
    display.value += '*';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "*"){
      display.value += '*';
      console.log(event.key);
    }
  })

  modulo.addEventListener("click", function () {
    display.value += '%';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "%"){
      display.value += '%';
      console.log(event.key);
    }
  })

  add.addEventListener("click", function () {
    display.value += '+';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "+"){
      display.value += '+';
     
    }
  })

  sub.addEventListener("click", function () {
    display.value += '-';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "-"){
      display.value += '-';
    }
  })
  divide.addEventListener("click", function () {
    display.value += '/';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "/"){
      display.value += '/';
      console.log(event.key);
    }
  })
  equal.addEventListener("click", function () {
    display.value = eval(display.value);
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "="){
      display.value = eval(display.value);
      
    }
  })
  remove.addEventListener("click", function () {
    display.value = '';
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace"){
      display.value = '';
      
    }
  })
  
  backSpace.addEventListener("click", function () {
    display.value = display.value.toString().slice(0,-1);
  });

  // document.addEventListener("keypress", function(event){
  //   alert("key was pressed")
  // })