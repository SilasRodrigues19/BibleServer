import { prisma } from '../src/lib/prisma';

interface Verse {
    content: string;
}

interface Chapter {
    verses: Verse[];
}

interface BookData {
    abbrev: string;
    chapters: Chapter[];
    name: string;
}

const jsonPaths = [
    '../src/data/aa.json',
    '../src/data/acf.json',
    '../src/data/nvi.json',
];

const seedDatabase = async () => {
    for (const jsonPath of jsonPaths) {
        try {
            const data: BookData[] = require(jsonPath);

            console.log(`Reading data from ${jsonPath}:`, data);

            if (!Array.isArray(data) || data.length === 0) {
                console.error(`Invalid data for JSON path: ${jsonPath}`);
                console.error('Actual data:', data);
                continue;
            }

            for (const bookData of data) {
                const { abbrev, chapters, name } = bookData;

                if (!abbrev || !chapters || !Array.isArray(chapters) || !name) {
                    console.error(`Invalid data for JSON path: ${jsonPath}`);
                    console.error('Actual data:', bookData);
                    continue;
                }

                console.log(`Processing book:`, name);

                const book = await prisma.book.create({
                    data: {
                        abbrev,
                        name,
                        chapters: {
                            create: chapters.map((chapter, index) => {
                                if (!chapter || !chapter.verses || !Array.isArray(chapter.verses)) {
                                    console.error(`Invalid chapter data in book '${name}' at index ${index}`);
                                    console.error('Chapter data:', chapter);
                                    return {};
                                }

                                return {
                                    verses: {
                                        create: chapter.verses.map((verse) => ({ content: verse.content })),
                                    },
                                };
                            }),
                        },
                    },
                });

                console.log(`Created ${book.name}`);
            }
        } catch (e) {
            console.error(`Error seeding database from ${jsonPath}:`, e);
        }
    }

    const res = await prisma.book.findMany();
    console.dir(res, { depth: Infinity });
}

seedDatabase()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
