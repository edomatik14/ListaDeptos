var deptos = ["Antioquia", "Boyacá", "Cundinamarca", "Santander", "Nariño", "Tolima", "Bolívar", "Valle del Cauca", "Cauca", "Norte de Santander", "Huila", "Chocó", "Córdoba", "Magdalena", "Meta", "Caldas", "Sucre", "Cesar", "Atlántico", "Casanare", "Caquetá", "La Guajira", "Risaralda", "Putumayo", "Quindío", "Arauca", "Guaviare", "Vichada", "Vaupés", "Amazonas", "San Andrés y Providencia", "Guainía"];
var i;

function agregarElementos(){
    for(i=0; i<deptos.length; i++){
        var x = document.getElementById("sel1");
        var c = document.createElement("option");
        c.text = deptos[i];
        x.options.add(c, 1);
    }   
}