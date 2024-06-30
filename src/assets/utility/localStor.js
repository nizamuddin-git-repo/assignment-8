

const getStorBook = () => {
    const storBook = localStorage.getItem('book-read')
    if(storBook){
        return JSON.parse(storBook);
    }
    return [];
}

const saveBook = (id) =>{
    const storBook = getStorBook();
    const exists = storBook.find(bookId => bookId ===id);
    if(!exists){
        storBook.push(id);
        localStorage.setItem('book-read', JSON.stringify(storBook))
    }

}

export {saveBook, getStorBook}