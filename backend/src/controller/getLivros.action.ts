import {getManager} from "typeorm";
import {Livro} from "../model/livro.entity";
import {Request, Response} from "express";

export async function getLivrosAction(request: Request, response: Response) {
    const page = request.query.page;
    const limit = request.query.limit;
    const order = request.query.order || [];

    const livrosRepository = getManager().getRepository(Livro);

    response.send({
        total: await livrosRepository.count(),
        results: await livrosRepository.find({
            skip: (page >= 1 && limit >= 1) ? (page * limit) - limit : 0,
            take: (limit >= 1) ? limit : null
        })
    });
}
