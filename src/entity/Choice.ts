import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./Question";

@Entity()
export class Choice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(type => Question, question => question.choices, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    question: Question;
}