import { Actions } from "tide"

class AppActions extends Actions {
  addToCart(newQuantity, newPrice) {
    const currentQuantity = this.get("cartQuantity")
    const currentPrice = this.get("cartPrice")
    this.mutate("cartQuantity", currentQuantity + newQuantity)
    this.mutate("cartPrice", currentPrice + newQuantity * newPrice)
  }
  delete() {
    this.mutate("cartQuantity", 0)
    this.mutate("cartPrice", 0)
  }
  setCurrentProduct(product) {
    this.mutate("product", product)
  }
}

export default AppActions
