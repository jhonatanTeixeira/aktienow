import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Livro} from "./livro.entity";
import {Usuario} from "./usuario.entity";
import {text} from "body-parser";

@Entity()
export class Avaliacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nota: number;

    @Column()
    estadoConservacao: string;

    @Column()
    observacao: string;

    @ManyToOne(type => Livro, livro => livro.avaliacoes)
    livro: Livro;

    @ManyToOne(type => Usuario, usuario => usuario.avaliacoes)
    usuario: Usuario;
}
