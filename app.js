
// window.onload = () => {
//     main();
// }

function main(){
    const btn = document.getElementById('btn')
    const root = document.getElementById('root')

    btn.addEventListener('click', function(){
        const bgColor = createRGB()
        root.style.backgroundColor = bgColor;
    })


}
main()
function createRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`

}

// rgb(0,0,0)
// rgb(255,255,255)