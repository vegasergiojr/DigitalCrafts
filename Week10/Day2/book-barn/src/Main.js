import { Component } from "react";
import './Main.css'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            books: []
        }
    }      

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        .then(response => response.json())
        .then(result => {
            this.setState({
                books: result
            })
        })
    }

    render(){
        const bookItems = this.state.books.map(book => {
            return <div id="card">
                    <h3>Title: {book.title}</h3>
                    <img src={book.imageLink} />
                    <h4>Author: {book.author}</h4>
                    <p>
                        Pages: {book.pages}, 
                        Language: {book.language},
                        Year: {book.year},
                        Country: {book.country}
                    </p>
                    <a href={book.link}>{book.link}</a>
                </div>
            
        })

        return(
            <div id="mainContainer">
                <div>{bookItems}</div>
            </div>
        )
    }
}
export default Main