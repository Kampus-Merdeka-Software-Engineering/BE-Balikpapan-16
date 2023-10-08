const { createContactService } = require('../services/contact.service');

const createContactController = async (req,res) => {
       const createContact = await createContactService(req.body)
       if (!createContact ) {
            res.status(400).json({
                message : "Gagal mengirim pesan"
            })
        }
       
        res.status(201).json({
            message: "Sukses Mengirim Pesan",
            data : createContact
        })
}

 module.exports = {createContactController}