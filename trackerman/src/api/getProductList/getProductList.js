import api from "../api"

function getProductList(dispatch, action) {
  api.getProductList()
    .then((products) => dispatch(action(products)))
    .catch((err) => console.log('Ошибка: ', err))
}

export { getProductList }