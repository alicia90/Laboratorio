const codigoPostal_provinciasMap = new Map(
    [
        [01, "Alava"],
        [02, "Albacete"],
        [03, "Alicante"],
        [04, "Almeria"],
        [05, "Avila"],
        [06, "Badajoz"],
        [07, "Islas Baleares"],
        [08, "Barcelona"],
        [09, "Burgos"],
        [10, "Caceres"],
        [11, "Cadiz"],
        [12, "Castellon"],
        [13, "Ciudad Real"],
        [14, "Cordoba"],
        [15, "La Coruña"],
        [16, "Cuenca"],
        [17, "Gerona"],
        [18, "Granada"],
        [19, "Guadalajara"],
        [20, "Guipuzcoa"],
        [21, "Huelva"],
        [22, "Huesca"],
        [23, "Jaen"],
        [24, "Leon"],
        [25, "Lerida"],
        [26, "La Rioja"],
        [27, "Lugo"],
        [28, "Madrid"],
        [29, "Málaga"],
        [30, "Murcia"],
        [31, "Navarra"],
        [32, "Orense"],
        [33, "Asturias"],
        [34, "Palencia"],
        [35, "Las Palmas"],
        [36, "Pontevedra"],
        [37, "Salamanca"],
        [38, "Santa Cruz de Tenerife"],
        [39, "Cantabria"],
        [40, "Segovia"],
        [41, "Sevilla"],
        [42, "Soria"],
        [43, "Tarragona"],
        [44, "Teruel"],
        [45, "Toledo"],
        [46, "Valencia"],
        [47, "Valladolid"],
        [48, "Vizcaya"],
        [49, "Zamora"],
        [50, "Zaragoza"],
        [51, "Ceuta"],
        [52, "Melilla"]
    ]);

function ValidarDatos() {
    let datos_codigospostal = document.getElementById("datos_codigospostal").value;
    if (datos_codigospostal != "") {
        let datos_provincia = document.getElementById("datos_provincia").value;
        var codigo = datos_codigospostal.substring(2, 0);
        var provincia = codigoPostal_provinciasMap.get(parseInt(codigo));
        var mensaje_provincia = document.getElementById("mensaje_provincia");
        var mensaje_codigopostal = document.getElementById("mensaje_codigopostal");

        //Validar codigo postal
        if (datos_codigospostal.trim().length == 0) {
            mensaje_codigopostal.style.color = "red";
            mensaje_codigopostal.style.visibility = true;
            mensaje_codigopostal.innerHTML = "El codigo postal está vacío. Por favor, inserta los datos.";
        }
        else if (isNaN(datos_codigospostal)) {
            mensaje_codigopostal.style.color = "red";
            mensaje_codigopostal.style.visibility = true;
            mensaje_codigopostal.innerHTML = "El codigo postal contiene letras o caracteres especiales. Por favor, vuelve a insertar los datos correctamente.";
        }
        else if (datos_codigospostal.trim().length != 5) {
            mensaje_codigopostal.style.color = "red";
            mensaje_codigopostal.style.visibility = true;
            mensaje_codigopostal.innerHTML = "El codigo postal no contiene 5 números. Por favor, vuelve a insertar los datos correctamente.";
        }
        else if (provincia === undefined) {
            mensaje_codigopostal.style.color = "red";
            mensaje_codigopostal.style.visibility = true;
            mensaje_codigopostal.innerHTML = "El codigo postal no existe. Por favor, vuelve a insertar los datos correctamente.";
        }
        //Comprobar coincidencia de codigo postal y provincia
        else {
            mensaje_codigopostal.style.color = "green";
            mensaje_codigopostal.style.visibility = true;
            mensaje_codigopostal.innerHTML = "El codigo postal es correcto.";
            if (datos_provincia.toLowerCase() == provincia.toLowerCase()) {
                mensaje_provincia.style.color = "green";
                mensaje_provincia.style.visibility = true;
                mensaje_provincia.innerHTML = "La provincia es correcta.";
            }
            else {
                mensaje_provincia.style.color = "red";
                mensaje_provincia.style.visibility = true;
                mensaje_provincia.innerHTML = "La provincia no es correcta. Sugerencia: " + provincia;
            }
        }
    }
}

function mostrarValoracion() {
    let valoracion = document.getElementById("valoracion").value;

    alert("Has valorado con " + valoracion + " puntos.")
}

function mostrarCuenta() {
    let datosBancarios_pais = document.getElementById("datosBancarios_pais").value;
    let datosBancarios_iban = document.getElementById("datosBancarios_iban").value;
    let datosBancarios_entidad = document.getElementById("datosBancarios_entidad").value;
    let datosBancarios_sucursal = document.getElementById("datosBancarios_sucursal").value;
    let datosBancarios_dc = document.getElementById("datosBancarios_dc").value;
    let datosBancarios_cuenta = document.getElementById("datosBancarios_cuenta").value;

    alert("Le informamos que su cuenta bancaria es: "
        + datosBancarios_pais + datosBancarios_iban
        + "-" + datosBancarios_entidad
        + "-" + datosBancarios_sucursal
        + "-" + datosBancarios_dc
        + "-" + datosBancarios_cuenta);
}

function mostrarDiaSemana() {
    let fecha_encuesta = document.getElementById("fecha_encuesta").value; // día lunes
    let dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
    ];
    let numero_dia = new Date(fecha_encuesta).getDay();
    let nombre_dia = dias[numero_dia];
    alert("La fecha seleccionada en el elemento de fecha es un " + nombre_dia);
}