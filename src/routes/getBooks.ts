import { FastifyInstance, RouteShorthandOptions} from "fastify";
import { prisma } from "../lib/prisma";

export const getBooks = async (app: FastifyInstance) => {
    const opts: RouteShorthandOptions = {
        schema: {
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            abbrev: { type: 'string' },
                            name: { type: 'string' },
                        },
                    },
                },
            },
        },
    };

    app.get('/books', async (req, res) => {
        try {
            const books = await prisma.book.findMany({
                include: {
                    chapters: {
                        include: {
                            verses: true,
                        },
                    },
                }
            });

            res.send(books);
        } catch (err) {
            console.error(`Error getting books: ${err}`);
            res.status(500).json({
                statusCode: 500,
                error: 'Internal Server Error',
                message: 'Error getting books',
            });
        }
    })
}