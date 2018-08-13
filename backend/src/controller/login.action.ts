import * as jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Usuario} from "../model/usuario.entity";

export const JWT_SECRET = 'seven-secrets-of-the-sphinx';

export async function loginAction (request: Request, response: Response) {
    const data = request.body;

    if (!data.hasOwnProperty("nome")) {
        response.status(400).send("nome é obrigatorio");
    }

    const usuarioRepository = getManager().getRepository(Usuario);

    const usuario = await usuarioRepository.findOne({nome: data.nome});

    if (!usuario) {
        return response.status(404).send("Usuário inexistente");
    }

    usuario.permissions = ['user'];

    response.send({"token": jwt.sign(JSON.stringify(usuario), JWT_SECRET)});
}