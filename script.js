let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function (){
    //     document.write(`${title}, by ${author}, ${pages} pages, ${read}`)
    // }
}
Book.prototype.info = function(){
    document.write(`${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`)

}


document.addEventListener('DOMContentLoaded', () => {
    //makes form visible
    document.querySelector("#newBook").onclick = () => {
        document.querySelector("#newBookForm").removeAttribute("style")    
    }

    document.querySelector("#newBookForm").onsubmit = (event) => {
        event.preventDefault() //prevents the form from reseting the page
        const bookWithAllElements = []
       
        bookWithAllElements.push(document.querySelector("#title").value)
        bookWithAllElements.push(document.querySelector("#author").value)
        bookWithAllElements.push(document.querySelector("#pages").value)
        bookWithAllElements.push(document.querySelector("#readStatus").value)
        
        addBookToLibrary(bookWithAllElements)
        render()
        document.querySelector("#newBookForm").setAttribute("style", "display:none")
    }

})


function addBookToLibrary(bookElements){
    //convert string to array
    // const bookElements = stringArray.split(",")
    const entireBook = new Book (bookElements[0], bookElements[1], bookElements[2], bookElements[3])
    myLibrary.push(entireBook)
}


function render(){
    //clears previous output
    document.querySelector("#listBooks").innerHTML = ""
    let i = 0

    //gets me only the last element
    const book = myLibrary[myLibrary.length -1]
    //create delete button
    const button = document.createElement("button")
    button.setAttribute("class", "deleteButton")
    button.innerHTML = "Delete"
    button.onclick = () => {tableRow.remove()
    myLibrary.splice(i, 1)}

    // ------------- creates table rows
    const tableRow = document.createElement("tr")
    const title = document.createElement("td")
    const author = document.createElement("td")
    const pages = document.createElement("td")
    const readStatus = document.createElement("td")
    const deleteButton = document.createElement("td")

    title.innerHTML = book["title"]
    author.innerHTML = book["author"]
    pages.innerHTML = book["pages"]
    readStatus.innerHTML = book["read"]
    tableRow.appendChild(title)
    tableRow.appendChild(author)
    tableRow.appendChild(pages)
    tableRow.appendChild(readStatus)
    deleteButton.appendChild(button)
    tableRow.appendChild(deleteButton)
    document.querySelector("#booksTable").appendChild(tableRow)
// ----------
    
    i++
 
}



