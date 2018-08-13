import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Avaliacao} from "./avaliacao.entity";

@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(type => Avaliacao, avaliacao => avaliacao.livro)
    avaliacoes: Avaliacao[];
}
