const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const createUser = async (req, res) => {
    try {
        const { username, email, password, countriesVisited, friends } = req.body

        const createdUser = await prisma.user.create({
            data: {
                username, email, password,
                profile: { create: { countriesVisited, friends } }
            },
            include: { profile: true }
        })

        res.status(201).json({ user: createdUser })

    } catch (error) {
        res.status(404).json({ error })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await prisma.user.delete({ where: { id: +req.params.id } })

        res.status(201).json({ user: deletedUser })

    } catch (error) {
        res.status(404).json({ error })
    }
}

module.exports = {
    createUser,
    deleteUser
}