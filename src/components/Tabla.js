import { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ExcelJS from 'exceljs';
import array from '../../data.js'



export default function Tabla() {

  // GENERAR PDF PARA DESCARGAR
  const pdfRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF(
      { orientation: 'landscape' }
    );

    const tableData = array.map((elem) => [
      elem.id,
      elem.receta,
      elem.nro,
      elem.MP,
      elem.medico,
      elem.atencion,
      elem.diagnostico,
      elem.dni,
      elem.apellido,
      elem.nombre,
      elem.telefono,
      elem.cant,
      elem.Medic,
      elem.presentación,
    ]);

    doc.autoTable({
      head: [
        ['#', 'Receta', 'Nro.', 'MP', 'Médico', 'Atención', 'Diagnóstico', 'DNI', 'Apellido', 'Nombre', 'Teléfono', 'Cant.', 'Medic', 'Presentación'],
      ],
      body: tableData,
    });

    doc.save('tabla.pdf');
  };


  // GENERAR EXCEL PARA DESCARGAR 
  const generateExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Tabla');

    // Agrega los encabezados de columna
    const headers = ['#', 'Receta', 'Nro.', 'MP', 'Médico', 'Atención', 'Diagnóstico', 'DNI', 'Apellido', 'Nombre', 'Teléfono', 'Cant.', 'Medic', 'Presentación'];
    worksheet.addRow(headers);

    // Agrega los datos de la tabla
    array.forEach((elem) => {
      const row = [];
      row.push(elem.id, elem.receta, elem.nro, elem.MP, elem.medico, elem.atencion, elem.diagnostico, elem.dni, elem.apellido, elem.nombre, elem.telefono, elem.cant, elem.Medic, elem.presentación);
      worksheet.addRow(row);
    });

    // Crea un buffer para el archivo Excel
    workbook.xlsx.writeBuffer().then((buffer) => {
      // Crea un blob a partir del buffer de Excel
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Crea una URL para descargar el archivo
      const url = URL.createObjectURL(blob);

      // Crea un enlace y simula un clic para descargar el archivo
      const link = document.createElement('a');
      link.href = url;
      link.download = 'tabla.xlsx';
      link.click();

      // Libera la URL y elimina el enlace
      URL.revokeObjectURL(url);
      link.remove();
    });
  };


  return (
    <>
      <div className='col-12 --bs-white'>
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0">Datos de consulta</h4>

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
              <li className="breadcrumb-item active">Data Tables</li>
            </ol>
          </div>

        </div>

        <div className='col-12'>

          <table className="table">
            <caption>Lista de datos solicitados</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Receta</th>
                <th scope="col">Nro.</th>
                <th scope="col">MP</th>
                <th scope="col">Médico</th>
                <th scope="col">Atención</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col">DNI</th>
                <th scope="col">Apellido</th>
                <th scope="col">Nombre</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Cant.</th>
                <th scope="col">Medic</th>
                <th scope="col">Presentación</th>
              </tr>
            </thead>
            <tbody>
              {array.map((elem, id) => {
                return (
                  <tr key={id}>
                    <td> {elem.id}</td>
                    <td> {elem.receta}</td>
                    <td> {elem.nro}</td>
                    <td> {elem.MP}</td>
                    <td> {elem.medico}</td>
                    <td> {elem.atencion}</td>
                    <td> {elem.diagnostico}</td>
                    <td> {elem.dni}</td>
                    <td> {elem.apellido}</td>
                    <td> {elem.nombre}</td>
                    <td> {elem.telefono}</td>
                    <td> {elem.cant}</td>
                    <td> {elem.Medic}</td>
                    <td> {elem.presentación}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='col-12 '>
            <button className='btn btn-success m-2' onClick={generatePDF}>Descargar PDF</button>
            <button className='btn btn-primary m-2' onClick={generateExcel}>Descargar Excel</button>
          </div>
          <div className='col-12'>
            
          </div>


        </div>
      </div>

    </>
  )
}
