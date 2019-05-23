/*@flow*/

// 在这里是不会有flow报错的,因为+可以看为连接符
function add(x, y) {
    return x + y
}
add('hello', 11)

function addFlow(x: number, y: number): number {
    return x + y
}
// 这个会报错
addFlow('hello', 12)

// 这个不会报错
addFlow(11, 12)

// 更多去flow官网了解
