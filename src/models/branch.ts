//Branch reprresenta a cada Sucursal en las cuales se esta trabajando
export interface Branch { 
    uid?: string; // Id de la sucursal
    name?: string; // Nombre
    city?: string; // Ciudad
    state?: string; // Estado
    supervisorMin?: number; //Numero minimo de supervisores
    promoters?: number; // Numero de promotores
    supervisors?: number; // Numero de supervisores 
    supervisorMax?: number;  // Nunmero maximo de supervisores
    promotersMin?: number; // Numero minimo de promotores
    promotersMax?: number; // Numero máximo de promotores
    address1?: string;  // Direccion no.1 
    address2?: string; // Direccion no. 2 
    postalCode?: string; // Codigo postal
    contact?: string; // Telefono de contacto
    contactEmail?: string; // Email de contacto de la sucursal 
    scheduleMonFriOpen?: string; // Horario semanal de apertura
    scheduleMonFriClose?: string; // Horario semanal de clausura
    scheduleSatOpen?: string; //Horario de apertura sabados  
    scheduleSatClose?: string; //Horario de clausura sabados 
    scheduleSunOpen?: string; //Horario de apertura domingos
    scheduleSunClose?: string; // Horario de apertura domingos
    details?: string; //Detalles extras de la sucursal 
    image?: string; //imagen de la sucursal 
    extraHours?: number; //Numero de horas extra permitidas
    coordinatesLat?: number; //Latitud de las coordenadas de la sucursal 
    coordinatesLng?: number; // Longitud de las coordenadss de la sucursal 
}