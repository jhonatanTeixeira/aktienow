import * as jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Usuario} from "../model/usuario.entity";
import md5 = require("md5");
import {Admin} from "../model/admin.entity";

export const JWT_SECRET = 'seven-secrets-of-the-sphinx';

export async function loginAdminAction (request: Request, response: Response) {
    const data = request.body;

    if (!data.hasOwnProperty("nome") || !data.hasOwnProperty("senha")) {
        return response.status(400).send("nome é obrigatorio");
    }

    const adminRepository = getManager().getRepository(Admin);

    const admin = await adminRepository.findOne({nome: data.nome, senha: md5(data.senha)});

    if (!admin) {
        return response.status(404).send("Usuário inexistente");
    }

    admin.permissions = ['admin'];

    response.send({"token": jwt.sign(JSON.stringify(admin), JWT_SECRET)});
}