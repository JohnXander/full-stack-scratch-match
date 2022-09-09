const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            { username: "JohnXander", email: "johnxander@gmail.com", password: "password123" },
            { username: "JuanXander", email: "juanxander@gmail.com", password: "contrasena123" },
            { username: "IvanXander", email: "ivanxander@gmail.com", password: "parol123" }
        ]
    })

    await prisma.profile.createMany({
        data: [
            { countriesVisited: 20, friends: 200, userId: 1 },
            { countriesVisited: 10, friends: 300, userId: 2 },
            { countriesVisited: 30, friends: 100, userId: 3 }
        ]
    })

    await prisma.country.createMany({
        data: [
            { name: "Greece", year: 2022, userId: 1 },
            { name: "UAE", year: 2021, userId: 1 },
            { name: "South Korea", year: 2020, userId: 1 },
        ]
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })