import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Usuario} from "../model/usuario.entity";

export async function postUsuarioAction(request: Request, response: Response) {
    const usuarioRepository = getManager().getRepository(Usuario);

    const usuario = usuarioRepository.create(request.body);

    await usuarioRepository.save(usuario);

    response.send(usuario);
}