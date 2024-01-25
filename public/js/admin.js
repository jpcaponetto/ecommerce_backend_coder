const socket = io();
socket.on("getproducts", (list) => {
  const getList = document.getElementById("list");
  getList.innerHTML = "";
  list.docs.forEach((product) => {
    const article = document.createElement("article");
    article.style =
      "display: flex; flex-direction: row; justify-content: space-between";
    article.innerHTML = `${product.title}
    <a href="" > <ins> Edit </ins> </a>  <button onclick="delProd('${product._id}')"> DELETE </button>
    `;
    getList.appendChild(article);
  });
});
const delProd = (id) => {
  fetch(`/api/test/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });
};
