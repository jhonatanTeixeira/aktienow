import {getManager} from "typeorm";
import {Livro} from "../model/livro.entity";
import {Request, Response} from "express";

export async function postLivrosAction (request: Request, response: Response) {
    const livroRepository = getManager().getRepository(Livro);

    const livro = livroRepository.create(request.body);

    await livroRepository.save(livro);

    response.send(livro);
}