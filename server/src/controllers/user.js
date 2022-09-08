const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const registerUser = async (req, res) => {
    const { username, email, password, countriesVisited, friends } = req.body

    try {
        const hashedPwd = await bcrypt.hash(password, 10)

        const createdUser = await prisma.user.create({
            data: {
                username, email, password: hashedPwd,
                profile: { create: { countriesVisited, friends } }
            },
            include: { profile: true }
        })

        res.status(201).json({ user: createdUser });

    } catch (error) {
        res.status(404).json({ error })
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const foundUser = await prisma.user.findUnique({ where: { username } })
        if (!foundUser) throw 'Invalid username or password.'

        const passwordsMatch = await bcrypt.compare(password, foundUser.password)
        if (!passwordsMatch) throw 'Invalid username or password.'

        const token = jwt.sign({ username }, process.env.JWT_SECRET)
        res.status(201).json({ token })

    } catch (error) {
        res.status(404).json({ error })
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await prisma.user.delete({ where: { id: +req.params.id } })

        res.status(201).json({ user: deletedUser })

    } catch (error) {
        res.status(404).json({ error })
    }
}

module.exports = {
    registerUser,
    loginUser,
    deleteUser
}