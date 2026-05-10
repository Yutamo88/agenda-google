function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda de contactos - Google Apps Script');

}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}