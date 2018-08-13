import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Avaliacao} from './avaliacao.entity';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(type => Avaliacao, avaliacao => avaliacao.usuario)
    avaliacoes: Avaliacao[];

    permissions: string[];
}

