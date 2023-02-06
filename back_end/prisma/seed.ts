import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    try {
        const user = await prisma.clients.upsert({
            where: {email: "paulo@mail.com"},
            update: {},
            create: {
                fullName: "Paulo Roberto",
                    email: "paulo@mail.com",
                    phone: "31991952602",
            }
        })

        const user2 = await prisma.clients.upsert({
            where: {email: "joao@mail.com"},
            update: {},
            create: {
                fullName: "Joao da Silva",
                    email: "joao@mail.com",
                    phone: "31991952602",
            }
        })
        const user3 = await prisma.clients.upsert({
            where: {email: "gabriel@mail.com"},
            update: {},
            create: {
                fullName: "Gabriel da Silva",
                    email: "gabriel@mail.com",
                    phone: "31991952602",
            }
        })
        const user4 = await prisma.clients.upsert({
            where: {email: "joana@mail.com"},
            update: {},
            create: {
                fullName: "Joana da Silva",
                    email: "joana@mail.com",
                    phone: "31991952602",
            }
        })
        const user5 = await prisma.clients.upsert({
            where: {email: "guilherme@mail.com"},
            update: {},
            create: {
                fullName: "Guilherme da Silva",
                    email: "guilherme@mail.com",
                    phone: "31991952602",
            }
        })
    
        console.dir(user, {depth: null})
        console.dir(user2, {depth: null})
        console.dir(user3, {depth: null})
        console.dir(user4, {depth: null})
        console.dir(user5, {depth: null})
    } catch (error) {
        console.log(error)
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
})
    .finally(async () => {
        await prisma.$disconnect()
})