import { disableLoadingIndicator } from "../../redux/slices/mainBlockSlice"
import { setOfflineConnectionStatus, setOnlineConnectionStatus } from "../../redux/slices/serverSlice"
import api from "../api"

function getProductList(dispatch, action) {
  api.getProductList()
    .then((products) => {
      dispatch(action(products))
      dispatch(setOnlineConnectionStatus())
    })
    .catch((err) => {
      dispatch(setOfflineConnectionStatus())
      console.log('Ошибка: ', err)
    })
    .finally(() => dispatch(disableLoadingIndicator()))
}

export { getProductList }