import { Pacientes, NumeroPacientesPorEspecialidad } from './model';



export const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesPediatria: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatria = [...pacientesPediatria, pacientes[i]];
        }
    }
    return pacientesPediatria;
};

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesPediatria: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesPediatria = [...pacientesPediatria, pacientes[i]];
        }
    }
    return pacientesPediatria;
};

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;

    let i = 0;
    while (i < pacientes.length) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39)
            activarProctolo = true;
        break;
    }
    return activarProctolo;
};

export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

    let pacientesReasignados: Pacientes[] = [...pacientes];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            const pacienteModificado: Pacientes = { ...pacientes[i], especialidad: "Medico de familia" };
            pacientesReasignados = [
                ...pacientesReasignados.slice(0, i),
                pacienteModificado,
                ...pacientesReasignados.slice(i + 1)
            ]
        }
    }

    return pacientesReasignados;

};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let marchar = true;
    for (let i = 0; i < pacientes.length && marchar; i++) {
        if (pacientes[i].especialidad == "Pediatra") {
            marchar = false;
        }
    }
    return marchar;
};

export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

    let contarEspecialidades: NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }

    for (let i = 0; i < pacientes.length; i++) {
        switch (pacientes[i].especialidad) {
            case "Medico de familia":
                contarEspecialidades.medicoDeFamilia++;
                break;
            case "Pediatra":
                contarEspecialidades.pediatria++;
                break;
            case "Cardiólogo":
                contarEspecialidades.cardiologia++;
                break;
        }
    }
    return contarEspecialidades;
};

