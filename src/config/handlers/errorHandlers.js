import dirErrors from "../../utils/dirErrors.js";

export const errorHandlers = (error, req, res, next) => {
  switch (error.code) {
    case dirErrors.userError:
      res.status(400).json({ error: error.message, cause: error.cause });
      break;
    case dirErrors.requieredFieldsError:
      res.status(400).json({ error: error.message, cause: error.cause });
      break;

    case dirErrors.outError:
      res.status(401).json({ error: error.message, cause: error.cause });
      break;

    case dirErrors.dataBaseError:
      res.status(500).json({ error: error.message, cause: error.cause });
      break;

    case dirErrors.routingError:
      res.status(404).json({ error: error.message, cause: error.cause });
      break;

    case dirErrors.badRequestError:
      res.status(400).json({ error: error.message, cause: error.cause });
      break;

    case dirErrors.internalServerError:
      res.status(500).json({ error: error.message, cause: error.cause });
      break;

    default:
      res.status(500).json({ error: error.message, cause: error.cause });
      break;
  }
};
