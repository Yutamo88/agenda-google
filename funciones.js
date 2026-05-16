const HOJA = SpreadsheetApp.openById("1t1CRgFGQTXJ4kh04CQjmD8i8Nxa1YPIxuQ0YDKiGAUM");

function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de contactos - Google Apps Script');

}

function doPost(datos) {
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de contactos - Google Apps Script');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}

//Obtiene los datos de los contactos de la hoja
function obtenerContactos() {
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo) {
    HOJA.appendRow([nombre, correo]);
}