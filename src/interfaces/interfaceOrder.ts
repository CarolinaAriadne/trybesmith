interface Order1 {
  id: number,
  userId: number,
}

interface Order2 extends Order1 {
  productsIds: number[],
}

export { Order1, Order2 };