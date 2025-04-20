import productos from '../data/productos';

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 1000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.find((p) => p.id === id)), 1000);
  });
};

export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.filter((p) => p.categoria === categoriaId)), 1000);
  });
};