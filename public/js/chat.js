const socket = io();

socket.on("test", (list) => {
  const element = document.getElementById("chat");
  element.innerHTML = "";
  list.forEach((m) => {
    const article = document.createElement("article");
    if (m.user == socket.id) {
      article.innerHTML = `<p><strong><ins> ${m.user} ==> </ins></strong>
      ${m.message} </p>`;
    } else {
      article.innerHTML = `<p>
      <strong> ${m.message} <ins> <== ${m.user} </ins> </strong> </p>`;
    }
    element.appendChild(article);
  });
});

const sendmessage = (firstName) => {
  const input = document.getElementById("inputmessage");
  const message = {
    user: firstName,
    message: input.value,
  };
  socket.emit("sendmessage", message);
};
