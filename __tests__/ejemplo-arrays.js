const carrito = ['producto1', 'producto2', 'producto3'];

describe('Testing al carrito de compras', () => {
  test('Probar que el array tejga tres elementos', () => {
    expect(carrito).toHaveLength(3);
  });
  test('Verificar que el carrito no este vacío', () => {
    expect(carrito).not.toHaveLength(0);
  });
});
