let height = +prompt ("Nhập chiều cao (m): ");
let weight = +prompt ("Nhập cân nặng (kg): ");
let bmi = weight / (Math.pow(height, 2));

if ( bmi < 18) {
    console.log("Gầy");
} else if ( bmi < 25 ) {
    console.log("Bình thường");
} else if ( bmi < 30 ) {
    console.log("Tiền béo phì");
} else {
    console.log("Đại bự");
} 