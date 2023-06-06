import Tabla from "@/components/Tabla";
import { useState, useEffect } from "react";

export default function Prueba() {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toISOString().split('T')[0];
 
  const minDate = new Date();
  minDate.setFullYear(2023, 4, 15); // El mes es base 0, por lo que 4 representa mayo

  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    // Aquí puedes enviar la fecha seleccionada al backend
    // utilizando una función o llamando a una API
    event.preventDefault();
    setIsSubmitting(true); // Inicia el spinner
    
    
    const formattedDate = formatDate(selectedDate); // Formatear la fecha al formato deseado
    const payload = {
      fecha: formattedDate
      
    };
    console.log(JSON.stringify(payload))
    // Enviar el objeto JSON al backend
    fetch('http://localhost:8000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          // Lógica a realizar con la respuesta del backend
          console.log('Respuesta del backend:', data);
          setIsSubmitting(false);
        })
        .catch(error => {
          console.error('Error al enviar la fecha al backend:', error);
          setIsSubmitting(false)
        });

        
  };
  
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year.substring(2)}`;
  };


  //Aqui creamos un setTimeOut para simular la demora del tiempo de respuesta de la base de datos, 
  // en dicho tiempo se debe mostrar el spinner. 

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const delay = 2000; // Tiempo de espera en milisegundos (ejemplo: 2 segundos)
  
    const timer = setTimeout(() => {
      setIsSubmitting(false); // Marca isSubmitting como falso después del tiempo de espera
    }, delay);
  
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta antes de que finalice el tiempo de espera
  }, []);
     



   

  return (
    <div className="row">
      <div className='col-6 m-5'>
        <div class="row mb-5">
          <label for="example-date-input" class="col-sm-2 col-form-label">Seleccione fecha</label>
          <div class="col-sm-2">
            <input class="form-control" 
                   type="date" 
                   value={selectedDate} 
                   placeholder={selectedDate}
                   id="example-date-input" 
                   onChange={handleDateChange}
                   min={minDate.toISOString().split('T')[0]} 
                   max={currentDateFormatted}
                    />
                    <button className="btn btn-primary m-3 " onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
        {isSubmitting ? (
      // Muestra el spinner mientras isSubmitting es verdadero
      <div className="spinner-border"></div>
    ) : (
      // Muestra la tabla cuando isSubmitting es falso
        <Tabla />
    
    )}
      </div>
    </div>
  )
}
