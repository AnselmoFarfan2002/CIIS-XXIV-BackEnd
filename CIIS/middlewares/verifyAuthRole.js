const isAdministrador = (req, res, next) => {
    if (!req.role) {
        res.status(403).send({msg: "El usuario no tiene rol."})
        return;
    }
    if (req.role !== 1) {
        res.status(403).send({msg: "El usuario no tiene autorización"})
        return;
    }

    next();
};

const isAsistente = (req, res, next) => {
    if (!req.role) {
        res.status(403).send({msg: "El usuario no tiene rol."})
        return;
    }
    if (req.role !== 2) {
        res.status(403).send({msg: "El usuario no tiene autorización"})
        return;
    }

    next();
};

const isOrganizador = (req, res, next) => {
    if (!req.role) {
        res.status(403).send({msg: "El usuario no tiene rol."})
        return;
    }
    if (req.role !== 3) {
        res.status(403).send({msg:"El usuario no tiene autorización"})
        return;
    }

    next();
};

module.exports = {
    isAdministrador,
    isAsistente,
    isOrganizador
}