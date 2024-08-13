class Api {

  constructor() {
    this.baseUrl = 'http://localhost:3001'
  }


  getProducts() {
    return fetch(`${this.baseUrl}/products`)
      .then((res) => { return this._getResponse(res) })
  }


  addProduct(url) {
    return fetch(`${this.baseUrl}/products/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ url: url })
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