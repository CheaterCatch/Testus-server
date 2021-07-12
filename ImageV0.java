import {Image} from "../entity/Image";
import {getConnection} from "typeorm";

export class ImageController {
  static uploadImage = async (req, res) => {
    let image: Image = new Image();
    image.data = req.file.buffer;
    image.original_name = req.file.originalname;
    image.mimetype = req.file.mimetype;

    const result = await getConnection().createQueryBuilder()
      .insert()
      .into(Image)
      .values(image)
      .execute();

    console.log(result);
    res.send({id: result.raw.insertId});
  }
}