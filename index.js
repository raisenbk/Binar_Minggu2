// var n = Math.random()
// console.log(n)

// var n = Math.random()
// n = n * 6
// n = Math.floor(n)
// console.log(n)

// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1 // + 1 untuk menghindari muncul angka 0
// console.log(n)


// ** Latihan **
var studentName = prompt('Siapa nama mu ?')
var studentWish = prompt("Masuk universitas gak ?")

if(studentWish === "mau"){
    var nilai = prompt("Berapakah Nilai Akhir SMA/SMK mu?")
    var chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv)
    // chanceGetUniv = 80 // Tes chanceGetUniv > 50
    // chanceGetUniv = 40 // Tes chanceGetUniv < 50
    
    if(nilai < 30){
        alert("Tidak mungkin masuk univ")
    } else if(nilai < 50){
        if(chanceGetUniv < 50){
            alert(`chance kamu adalah ${chanceGetUniv} kemungkinan kamu ${studentName} kecil masuk univ`)
        } else if(chanceGetUniv > 50){
            alert(`chance kamu adalah ${chanceGetUniv} kemungkinan kamu ${studentName} bisa masuk univ`)
        }
    } else if(chanceGetUniv > 70 && nilai > 60){
        alert(`Hei ${studentName}, pasti kamu masuk dengan ${nilai} yang sebesar itu`)
    } else if(chanceGetUniv > 70 || nilai > 80){
        alert(`hei ${studentName} pasti kamu masuk dengan ${nilai} yang sebesar itu`)
    } else {
        alert(`Gada yg cocok`)
    }
} else {
    alert("Okedeh goodluck !");
}