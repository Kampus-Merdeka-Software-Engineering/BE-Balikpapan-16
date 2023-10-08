const sequelize = require('../config/dbconfig');
const Form = require('../model/form.model');

exports.getAllFOrm = async (req, res) => {
    try {
        const form = await Form.findAll();
        res.status(200).send({
            message: 'get all artikel success',
            data: form,
        });
    } catch (err) {
        console.log(err);
        res.status(600).json({ message: 'Terjadi kesalahan dalam data artikel.' });
    }
};

exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send({
            message: `get form with id ${req.params.id} success`,
            data: form,
        });
    } catch (err) {
        res.json({ message: err });
    }
};