({
    doInit : function(component, event, helper) {
        var buffer = component.get('v.buffer');
        var typo = component.get('v.typeForm');
        var option;
        
        switch(typo){
            case 'CREATE':
                option = 'inputField';
                break;
            case 'EDIT':
                option = 'inputField';
                //SI NO RECIBIMOS UN RECORD ID POR MEDIO DE UN COMPONENTE PADRE LO BUSCAMOS 
                if(component.get('v.idAlternativo')!=='none'){
                    console.log('CAMBIO DE ID');
                    component.set('v.recordId',component.get('v.idAlternativo'));
                }
                break;
            case 'VIEW':
                option = 'outputField';
                //SI NO RECIBIMOS UN RECORD ID POR MEDIO DE UN COMPONENTE PADRE LO BUSCAMOS 
                if(component.get('v.idAlternativo')!=='none'){
                    console.log('CAMBIO DE ID');
                    component.set('v.recordId',component.get('v.idAlternativo'));
                }
                break;
        }
        
        console.log('PRUEBAS FORM CONTROLLER - INICIO');
        switch(buffer.toUpperCase()) {
            case 'ALL':
                console.log('ESCOGEMOS ALL');
                helper.recuperarCampos(component,option);
                break;
            case 'REQUIRED':
                console.log('ESCOGEMOS REQUIRED');
                helper.recuperarCamposRequeridos(component,option);
                break;
            default:
                var arraybuffer = buffer.split(',');
                console.log('ESCOGEMOS CAMPOS');
                component.set('v.arrayBuffer',arraybuffer);
                helper.createComponents(component,arraybuffer,option);
        }
        
    },
    
    
    
    bufferChange : function(component, event, helper){
        console.log('Esta pasando');
        var buffer = component.get('v.buffer');
        if(buffer){
            var arraybuffer = buffer.split(',');
            component.set('v.arrayBuffer',arraybuffer);
        }
    },
    
    handleOnSubmit : function(component, event, helper){
        console.log('SUBMIT BRO');
        event.preventDefault();       // stop the form from submitting
        var fields = event.getParam('fields');
        console.log(fields.Descripcion__c);
        console.log(fields.Cliente__c);
        console.log(fields.Id);
        
        component.find('myForm').submit();
        
    },
    
    handleOnError : function(component, event, helper){
        var error = event.getParam('errorCode');
        var message = event.getParam('message');
        console.log(error);
        console.log(message);
    },
    
    prueba : function(component, event, helper){
        var numListas = event.getParam('nListas');
        helper.createComponentList(component,numListas);
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