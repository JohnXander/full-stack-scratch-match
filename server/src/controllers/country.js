const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const createCountry = async (req, res) => {
    const { name, year, userId } = req.body
    try {
        const createdCountry = await prisma.country.create({ data: { name, year, userId } })
        res.status(201).json({ country: createdCountry });

    } catch (error) {
        res.status(404).json({ error })
    }
};

const getCountriesByUser = async (req, res) => {
    try {
        const listOfCountries = await prisma.country.findMany({ where: { userId: +req.params.id } })
        res.status(201).json({ countries: listOfCountries });
    } catch (error) {
        res.status(404).json({ error })
    }
}

module.exports = {
    createCountry,
    getCountriesByUser
}