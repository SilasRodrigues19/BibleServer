import { prisma } from '../src/lib/prisma';

const jsonPaths = [
  '../src/data/aa.json',
  '../src/data/acf.json',
  '../src/data/nvi.json',
];

const seedDatabase = async () => {
  for (const jsonPath of jsonPaths) {
    
    try {
       const data = require(jsonPath);

        console.log(`Reading data from ${jsonPath}:`, data);

        if (!data.chapters || !Array.isArray(data.chapters)) {
          console.error(`Invalid data for JSON path: ${jsonPath}`);
          console.error('Actual data:', data);
          continue;
        }

        const book = await prisma.book.create({
          data: {
            abbrev: data.abbrev,
            name: data.name,
            chapters: {
              create: data.chapters.map((chapter: string[]) => ({
                verses: {
                  create: chapter.map((content: string) => ({ content })),
                },
              })),
            },
          },
        });

        console.log(`Created ${book.name}`);
    } catch (e) {
      console.error(`Error seeding database from ${jsonPath}:`, e);
    }

  }
};

seedDatabase()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
