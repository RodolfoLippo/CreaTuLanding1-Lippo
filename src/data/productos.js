import basico from "../assets/image/basico.webp";
import proteico from "../assets/image/proteico.jpeg";
import deluxe from "../assets/image/deluxe.jpeg";
import camponotus from "../assets/image/camponotus.jpeg";
import lasius from "../assets/image/lasius.jpeg";
import gel from "../assets/image/gel.jpeg";
import bebedero from "../assets/image/bebedero.jpeg";
import tubo from "../assets/image/tubo.jpeg";
import acrilico from "../assets/image/acrilico.webp";
import messor from "../assets/image/messor.jpeg";
import azucar from "../assets/image/azucar.jpeg";
import conector from "../assets/image/conector.webp";
import caja from "../assets/image/Caja.jpeg";

const productos = [
  {
    id: '1',
    nombre: 'Hormiguero Básico',
    precio: 10,
    categoria: 'hormigueros',
    descripcion: 'Ideal para principiantes',
    imagen: basico
  },
  {
    id: '2', 
    nombre: 'Alimento Proteico',
    precio: 5,
    categoria: 'alimento',
    descripcion: 'Rico en proteínas',
    imagen: proteico
  },
  {
    id: '3',
    nombre: 'Hormiguero Deluxe',
    precio: 20,
    categoria: 'hormigueros',
    descripcion: 'Con galerías extras',
    imagen: deluxe
  },
  {
    id: '4',
    nombre: 'Colonia de Camponotus',
    precio: 15,
    categoria: 'colonias',
    descripcion: 'Colonia con reina y obreras',
    imagen: camponotus
  },
  {
    id: '5',
    nombre: 'Colonia de Lasius Niger',
    precio: 12,
    categoria: 'colonias',
    descripcion: 'Colonia ideal para principiantes',
    imagen: lasius
  },
  {
    id: '6',
    nombre: 'Gel Alimenticio',
    precio: 6,
    categoria: 'alimento',
    descripcion: 'Alimento hidratante para hormigas',
    imagen: gel
  },
  {
    id: '7',
    nombre: 'bebedero',
    precio: 7,
    categoria: 'accesorios',
    descripcion: 'Kit para mantener la humedad del hormiguero',
    imagen: bebedero
  },
  {
    id: '8',
    nombre: 'Tubo de Ensayo con Tapa',
    precio: 3,
    categoria: 'accesorios',
    descripcion: 'Ideal para reinas fundadoras',
    imagen: tubo
  },
  {
    id: '9',
    nombre: 'Hormiguero Acrílico',
    precio: 25,
    categoria: 'hormigueros',
    descripcion: 'Diseño moderno y modular',
    imagen: acrilico
  },
  {
    id: '10',
    nombre: 'Mini Colonia de Messor',
    precio: 18,
    categoria: 'colonias',
    descripcion: 'Colonia de Messor barbarus con reina',
    imagen: messor
  },
  {
    id: '11',
    nombre: 'Alimento con Azúcar',
    precio: 4,
    categoria: 'alimento',
    descripcion: 'Fuente energética para tus hormigas',
    imagen: azucar
  },
  {
    id: '12',
    nombre: 'Conector de Hormigueros',
    precio: 5,
    categoria: 'accesorios',
    descripcion: 'Une diferentes módulos de hormigueros',
    imagen: conector
  },
  {
    id: '13',
    nombre: 'Caja de Forrajeo',
    precio: 9,
    categoria: 'accesorios',
    descripcion: 'Área para que tus hormigas exploren y recojan alimento',
    imagen: caja
  }
];

export default productos;