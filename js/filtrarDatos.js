
function filtrarYOrdenarPorAnioYMes(datos, anio) {
  // Filtrar por n_Anio
  const filtrados = datos.filter(item => item.n_Anio === parseInt(anio));
  return filtrados;
}
function ConsultarInflacionMensual() {
  let anio = document.getElementById('year2').value
  const inflacionparcial = filtrarYOrdenarPorAnioYMes(window.inflacion, anio);
  const sueldoparcial = filtrarYOrdenarPorAnioYMes(window.sueldo, anio);
  // armo los datos para mostrar
  // const datosDiv = document.getElementById('datos2a');
  // Crear la tabla y el encabezado
  // Recorrer el array filtrado y añadir cada fila a la tabla
  let datos1 = [];
  let datos2 = [];
  var tablaHtml = "";
  inflacionparcial.forEach(function (inflacionItem) {
    var sueldoItem = sueldoparcial.find(function (sueldoItem) {
      return sueldoItem.n_Anio === inflacionItem.n_Anio && sueldoItem.n_mes === inflacionItem.n_mes;
    });
    if (sueldoItem) {
      tablaHtml += "<tr>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_Anio + "</td>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_mes + "</td>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_InflacionMensual + ' % '+"</td>";
      tablaHtml += "<td class='datonumerico'>" + sueldoItem.n_variacionMensua + ' % '+"</td>";
      tablaHtml += "</tr>";
      datos1.push(inflacionItem.n_InflacionMensual);
      datos2.push(sueldoItem.n_variacionMensua);

    }
  });
  document.getElementById("datos2a").innerHTML = tablaHtml;
  actualizarGrafico(datos1, datos2)

}
function ConsultarInflacionAcumulada() {
  let anio = document.getElementById('year3').value
  const inflacionparcial = filtrarYOrdenarPorAnioYMes(window.inflacion, anio);
  const sueldoparcial = filtrarYOrdenarPorAnioYMes(window.sueldo, anio);
  // armo los datos para mostrar
  // const datosDiv = document.getElementById('datos2a');
  // Crear la tabla y el encabezado
  // Recorrer el array filtrado y añadir cada fila a la tabla
  let datos1 = [];
  let datos2 = [];
  var tablaHtml = "";
  inflacionparcial.forEach(function (inflacionItem) {
    var sueldoItem = sueldoparcial.find(function (sueldoItem) {
      return sueldoItem.n_Anio === inflacionItem.n_Anio && sueldoItem.n_mes === inflacionItem.n_mes;
    });
    if (sueldoItem) {
      tablaHtml += "<tr>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_Anio +  "</td>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_mes + "</td>";
      tablaHtml += "<td class='datonumerico'>" + inflacionItem.n_InflacionAcumulada + ' % '+"</td>";
      tablaHtml += "<td class='datonumerico'>" + sueldoItem.n_variacionAcumulado + ' % '+"</td>";
      tablaHtml += "</tr>";
      datos1.push(inflacionItem.n_InflacionAcumulada);
      datos2.push(sueldoItem.n_variacionAcumulado);

    }
  });
  document.getElementById("datos3a").innerHTML = tablaHtml;
  actualizarGrafico3(datos1, datos2)
}

// Agregar un evento al botón para actualizar el gráfico

document.getElementById('boton2').addEventListener('click', function () {
  ConsultarInflacionMensual();
});
document.getElementById('boton3').addEventListener('click', function () {
  ConsultarInflacionAcumulada();
});
