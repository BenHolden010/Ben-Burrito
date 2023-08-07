const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

function postOrder(newOrder) {


    return fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    body: JSON.stringify({name: newOrder.name, ingredients: newOrder.ingredients}),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(res=>res.json())
    .then(data => console.log(data))


}

export { getOrders, postOrder}