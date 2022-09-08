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
            {
                name: "Bulgaria",
                year: 2012,
                x: 346,
                y: 209,
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png",
                userId: 3
            },
            {
                name: "Cambodia",
                year: 2012,
                x: 528,
                y: 288,
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png",
                userId: 2
            },
            {
                name: "Croatia",
                year: 2012,
                x: 325,
                y: 203,
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png",
                userId: 1
            }
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