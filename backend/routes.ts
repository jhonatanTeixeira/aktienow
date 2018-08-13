import {getLivrosAction} from "./src/controller/getLivros.action";
import {postLivrosAction} from "./src/controller/postLivros.action";
import {loginAction} from "./src/controller/login.action";
import {postUsuarioAction} from "./src/controller/postUsuario.action";
import {postAvaliacaoAction} from "./src/controller/postAvaliacao.action";
import {getAvaliacoesAction} from "./src/controller/getAvaliacoes.action";
import {getEstatisticasLivroAction} from "./src/controller/getEstatisticasLivroAction";
import {loginAdminAction} from "./src/controller/loginAdmin.action";

export const routes = [
    {
        path: "/livros",
        method: "get",
        guard: [['user'], ['admin']],
        action: getLivrosAction
    },
    {
        path: "/livros",
        method: "post",
        guard: 'admin',
        action: postLivrosAction
    },
    {
        path: "/livros/:id/estatisticas",
        method: "get",
        guard: 'admin',
        action: getEstatisticasLivroAction
    },
    {
        path: "/usuarios",
        method: "post",
        guard: 'admin',
        action: postUsuarioAction
    },
    {
        path: "/login",
        method: "post",
        action: loginAction
    },
    {
        path: "/admin/login",
        method: "post",
        action: loginAdminAction
    },
    {
        path: "/avaliacoes",
        method: "get",
        guard: 'admin',
        action: getAvaliacoesAction
    },
    {
        path: "/avaliacoes",
        method: "post",
        guard: ['user'],
        action: postAvaliacaoAction
    },
];
