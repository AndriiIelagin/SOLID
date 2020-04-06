// Dependency Inversion Principle

// Зависимость от абстракций и не реализаций

// fetch wrapper
class Fetch {
  request(url) {
    // return fetch(url).then(d => d.json())
    return Promise.resolve('data from fetch')
  }
}

// Local Storage wrapper
class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet(key) {
    return this.fetch.request(key)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('BlaBla'))