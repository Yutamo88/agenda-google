function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de contactos - Google Apps Script');

}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById("1t1CRgFGQTXJ4kh04CQjmD8i8Nxa1YPIxuQ0YDKiGAUM").getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}