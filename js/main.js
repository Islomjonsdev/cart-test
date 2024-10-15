const products = document.querySelectorAll("img");
const cart = document.querySelector("#cart");
const cart_img = document.querySelector("#cart_img");

let selected = null;

console.log(cart);
for (item of products) {
    item.addEventListener("dragstart", (e) => {
        let = selected = e.target;
        
        document.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        
        cart_img.addEventListener("drop", (e) => {
            
            e.preventDefault();
            if (e.target.id === "cart_img") {
                selected.parentNode.removeChild(selected);
                cart.appendChild(selected);
            }
        });
    });
}
