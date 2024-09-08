import { pintarPacientes, mostrarActivarProtocolo, mostrarIrACasa, pintarEspecialidadPacientes } from './ui';
import { pacientes } from './model';
import {
    obtenPacientesAsignadosAPediatria,
    obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
    activarProtocoloUrgencia,
    reasignaPacientesAMedicoFamilia,
    HayPacientesDePediatria,
    cuentaPacientesPorEspecialidad
} from './motor';

const iniciar = () => {
    pintarPacientes(obtenPacientesAsignadosAPediatria(pacientes), "pacientes_pediatria");
    pintarPacientes(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes), "pacientes_pediatria_menor10");
    mostrarActivarProtocolo(activarProtocoloUrgencia(pacientes), "activar_protocolo");
    pintarPacientes(reasignaPacientesAMedicoFamilia(pacientes), "pacientes_cambio_especialidad");
    mostrarIrACasa(HayPacientesDePediatria(pacientes), "ir_a_casa");
    pintarEspecialidadPacientes(cuentaPacientesPorEspecialidad(pacientes), "pacientes_especialidad");
};
document.addEventListener("DOMContentLoaded", iniciar);