(function() {
    
    var actualizarHora = function(){
        var fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

        var pHoras = document.getElementById('horas'),
        pMin = document.getElementById('minutos'),
        pSegs = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year')

        var semana = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado']
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];
        pMes.textContent = meses[mes];


        pYear.textContent = year;

        if (horas < 10) {
            horas = `0${horas}`
        }
        pHoras.textContent = horas;


        if (minutos < 10) {
            minutos = `0${minutos}`
        }
        pMin.textContent = minutos;
        if (segundos < 10) {
            segundos = `0${segundos}`
        }
        pSegs.textContent = segundos;

        var boton = document.getElementById('alarma-btn'),
        alarmhr = document.getElementById('alarmaHora'),
        alarmmin = document.getElementById('alarmaMin');

        boton.addEventListener('click' , function(){

            let num1 = alarmhr,
            num2 = alarmmin
            if (horas == num1 && minutos == num2) {
                alert('rgvkwe')
            }
        });
    };

    actualizarHora();
    var intervalor = setInterval(actualizarHora, 1000);

}());