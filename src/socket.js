import { Server } from "socket.io";
import messageDao from "./dao/message.dao.js";
import productServices from "./services/product.services.js";

let io;

export const serverSocket = (server) => {
  io = new Server(server);

  io.on("connection", async (socketClient) => {
    const list = await messageDao.getAll();
    io.emit("test", list);
    socketClient.on("sendmessage", async (msg) => {
      await messageDao.test(msg);
      const list = await messageDao.getAll();
      io.emit("test", list);
    });
    const product = await productServices.getAll();
    io.emit("getproducts", product);
  });
};
