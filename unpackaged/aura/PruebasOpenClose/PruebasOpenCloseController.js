({
    utilidad : function(component, event, helper) {
        console.log('hola');
        var utilityAPI = component.find("utilitybar");
        console.log('componente encontrado');
        utilityAPI.getAllUtilityInfo().then(function(response) {
            console.log('funcion soportada');
            var myUtilityInfo = response[0];
            console.log('response: '+JSON.stringify(response));
            console.log('response 0 : '+JSON.stringify(myUtilityInfo));
          /*  utilityAPI.openUtility({
                utilityId: myUtilityInfo.id
            });*/
        })
        .catch(function(error) {
            console.log(error);
            console.log('fallo en la funcion')
        });
    }
    
})