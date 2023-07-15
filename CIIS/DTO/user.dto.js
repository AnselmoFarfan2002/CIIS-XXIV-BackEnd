class UserDTO{
    constructor(name,firstlasname,secondlastname,email,phone,career,studycenter){
        this.name_user=name;
        this.lastname_user=firstlasname+" "+secondlastname;
        this.email_user=email;
        this.phone_user=phone;
        this.university_career_user=career
        this.study_center_user=studycenter;
    }
    /**
     * @param {string} code
     */
    set code(code){
        this.code_user=code;
    }

    /**
     * @param {string} role
     */
    set role(role){
        this.role_id=role;
    }

    get view(){
        return {
            name:this.name_user,
            lastname:this.lastname_user,
            email:this.email_user,
            phone:this.phone_user
        }
    }
}

module.exports=UserDTO;