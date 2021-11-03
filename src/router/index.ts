import {Router} from "express";
import image from "./image";
import admin from "./admin";
import auth from "./auth";
import {TestController} from "../controller/TestController";
import {ImageController} from "../controller/ImageController";
import {ChoiceController} from "../controller/ChoiceController";
import {QuestionController} from "../controller/QuestionController";
import {AuthMiddleware} from "../middleware/AuthMiddleware";

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

// routes.use('/admin', admin)
routes.use('/admin',  AuthMiddleware.verifyToken, AuthMiddleware.hasRole, admin);
routes.use('/auth', auth);

export default routes;