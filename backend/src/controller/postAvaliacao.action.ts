import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Avaliacao} from "../model/avaliacao.entity";

export async function postAvaliacaoAction(request: Request, response: Response) {
    const repository = getManager().getRepository(Avaliacao);

    const avaliacao = repository.create(request.body);
    avaliacao.usuario = request.user;

    await repository.save(avaliacao);

    response.send(avaliacao);
}