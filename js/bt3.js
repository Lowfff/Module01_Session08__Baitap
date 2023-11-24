let day = +prompt ( "Mời bạn nhập ngày sinh" );
let month = +prompt ( "Mời bạn nhập tháng sinh" );

switch (month) {
    case 1:
        if ( day > 0 && day <= 19 ) {
            console.log("Cung Ma Kết");
        } else if ( day >= 20 && day <= 31 ) {
            console.log("Cung Bảo Bình");
        }
        break;
    case 2:
        if ( day > 0 && day <= 18 ) {
            console.log("Cung Bảo Bình");
        } else if ( day >= 19 && day <= 29 ) {
            console.log("Cung Song Ngư");
        }
        break;
    case 3:
        if ( day > 0 && day <= 20 ) {
            console.log("Cung Song Ngư");
        } else if ( day >= 21 && day <= 31 ) {
            console.log("Cung Bạch Dương");
        }
        break;
    case 4:
        if ( day > 0 && day <= 19 ) {
            console.log("Cung Bạch Dương");
        } else if ( day >= 20 && day <= 30 ) {
            console.log("Cung Kim Ngưu");
        }
        break;
    case 5:
        if ( day > 0 && day <= 20 ) {
            console.log("Cung Kim Ngưu");
        } else if ( day > 21 && day <= 31 ) {
            console.log("Cung Song Tử");
        }
        break;
    case 6:
        if ( day > 0 && day <= 21 ) {
            console.log("Cung Song Tử");
        } else if ( day > 22 && day <= 30 ) {
            console.log("Cung Cự Giải");
        }
        break;
    case 7:
        if ( day > 0 && day <= 22 ) {
            console.log("Cung Cự Giải");
        } else if ( day > 23 && day <= 31 ) {
            console.log(" Cung Sư Tử");
        }
        break;
    case 8:
        if ( day > 0 && day <= 22 ) {
            console.log("Cung Sư Tử");
        } else if ( day > 23 && day <= 31 ) {
            console.log(" Cung Xử Nữ");
        }
        break;
    case 9:
        if ( day > 0 && day <= 22 ) {
            console.log("Cung Xử Nữ");
        } else if ( day >= 23 && day <= 30 ) {
            console.log("Cung Thiên Bình");
        }
        break;
    case 10:
        if ( day > 0 && day <= 23 ) {
            console.log("Cung Thiên Bình");
        } else if ( day >= 24 && day <= 31 ) {
            console.log("Cung Bọ Cạp");
        }
        break;
    case 11:
        if ( day > 0 && day <= 21 ) {
            console.log("Cung Bọ Cạp");
        } else if ( day >= 22 && day <= 30 ) {
            console.log("Cung Nhân Mã");
        }
        break;
    case 12:
        if ( day > 0 && day <= 21 ) {
            console.log("Cung Nhân Mã");
        } else if ( day >= 22 && day <= 31 ) {
            console.log("Cung Ma Kết");
        }
        break;
    default: console.log("Không hợp lệ.");
        
}