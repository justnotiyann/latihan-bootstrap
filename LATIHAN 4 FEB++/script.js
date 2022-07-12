//====================================
// Untuk Save Dark Mode ketika reload
//====================================

if(localStorage.getItem("theme") == "dark"){
    setDarkMode()
}

//====================================
// Script Dark Mode
//====================================

function setDarkMode(){

    // Constan
    let tulisan = "" // Untuk Memasukkan Value HTML (Dark or Light )
    isDark = document.body.classList.toggle("darkmode")
    let checkBox = document.getElementById("toggle")
    

    if (isDark){
        tulisan = "Dark"
        document.body.setAttribute("id", "darkmode")
        checkBox.setAttribute("checked","")
        localStorage.setItem("theme", "dark")
    } else {
        document.getElementById("tulisan").style.color = "black"
        tulisan = "Light"
        document.body.setAttribute("id", "")
        checkBox.setAttribute("checked","")
        localStorage.removeItem("theme")
    }
    document.getElementById("tulisan").innerHTML = tulisan
}

