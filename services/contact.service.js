const { prisma } = require('../config/prisma');

const createContactService = async (body) => {
    const {names, mail, subjek, pesan} = body;
    console.log(body);

    const createContact = await prisma.contact.create({
        data : {
            names,
            mail,
            subjek,
            pesan 
        }
    })


    return createContact;
}

module.exports = {createContactService}