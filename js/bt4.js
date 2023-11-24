let one = +prompt("Mời bạn nhập vào số a");
let two = +prompt("Mời bạn nhập vào số b");
let caculate = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let add = one + two;
let sub = one - two;
let multy = one * two;
let devide = one / two;

switch (caculate) {
    case "+":
        alert ("Kết quả của phép tính trên:" + add);
        break;
    case "-":
        alert ("Kết quả của phép tính trên:" + sub);
        break;
    case "*":
        alert ("Kết quả của phép tính trên:" + multy);
        break;
    case "/":
        alert ("Kết quả của phép tính trên:" + devide);
        break;
    default: ("Không phù hợp")
}
