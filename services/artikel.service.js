const { prisma } = require('../config/prisma');

async function getAllArticle() {
    try {
      const books = await prisma.artikel.findMany();
  
      return books;
    } catch (error) {
      console.error(error);
  
      throw new Error()
    }
  }

  module.exports = {
    getAllArticle
  }