import {Router} from "express";
import {TestController} from "../controller/TestController";
import image from "./image";
import {ImageController} from "../controller/ImageController";
import {ChoiceController} from "../controller/ChoiceController";
import {QuestionController} from "../controller/QuestionController";

const routes = Router();

routes.post('/test', TestController.addTest);

routes.get('/tests', TestController.findAllTest);
routes.get('/test/count', TestController.countTest);
routes.get('/test/:id', TestController.findOneTest);

routes.put('/test', TestController.modifyTest);
routes.delete('/test', TestController.removeTest);

routes.use('/image', image);
routes.get('/view/:id', ImageController.viewImage);

routes.get('/choice', ChoiceController.findAllChoice);
routes.get('/choice', ChoiceController.findOneChoice);
routes.put('/choice', ChoiceController.modifyChoice);
routes.delete('/choice', ChoiceController.removeChoice);

routes.post('/question', QuestionController.addQuestion);

export default routes;