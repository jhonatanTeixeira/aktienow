import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Avaliacao} from "../model/avaliacao.entity";

export async function getEstatisticasLivroAction(request: Request, response: Response) {
    const stats = await getRepository(Avaliacao)
        .createQueryBuilder("avaliacao")
        .select("AVG(avaliacao.nota)", "media")
        .addSelect("COUNT(1)", "total")
        .groupBy("avaliacao.livro")
        .where("avaliacao.livro = :livro", {livro: request.params.id})
        .getRawOne()
    ;

    response.send(stats);
}