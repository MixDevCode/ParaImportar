function calcularTotal(){let t=parseFloat($('input[name="valor"]').val()),a=parseFloat($('input[name="costo"]').val()),e=$('select[name="anuales"]').val(),n=parseFloat($('input[name="tasa"]').val()),o=parseFloat($("#bancoSelect").val()||0);t>0&&(montoSinImpuestos=(t+a)*o,"si"===e?(impPais=.3*montoSinImpuestos,impGanancia=1*montoSinImpuestos,impBienesPersonales=.25*montoSinImpuestos,excedente=(t+a)*.5*o):t+a>50?(impPais=.3*montoSinImpuestos,impGanancia=1*montoSinImpuestos,impBienesPersonales=.25*montoSinImpuestos,excedente=(t+a-50)*.5*o):(impPais=.3*montoSinImpuestos,impGanancia=1*montoSinImpuestos,impBienesPersonales=.25*montoSinImpuestos,excedente=0),total=montoSinImpuestos+impPais+impGanancia+impBienesPersonales+n+excedente),$("#total").text(`AR${formatoMoneda.format(total)}`),$("#montoSinImpuestos").text(`AR${formatoMoneda.format(montoSinImpuestos)}`),$("#impPais").text(`AR${formatoMoneda.format(impPais)}`),$("#impGanancia").text(`AR${formatoMoneda.format(impGanancia)}`),$("#impBienesPersonales").text(`AR${formatoMoneda.format(impBienesPersonales)}`),$("#vep").text(`AR${formatoMoneda.format(n)}`),$("#excedente").text(`AR${formatoMoneda.format(excedente)}`),modificarTotal()}