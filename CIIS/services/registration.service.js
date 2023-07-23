const { Op, Sequelize } = require("sequelize");
const Reservation = require("../models/Reservation");
const Events = require("../models/Events");
const Users = require("../models/Users");

const getRegistrations = async (query) => {
  if (!Object.keys(query).length) {
    const registrations = await Reservation.findAll({
      include: [
        {
          model: Users,
          attributes: ['id_user', 'name_user', 'lastname_user', 'email_user', 'dni_user', 'phone_user']
        }
      ]
    });

    const registrationsMap = registrations.map((registration) => {
      return {
        id: registration.id_reservation,
        typeattendee: registration.type_attendee_id,
        enrollmentstatus: registration.enrollment_status,
        numvoucher: registration.num_voucher,
        name: registration.user.name_user,
        lastname: registration.user.lastname_user,
        email: registration.user.email_user,
        dni: registration.user.dni_user,
        phone: registration.user.phone_user
      };
    });

    return registrationsMap;
  }

  const { page = 1, limit = 8, search = "", year = "", event = "" } = query;

  const whereUsers = {};
  const whereEvents = {};
  
  if (search) {
    whereUsers[Op.or] = [
      { name_user: { [Op.like]: `%${search}%` } }, 
      { lastname_user: { [Op.like]: `%${search}%` } }
    ];
  }

  if (year && event) {
    whereEvents[Op.and] = [
      Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('start_date')), year), 
      { type_event_id: { [Op.eq]: event } }
    ];
  } else if (year) {
    whereEvents[Op.and] = [
      Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('start_date')), year), 
    ];
  } else if (event) {
    whereEvents[Op.and] = [
      { type_event_id: { [Op.eq]: event } }
    ];
  }

  const offset = (page - 1) * limit;

  const { count, rows } = await Reservation.findAndCountAll({
    include: [
      {
        model: Events,
        where: whereEvents,
      },
      {
        model: Users,
        attributes: ['id_user', 'name_user', 'lastname_user', 'email_user', 'dni_user', 'phone_user'],
        where: whereUsers,
      }
    ],
    offset: parseInt(offset),
    limit: parseInt(limit),
  });

  const totalPages = Math.ceil(count / limit);

  const rowsMap = rows.map((registration) => {
    return {
      id: registration.id_reservation,
      typeattendee: registration.type_attendee_id,
      enrollmentstatus: registration.enrollment_status,
      numvoucher: registration.num_voucher,
      name: registration.user.name_user,
      lastname: registration.user.lastname_user,
      email: registration.user.email_user,
      dni: registration.user.dni_user,
      phone: registration.user.phone_user
    };
  });

  return {
    registrations: rowsMap,
    totalPages,
    currentPage: page,
  };
};

const changeStatusRegistration = async (id, status) => {
  const registration = await Reservation.findByPk(id);

  if (!registration) {
    return 1;
  } else {
    await Reservation.update({ enrollment_status: status }, {
      where: {
        id_reservation: id
      }
    });

    return 0;
  }
};

module.exports = {
  getRegistrations,
  changeStatusRegistration
};