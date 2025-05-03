const { validarCorreo } = require('../../utils');
  
test('valida correos correctamente', () => {
  expect(validarCorreo('test@correo.com')).toBe(true);
  expect(validarCorreo('correo-malo')).toBe(false);
});
