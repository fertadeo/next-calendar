import React, { useState, useEffect, Component } from 'react';
import Botonera from './Botonera';
// import axios from 'axios';
const articulos = [
  {
    nombre: "ADOLESCENCIA: UNA MIRADA SOCIAL EN LA EDAD VULNERABLE",
    enlace: "https://drive.google.com/file/d/1zOiMmLFsldUtVSo_Nax6O6RGvOxc0XTl/view?usp=drive_link",
    categoria: "ADOLESCENCIA"
  },
  {
    nombre: "CARACTERISTICAS PSICOLÓGICAS DEL DESARROLLO EN LA ADOLESCENCIA",
    enlace: "https://drive.google.com/file/d/1jJm1xh4LYd3oqDlpzRazdhXSwSLtkHfx/view?usp=drive_link",
    categoria: "ADOLESCENCIA"
  },
  {
    nombre: "DEPRESIONES EN LA ADOLESCENCIA",
    enlace: "https://drive.google.com/file/d/1e5y4BFSxPdUMLOVJFXMsyL9G_azbVIc9/view?usp=drive_link",
    categoria: "ADOLESCENCIA"
  },
  {
    nombre: "ALERGIA AL POLVO",
    enlace: "https://www.example.com",
    categoria: "ALERGIA"
  },
  {
    nombre: "ALERGIA ALIMENTARIA",
    enlace: "https://www.example.com",
    categoria: "ALERGIA"
  },
  {
    nombre: "ALERGIA AL POLLEN",
    enlace: "https://www.example.com",
    categoria: "ALERGIA"
  }
];

const GuiasClinicas = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [articulosFiltrados, setArticulosFiltrados] = useState(articulos);

  // const categorias = ['ADOLESCENCIA', 'ALERGIA'];
  
  

  const handleBusquedaChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);
  };

  

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar artículo"
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      <button className='btn btn-primary'>Buscar</button>
      <table className="table">
        {categorias.map((categoria, index) => (
          <React.Fragment key={index}>
            <thead>
              <tr>
                <th scope="col-6">
                  <h4>{categoria}</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {articulosFiltrados.map((articulo, index) => (
                articulo.categoria === categoria && (
                  <tr key={index}>
                    <td>
                      <i className="ri-book-2-fill"></i>{' '}
                      <a
                        className="link-dark"
                        rel="noopener noreferrer"
                        href={articulo.enlace}
                        target="_blank"
                      >
                        {articulo.nombre}
                      </a>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </React.Fragment>
        ))}
      </table>
      {
      busqueda === '' && <Botonera />
      }
     
    </>
  );
};

export default GuiasClinicas;
