({
    recuperarCampos : function(component,option) {
        var apiName = component.get('v.apiName');
        var action = component.get('c.prueba1');
        action.setParams({ apiName: apiName });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                component.set("v.arrayBuffer", response.getReturnValue());
                this.createComponents(component,response.getReturnValue(),option);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
    },
    
    recuperarCamposRequeridos : function(component,option) {
        var apiName = component.get('v.apiName');
        var action = component.get('c.prueba2');
        action.setParams({ apiName: apiName });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                component.set("v.arrayBuffer", response.getReturnValue());
                this.createComponents(component,response.getReturnValue(),option);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
    },
    
    createComponents : function(component,array,option){
        var arraybuffer = array;
        console.log('ARRAY DE OBJETOS');
        console.log(arraybuffer)
        var indice = 1;
        var numListas = component.get('v.columnas');
        for(var i = 0;i<arraybuffer.length;i++){
            $A.createComponent(
                "lightning:"+option,
                {
                    "fieldName": arraybuffer[i]
                },
                function(comp, status, errorMessage){
                    //Add the new button to the body array
                    if (status === "SUCCESS") {
                        var cajaComponentes=component.get('v.auraArray');
                        cajaComponentes.push(comp);
                        component.set('v.auraArray',cajaComponentes);
                        console.log(indice);
                        if(indice === arraybuffer.length){
                            
                            var finBucle = component.getEvent("finbucle");
                            
                            finBucle.setParam('nListas',numListas);
                            finBucle.fire();
                           
                        }
                        indice++;
                    }
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                        // Show offline error
                    }
                        else if (status === "ERROR") {
                            console.log("Error: " + errorMessage);
                            // Show error message
                        }
                }
            );
            
        }
    },
    
    getFieldSetPaths : function(component){
        var apiName = component.get('v.apiName');
        var FieldSetName = component.get('v.fieldSet');
        var action = component.get('c.prueba4'); 
        action.setParams({ apiName: apiName , FieldSetName: FieldSetName });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
					component.set('v.fieldSetLista',response.getReturnValue);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    
    
    
    
    createComponentList : function(component,numListas){
        console.log('holololoololololololololollolo');
        switch(numListas) {
            case 1:
                var auratotal = component.get('v.pruebas');
                var aura0 = component.get('v.auraArray')
                auratotal.push(aura0);
                component.set('v.pruebas',auratotal);
                component.set('v.visible',true);
                component.set('v.tam',10);
                break;
                
            default:
                setTimeout (function() {
                    var auratotal = component.get('v.pruebas');
                    var tam = 12/numListas;
                    component.set('v.tam',tam);
                    var tamList = Math.round((component.get('v.auraArray').length/numListas));
                    var excepcion=false; 
                    if((component.get('v.auraArray').length%numListas)!==0){
                        excepcion=true;
                    }
                    var aux = new Array;
                    var auxAura = component.get('v.auraArray');
                    var indice = 1;
                    for(var i = 0;i<auxAura.length ;i++){
                        if(i<auxAura.length){
                            aux.push(auxAura[i]);
                            if(aux.length===tamList){
                                component.set('v.auraArray0',aux);
                                var aura0 = component.get('v.auraArray0');
                                auratotal.push(aura0);
                                indice++;
                                aux = [];
                            }else{
                                if(i===auxAura.length-1&&indice===numListas&&excepcion===true){
                                    component.set('v.auraArray0',aux);
                                    var aura0 = component.get('v.auraArray0');
                                    auratotal.push(aura0);
                                }
                            }
                        }else{
                            console.log('PUSH EN ELSE');
                            auratotal.push(aux);   
                        }
                    }
                    component.set('v.pruebas',auratotal);
                    component.set('v.visible',true);   
                },1000);
                break;
        }   
    }
})