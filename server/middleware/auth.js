import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const isCustomAuth = token.length > 100;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);

      req.userId = decodedData.id;
    } else {
      req.userId = token;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

//107331808882959634572
