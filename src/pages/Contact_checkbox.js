export function Checkboxbutton(){
    var chk1=document.Contact.agree.checked;
    if(!chk1){
        alert('개인정보 동의해주세요.');
        return false;
    }
}