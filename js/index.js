
new SlimSelect({ 
  select: '#select-ubucaciones'
});

document.querySelectorAll('input[type=search]')[0].placeholder = 'Buscar nombre de persona';
document.querySelectorAll('input[type=search]')[0].style = 'text-align: center;';
var seleccion_finca = document.getElementById("select-ubucaciones");
//Muestrame como principal en el mapa 
var map = L.map('map').setView([9.2962087, -75.3994974], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);
// // Añademe un marcador en el mapa principal
L.marker([9.2962087, -75.3994974]).addTo(map).bindPopup('Sincelejo sucre').openPopup();
//Copyrigth MOISES CANARIA
//Datos de las personas de cada una de las fincas
var personas = [
  { nombre: "Filiberto Mendoza", vereda: "Sillete medio", celular: "3205788840", tipo_cacao: "Criollo Híbrido", precio: "$8.000 kg", lat: 9.650150, lng: -75.302250 },
  { nombre: "Julio Salas Vitola", vereda: "Changua", celular: "3105729063", tipo_cacao: "Híbrido", precio: "$7.400 kg", lat: 9.565233, lng: -75.391400 },
  { nombre: "Jaime Sequeda", vereda: "Sillete medio", celular: "3205788840", tipo_cacao: "Criollo Híbrido", precio: "$1.000 kg", lat: 9.619600, lng: -75.334067 },
];

seleccion_finca.addEventListener('change', function (e) { //Cuando cambie el select
  let indice = e.target.selectedIndex; // //Indice para identificar el marcador de la persona seleccionada
  indice = indice - 1; //Resto 1 para que el indice empiece en 0
  let imagen = ""; //Imagen para cada cada ubucacion 
  imagen = personas[indice].nombre; // //Asigno el nombre de la persona a la imagen
    //separame las coordenadas de la ubicacion seleccionada
    var lat = personas[indice].lat; //Latitud
    var lng = personas[indice].lng; //Longitud
    var coordenadas = [lat, lng]; //Coordenadas
  map.flyTo(coordenadas, 13); 
  L.marker(coordenadas).addTo(map)
    .bindPopup('<div class="imagenes_mapa"><img src="img/'
      + imagen + '.png" ><img src="img/' + imagen
      + '2.png"></div><br><h3><div style="text-align: center;">Nombre: ' 
      + personas[indice].nombre + "<br>" + "Vereda: " 
      + personas[indice].vereda + "<br>" + "Celular: " 
      + personas[indice].celular + "<br>" + "Tipo de cacao: " 
      + personas[indice].tipo_cacao + "<br>" + "Precio: "
      + personas[indice].precio + '<div>').openPopup();
}); 
