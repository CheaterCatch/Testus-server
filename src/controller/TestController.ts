import {Test} from "../entity/Test";
import {getConnection} from "typeorm";

export class TestController {
    static addTest = async (req, res) => {
        const {title, content} = req.body;

        const test = new Test();
        test.title = title;
        test.content = content;
        const result = await getConnection().getRepository(Test).save(test);

        res.send(result);
    }

    static findAllTest = async (req, res) => {
        const {page_number, page_size} = req.query;

        const options = {};
        options['select'] = ["id", "title", "content", "created", "updated"];
        options['order'] = {id: 'DESC'};

        if (page_number && page_size) {
            options['skip'] = (page_number - 1) * page_size;
            options['take'] = page_size;
        }

        const tests = await getConnection().getRepository(Test).find(options);
        res.send(tests);
    }

    static findOneTest = async (req, res) => {
        const {id} = req.params;

        const test = await getConnection().getRepository(Test).findOne({id});
        res.send(test);
    }

    static countTest = async (req, res) => {
        const total = await getConnection().getRepository(Test).count();
        res.send({total});
    }

    static modifyTest = async (req, res) => {
        const {id, title, content} = req.body;

        const updateOption = {};
        if (title) {
            updateOption['title'] = title;
        }
        if (content) {
            updateOption['content'] = content;
        }

        const result = await getConnection().createQueryBuilder().update(Test)
            .set(updateOption)
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }

    static removeTest = async (req, res) => {
        const {id} = req.query;

        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Test)
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }
}