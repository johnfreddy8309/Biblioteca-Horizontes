// Importamos las herramientas necesarias para realizar las pruebas
import { render, screen } from '@testing-library/react'; // Render para renderizar componentes y screen para buscar elementos
import App from './App'; // Importamos el componente principal de la aplicacion que vamos a probar

// Definimos un caso de prueba
test('renders learn react link', () => {

  // Renderizamos el componente APP dentro de un entorno de prueba
  render(<App />);

  // Buscamos un elemento en la pagina que contega el texto "learn react" (insensible a mayúsculas/minúsculas)
  const linkElement = screen.getByText(/learn react/i);

  // verificamos que el elemento encontrado realmente esta en el documento
  expect(linkElement).toBeInTheDocument();
});
