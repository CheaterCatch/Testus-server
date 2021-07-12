import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Test} from "./Test";
import {Choice} from "./Choice";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @ManyToOne(type => Test, test => test.questions, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    test: Test;

    @OneToMany(type => Choice, choice => choice.question)
    choices: Choice[];
}