import {getManager} from "typeorm";
import {Request, Response} from "express";
import {Avaliacao} from "../model/avaliacao.entity";
import {ordenate, paginate} from "../service/list.helper";

export async function getAvaliacoesAction(request: Request, response: Response) {
    const page = request.query.page || 1;
    const limit = request.query.limit || 30;
    const order = request.query.order || [];

    const avaliacoesRepository = getManager().getRepository(Avaliacao);

    const query = avaliacoesRepository
        .createQueryBuilder("avaliacao")
        .innerJoinAndSelect("avaliacao.livro", "livro")
        .innerJoinAndSelect("avaliacao.usuario", "usuario")
    ;

    const total = await query.getCount();

    ordenate(query, order);
    response.send({"total": total, "avaliacoes": await paginate(query, page, limit)});
}
