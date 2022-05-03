import './main.scss'
import logo from './images/logo.jpg'

const a = 'Hello ITEM'
console.log(b)

const img = new Image()
img.src = logo

document.getElementById('imgBox').appendChild(img)

class Author {
    name = 'ITEM'
    age = 18
    email = 'lxp_work@163.com'
  
    info =  () => {
      return {
        name: this.name,
        age: this.age,
        email: this.email
      }
    }
  }