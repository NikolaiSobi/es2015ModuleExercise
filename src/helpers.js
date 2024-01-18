function choice(items) {
    let randomItem = Math.floor(Math.random() * items.length)
    return items[randomItem]
}

function remove(items, item) {
    for(let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            items.splice(i, 1)
        }
    }
    return items
}




export { choice, remove }