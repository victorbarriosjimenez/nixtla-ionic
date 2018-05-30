// Event simboliza un periodo laboral de un promotor en una sucursal
export class Event { 
    uid?: string; //Id del evento 
    branch?: string; // Id d ela sucursal 
    promoter?: string; // Id del promotor 
    eventDateBegin?: Date; // Fecha de inicio del periodo del evento
    eventDateExp?: Date; //Fecha de fin del periodo  
    status?: boolean; // Estado del evento
    hourWorkdayBegin?: string; // Hora de entrada diaria de los eventos
    hourWorkdayEnd?: string; // Hora de salida diaria de los eventos
}