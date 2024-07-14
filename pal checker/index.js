const text = document.getElementById("input");

function reversestr(str){
    return str.split("").reverse().join("");
}
function pal(){
    const value = text.value;
    const rev = reversestr(value);
    if (value === rev){
        alert("P A L I N D R O M E")
    }
    else{
        alert("NOT P A L I N D R O M E")
    }
    text.value="";
};