const { prisma } = require('../config/prisma');

async function getAllArticle() {
    try {
      const Artikel = await prisma.artikel.findMany();
      return Artikel;

    } catch (error) {
      console.error(error);
      throw new Error()
    }
  }

  module.exports = {
    getAllArticle
  }