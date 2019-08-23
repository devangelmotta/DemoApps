
export default class helper{

    static isemailvalid(email){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) == true)
        {
            return true
        }else{
            return false
        }
       
    }
    static isthesameemail(email, email2){
        if(email == email2){
            return true
        }
        else{
            return false
        }
    }
    static isthesamepassword(pass, pass2){
        if(pass == pass2){
            return true
        }
        else{
            return false
        }
    }
}