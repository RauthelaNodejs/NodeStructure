var create = function (req, res, next) {

    var { coachId, name, amount, days, desc, week, sessions } = req.body;
    var data = {
        coachId: coachId || '',
        name: name || '',
      
        amount: amount || '',
        desc: desc || " ",
        sessions : sessions || ""
    };
    var errors = [];

    if (_.isEmpty(data.coachId)) {
        errors.push({ fieldName: "coachId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "coachId") });
    } else if (!appUtils.isValidObjectId(data.coachId)) {
        errors.push({ fieldName: "coachId", message: constant.MESSAGES.INVALID_OBJECT_ID });
    }


    if (name) {
        data.name = name
        if (_.isEmpty(data.name)) {
            errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
        }
    }
   

    if (!amount) {
        errors.push({ fieldName: "amount", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "amount") });
    } else if (!appUtils.isNumber(data.amount)) {
        errors.push({ fieldName: "amount", message: constant.MESSAGES.INVALID_NUMBER });
    }


    if (desc) {
        data.desc = desc
        if (_.isEmpty(data.desc)) {
            errors.push({ fielddesc: "desc", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "desc") });
        }
    }


    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    req.data = { data };
    next();
}



module.exports = {
    create
}