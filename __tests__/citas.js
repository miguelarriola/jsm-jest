import Citas from '../js/classes/Citas';

describe('Probar laclase de citas', () => {
  const citas = new Citas();
  const id = Date.now();

  test('Agregar una nueva cita', () => {
    const citaObj = {
      id,
      mascota: 'Hook',
      propietario: 'Juan',
      telefono: '546353323',
      fecha: '10-12-2020',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };
    citas.agregarCita(citaObj);
    expect(citas).toMatchSnapshot();
  });

  test('Actualizar cita', () => {
    const citaActualizada = {
      id,
      mascota: 'Nuevo Nombre',
      propietario: 'Juan',
      telefono: '546353323',
      fecha: '10-12-2020',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };
    citas.agregarCita(citaActualizada);
    expect(citas).toMatchSnapshot();
  });

  test('Eliminar cita', () => {
    citas.eliminarCita(id);
    expect(citas).toMatchSnapshot();
  });
});
