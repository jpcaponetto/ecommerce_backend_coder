import { Router } from "express";
import NodeMailerServices from "../../services/nodemailer.services.js";

const nodeMailerRouter = Router();

nodeMailerRouter.get("/send", async (req, res, next) => {
  const instancia = NodeMailerServices.getInstance();
  const out = await instancia.enviarCorreo(
    "caponettojuanpablo@gmail.com",
    "test",
    `<html>
  <div class="container">
      <h1>
          Tu token es: 
      </h1>
  </div>
</html>`,
    []
  );
  res.json(out);
});
export default nodeMailerRouter;
