import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.doctor.create({
    data: {
      name: "Dr. Alice Santos",
      specialty: "Cardiology",
      schedule: [
        { date: "2025-06-01T10:00:00Z", patient: "João da Silva" },
        { date: "2025-06-01T11:00:00Z", patient: "Maria Souza" },
      ],
    },
  });
  console.log("Seed completed ✅");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
