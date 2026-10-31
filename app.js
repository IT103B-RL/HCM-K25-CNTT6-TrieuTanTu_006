let athletes = [
    {atheteCode: "ATH-001", fullName: "Lâm Văn Hải", sport: "Bóng Đá",age: 21 , jerseyNumber:10},
    {atheteCode: "ATH-002", fullName: "Tạ Minh Thư", sport: "Bóng chuyền",age: 19 , jerseyNumber:7},
    {atheteCode: "ATH-003", fullName: "Đinh Công Phát", sport: "Bóng Đá",age: 24 , jerseyNumber:9},
]

const displayAthelete = (list) =>{
    if (list.length === 0){
        console.log("Danh sách trống")
        return
    }
    for(let i = 0 ; i < list.length; i++){
        console.log(`${i+1}. ${list[i].atheteCode} - ${list[i].fullName} - ${list[i].sport} - ${list[i].age} - ${list[i].jerseyNumber}`)
    }
    let totalAethe = list.length
    console.log(`Tổng số số vận động viên là ${totalAethe}`)
}
const normalizeText = (text) => {
    if (!text){
        return ""
    }
    let trimed = text.trim();

    let words = trimed.split(" ").filter((word) => word !== "")

    let capitalizeWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    return capitalizeWords.join(" ")
}

const inputPositiveIntegerAge = (message) =>{
    while(true){
        let input = prompt(message)

        if (input === null){
            return null
        }
        let trimed = input.trim()

        if (trimed === ""){
            alert("Vui lòng không để trống")
        }
        let number = +trimed
        if (Number.isInteger(number) && number >= 15 && number <= 40){
            return number
        }
        alert("Vui lòng nhập số nguyên từ 15 - 40");
    }
}

const inputPositiveIntegerJersey = (message) =>{
    while(true){
        let input = prompt(message)

        if (input === null){
            return null
        }
        let trimed = input.trim()

        if (trimed === ""){
            alert("Vui lòng không để trống")
        }
        let number = +trimed
        if (Number.isInteger(number) && number >= 1 && number <= 99){
            return number
        }
        alert("Vui lòng nhập số nguyên từ 1 - 99");
    }
}

const validateAthleteCode = (code) =>{
    let cleanCode = code.trim().toUpperCase()
    
    if(cleanCode === ""){
        return("Lỗi chưa nhập mã vận động viên")
    }
    if(cleanCode.length < 6){
        return("Độ dài nhỏ hơn 6 kí tự")
    }
    if(!cleanCode.startsWith("ATH-")){
        return(`Sai tiền tố "ATH-" `)
    }
    if(cleanCode.includes(" ")){
        return(`Chứa khoảng trắng`)
    }
    for (let i = 0 ;i < athletes.length ; i++ ){
        if(athletes[i].atheteCode === cleanCode){
            return("Mã vận động viên đã tồn tại")
        }
    }
    return ""

}

const handleAddAethe = () =>{
    while (true){
        rawCode = prompt("Nhập mã vận động viên: ")
        if(rawCode === null ){
            alert("Đã hủy thao tác")
            return
        }
        if(rawCode === ""){
            alert("Không được để trống")
        }
        cleanCode = validateAthleteCode(rawCode)
        if(cleanCode !== ""){
            console.log(cleanCode)
        }else{
            cleanCode = rawCode.toUpperCase()
        }
        let rawName = prompt("Nhập vào tên vận động viên:")
        let cleanName = normalizeText(rawName)

        let rawSport = prompt("Nhập vào môn thi đấu:")
        let cleanSport = normalizeText(rawSport)

        let cleanAge = inputPositiveIntegerAge("Nhập vào số tuổi")
        let cleanJersey = inputPositiveIntegerJersey("Nhập vào số áo:")
        let newAethe = {atheteCode: cleanCode, fullName: cleanName, sport: cleanSport,age: cleanAge , jerseyNumber:cleanJersey}
        athletes.push(newAethe)
        console.log("Đã thêm thành công!")
        console.log(`${cleanCode} - ${cleanName} - ${cleanSport} - ${cleanAge} - ${cleanJersey}`)
        return
}    
}
const handleUpdateAethe = () =>{
    let input = prompt("Nhập vào mã cần cập nhật:")
    
    if(input === null){
        alert("Đã hủy thao tác")
        return
    }
    if(input === null ){
        alert("Đã hủy thao tác")
            return
        }
    if(input === ""){
        alert("Không được để trống")
        }
    let code = input.trim().toLocaleUpperCase()
    for( let i = 0 ; i < athletes.length ; i++ ){
        if(athletes[i].atheteCode === code){
            let updateAge = inputPositiveIntegerAge("Hãy nhập tuổi mới:")
            if updateAge
        }else{
            alert(`Không tìm thấy ${code}`)
        }
    }
}




const main = () =>{
    let choice = "";
    do {
        choice = prompt(`
==========================================================
    HỆ THỐNG QUẢN LÝ VẬN ĐỘNG VIÊN CLB THỂ THAO VICTORY
==========================================================
1.Hiển thị danh sách vận động viên
2.Thêm vận động viên mới
3.Cập nhật thông tin vận động viên
4.Xóa vận động viên
5.Tìm kiếm vận động viên theo môn đấu
0. Thoát chương trình
==========================================================
Vui lòng nhập lựa chọn của bạn(0-5): 
`)
        switch (choice) {
            case "1":
                displayAthelete(athletes)
                break;
            case "2":
                handleAddAethe()
                break
            case "3":


            case "0":
                alert("Đã thoát")
                break
            default:
                alert("Lựa chọn không hợp lệ")
                break;
        }
        
    }while (choice !== "0");


}
main()
