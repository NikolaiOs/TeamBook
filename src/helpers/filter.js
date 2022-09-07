export function makeBooks() {
    let arr = [];
    const length = 25;


    for (let i = 0; i < length; i++) {
        let item = {
            id: i,
            name: 'Book name' + i,
            author: 'Author name' + (i + 1),
            cover: 'Images/cover.jpeg'
        }
        arr.push(item);
    }
    return arr;
}




export const filter = (array, finder) => {
    return array.filter(item => item.name.includes(finder) || item.author.includes(finder))
}