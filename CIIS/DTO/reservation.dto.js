class ReservationDTO{
    constructor(numvoucher,filevoucher,statusRegister,user,event,typeattendee,active){
        this.num_voucher=numvoucher;
        this.dir_voucher=filevoucher;
        this.active=active;
        this.enrollment_status=statusRegister;
        this.user_id=user;
        this.event_id=event;
        this.type_attendee_id=typeattendee;
    }

    // /**
    //  * @param {number} active
    //  */
    // set isActive(active){
    //     this.active=active;
    // }

    // /**
    //  * @param {int} enrollmentStatus
    //  */
    // set statusRegister(enrollmentStatus){
    //     this.enrollment_status=enrollmentStatus;
    // }

    // /**
    //  * @param {int} iduser
    //  */
    // set user(iduser){
    //     this.user_id=iduser;
    // }

    // /**
    //  * @param {int} idevent
    //  */
    // set event(idevent){
    //     this.event_id=idevent;
    // }

    // /**
    //  * @param {int} type_attendee
    //  */
    // set type_attendee(type_attendee){
    //     this.type_attendee_id=type_attendee;
    // }

}

module.exports=ReservationDTO;