import { NumeroPacientesPorEspecialidad, Pacientes } from './model';

export function pintarPacientes(pacientes: Pacientes[], contenedor: string): void {

    const itemContenedor = document.getElementById(contenedor);

    if (!itemContenedor) {
        console.error("El elemento no se ha encontrado");
        return;
    }

    itemContenedor.innerHTML = '';

    const lista = document.createElement("ul");

    for (let i = 0; i < pacientes.length; i++) {
        const pacienteItem = document.createElement("li");
        pacienteItem.textContent = JSON.stringify(pacientes[i], null, 2)
        lista.appendChild(pacienteItem);
    }
    itemContenedor.appendChild(lista);
}

export function mostrarActivarProtocolo(activar_sn: boolean, contenedor: string): void {

    const itemContenedor = document.getElementById(contenedor);

    if (!itemContenedor) {
        console.error("El elemento no se ha encontrado.");
        return;
    }

    itemContenedor.innerHTML = '';

    const lista = document.createElement("ul");

    const item = document.createElement("li");
    item.textContent = activar_sn ? "Activar protocolo" : "No activar protocolo";
    lista.appendChild(item);

    itemContenedor.appendChild(lista);
}

export function mostrarIrACasa(marchar_sn: boolean, contenedor: string): void {

    const itemContenedor = document.getElementById(contenedor);

    if (!itemContenedor) {
        console.error("El elemento no se ha encontrado.");
        return;
    }

    itemContenedor.innerHTML = '';

    const lista = document.createElement("ul");

    const item = document.createElement("li");
    item.textContent = marchar_sn ? "Pediatra se puede ir" : "Pediatra no se puede ir";
    lista.appendChild(item);

    itemContenedor.appendChild(lista);
}

export function pintarEspecialidadPacientes(resultado: NumeroPacientesPorEspecialidad, contenedor: string): void {

    const itemContenedor = document.getElementById(contenedor);

    if (!itemContenedor) {
        console.error("El elemento no se ha encontrado");
        return;
    }

    itemContenedor.innerHTML = '';

    const lista = document.createElement("ul");
    const pacienteItem = document.createElement("li");
    pacienteItem.textContent = JSON.stringify(resultado)
    lista.appendChild(pacienteItem);

    itemContenedor.appendChild(lista);
}

