import {Router} from "express";
import {ImageController} from "../controller/ImageController";

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })

const routes = Router();
routes.post('/upload', upload.single('file'), ImageController.uploadImage);

export default routes;