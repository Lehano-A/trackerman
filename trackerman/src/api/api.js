class Api {

  constructor() {
    this.baseUrl = 'http://localhost:3001'
  }


  getProductList() {
    return fetch(`${this.baseUrl}/products`)
      .then((res) => { return this._getResponse(res) })
  }


  sendProductUrl(productUrl) {
    return fetch(`${this.baseUrl}/products/sendProductUrl`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ productUrl })
    })
      .then((res) => { return this._getResponse(res) })
  }

  addNewProduct(data) {
    return fetch(`${this.baseUrl}/products/addNew`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ data })
    })
      .then((res) => { return this._getResponse(res) })
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.json())
    }
    return res.json()
  }
}


const api = new Api()

export default api