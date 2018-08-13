import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Avaliacao} from './avaliacao.entity';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    senha: string;

    permissions: string[];
}

