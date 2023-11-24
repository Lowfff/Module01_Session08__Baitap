let month = +prompt("Nhập tháng mong muốn");

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:                    
       console.log("Month " + month + "có 31 ngày"); 
       break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Month " + month + "có 30 ngày");
        break;
    case 2:
        console.log("Month " + month + "có 28,29 ngày");
        break;
    default:
        console.log("Giá trị nhập vào không hợp lệ");
}