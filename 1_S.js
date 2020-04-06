// Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
  }
}

class NewsExporter {
  constructor(news) {
    this.news = news
  }

  toHTML() {
    return `
    <div>
      <h3>${this.news.title}</h3>
      <p>${this.news.text}</p>
    </div>
    `
  }
  toJSON() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2)
  }

  toXML() {
    return `
     <news>
      <title>${this.news.title}</title>
      <text>${this.news.text}</text>
     </news>
    `
  }
}

const news = new NewsExporter(new News('UFC', 'Habib vs Tony'))

console.log(news.toHTML())
console.log(news.toJSON())
console.log(news.toXML())