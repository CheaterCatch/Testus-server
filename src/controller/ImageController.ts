import {getConnection} from "typeorm";

export class ImageController {

    static uploadImage = async (req, res) => {
    }

    static viewImage = async (req, res) => {
        const {id} = req.params;
        const db = getConnection()
            .getRepository(Image)
            .createQueryBuilder('image')
            .where('id = :id', {id})
        const image = await db.getOne();

        /*res.writeHead(200, {
            'Content-Type': image.mimetype,
            'Content-Length': image.data.length
        });

        res.end(image.data);*/
    }
}