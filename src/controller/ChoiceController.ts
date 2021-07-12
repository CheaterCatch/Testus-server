import {Choice} from "../entity/Choice";
import {getConnection} from "typeorm";
import {Test} from "../entity/Test";
import {Question} from "../entity/Question";

export class ChoiceController {
    /*static addChoice = async (req, res) => {
        const {test_id, content} = req.body;
        const {content} = req.body;

        const question = await getConnection().getRepository(Question).findOne({id: test_id});

        const choice = new Choice();
        choice.content = content;
        choice.question = question;
        await getConnection().getRepository(Choice).save(choice);

        res.send(choice);
    }*/

    static findAllChoice = async (req, res) => {
        const {question_id} = req.query;

        // const boards = await getConnection().getRepository(Comment).find({ where: { board_id: board_id } });
        const question = await getConnection().getRepository(Test)
            .find({where: {id: question_id}, order: {id: 'DESC'}});

        //res.send(question.choices);
    }

    static findOneChoice = async (req, res) => {
        const {id} = req.query;

        const choice = await getConnection().getRepository(Choice).findOne({id});
        console.log(choice);
        res.send(choice);
    }

    static modifyChoice = async (req, res) => {
        const {id, content} = req.body;

        const result = await getConnection().createQueryBuilder().update(Choice)
            .set({content})
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }

    static removeChoice = async (req, res) => {
        const {id} = req.query;

        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Choice)
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }
}