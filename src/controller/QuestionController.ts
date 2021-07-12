import {getConnection} from "typeorm";
import {Question} from "../entity/Question";
import {Choice} from "../entity/Choice";
import {Test} from "../entity/Test";

export class QuestionController {
    static addQuestion = async (req, res) => {
        const {test_id} = req.query; // json 객체 해체
        const {content, choices} = req.body;

        let choiceList = [];
        for (let content of choices) {
            const choice = new Choice();
            choice.content = content;
            await getConnection().manager.save(choice);
            choiceList.push(choice);
        }

        const q = new Question();
        q.content = content;
        q.choices = choiceList; // 중요
        await getConnection().manager.save(q);

        // test id 인스턴스를 찾는다 -> 찾으면 foreign key
        const test = await getConnection().getRepository(Test).findOne(test_id);
        test.questions = [q];
        await getConnection().manager.save(test);
        res.send(test);
    }
}