import pool from './db_connection.js';

async function getTelefonos() {
  try {
    const [rows] = await pool.query('SELECT nombre, apellido, telefono FROM paciente');
    console.log(rows);
  } catch (error) {
    console.error('Error al obtener los pacientes:', error.message);
  }
}

getTelefonos();

async function getTelefonoPaciente(nro_historial_clinico) {
    try{
        const [rows] = await pool.query('SELECT telefono FROM paciente WHERE nro_historial_clinico = ?',[nro_historial_clinico]);
        return rows;
    } catch (error){
        throw new error ('Error al obtener el telefono', error.message);
    } 
};
const paciente = await getTelefonoPaciente(1236);
console.log('Resultado de búsqueda por historial:', paciente);

async function getMedicosPaciente(nro_historial_clinico) {
    try{
        const [rows] = await pool.query(
            `SELECT medico.nombre, medico.apellido, paciente.nro_historial_clinico
            FROM ingreso
            INNER JOIN paciente
            ON ingreso.nro_historial_paciente = paciente.nro_historial_clinico 
            INNER JOIN medico
            ON ingreso.matricula_medico = medico.matricula
            WHERE nro_historial_clinico = ?`,[nro_historial_clinico]);
        console.log(rows);
        return rows;
    } catch (error){
        throw new error ('Error al obtener los medicos', error.message);
    } 
};
const numerito = 675;
getMedicosPaciente(numerito);