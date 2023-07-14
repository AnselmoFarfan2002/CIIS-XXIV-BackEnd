class ReservationDTO{
    constructor(numvoucher){
        this.num_voucher=numvoucher;
    }

    /**
     * @param {string} _filevoucher
     */
    set filevoucher(_filevoucher){
        this.dir_voucher=_filevoucher;
    }
    /**
     * @param {number} active
     */
    set isActive(active){
        this.active=active;
    }

    /**
     * @param {int} enrollmentStatus
     */
    set statusRegister(enrollmentStatus){
        this.enrollment_status=enrollmentStatus;
    }

    /**
     * @param {int} iduser
     */
    set user(iduser){
        this.user_id=iduser;
    }

    /**
     * @param {int} idevent
     */
    set event(idevent){
        this.event_id=idevent;
    }

    /**
     * @param {int} type_attendee
     */
    set type_attendee(type_attendee){
        this.type_attendee_id=type_attendee;
    }

}

module.exports=ReservationDTO;