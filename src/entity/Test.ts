import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Question} from "./Question";
import {Choice} from "./Choice";

@Entity()
export class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    title: string;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToMany(type => Question, question => question.test)
    questions: Question[];
}