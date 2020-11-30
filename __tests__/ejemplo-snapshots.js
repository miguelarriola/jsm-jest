const cliente = {
  nombre: 'Juan Pol',
  balance: 500,
};

describe('Testing al cliente', () => {
  test('El es Juan Pablo', () => {
    expect(cliente).toMatchSnapshot();
  });
});

/* Actualizar snapdhot npm t -- -u */
