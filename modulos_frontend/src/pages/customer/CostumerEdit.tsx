



import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { saveCostumer, searchCostumer, searchCostumerById } from './CostumerApi';
import Costumer from './Costumer';



const CostumerEdit: React.FC = () => {

  const { name } = useParams<{ name: string }>();
  const routeMatch: any = useRouteMatch("/page/costumer/:id");
  const [costumer, setCostumer] = useState<Costumer>({});
  const history = useHistory();
  let id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  }, [history.location.pathname]);
  
  const  search = async () => {
    
    if ( id !== 'new'){
      let costumer = await searchCostumerById(id);
      setCostumer(costumer);
    }
  };

  const save = async() => {
      await saveCostumer( costumer );
      history.push('/page/costumers');
  };
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
            Parchita
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <IonCard>
            <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente' }</IonTitle>
              
            <IonItem>
            
            <IonRow>
                  <IonCol>
                      
                  <IonRow>
                <IonCol>
                    <IonInput 
                    onIonChange={ e => costumer.firstname = String(e.detail.value) }
                    value={ costumer.firstname }
                    label="Nombre" 
                    labelPlacement="stacked" 
                    placeholder="Ingresa tu Nombre">
                  </IonInput>
                </IonCol>
            </IonRow>
              
            <IonRow>
              <IonCol>
                  <IonInput 
                    onIonChange={ e => costumer.lastname = String(e.detail.value) }
                    value={ costumer.lastname }
                    label="Apellido" 
                    labelPlacement="stacked" 
                    placeholder="Ingresa tu Apellido">
                  </IonInput>
              </IonCol>
            </IonRow>

              <IonRow>
                      <IonCol>
                          <IonInput
                          onIonChange={ e => costumer.phone = String(e.detail.value) }
                          value={ costumer.phone }
                          label="Teléfono" 
                          labelPlacement="stacked" 
                          placeholder="Ingresa tu Teléfono">
                        </IonInput>
                      </IonCol>
              </IonRow>


                  </IonCol>
              </IonRow>
{/* ------------------------------------------------------------------------ */}
              <IonRow>
                <IonCol>
                    <IonRow>
                        <IonCol>
                            <IonInput
                              onIonChange={ e => costumer.email = String(e.detail.value) }
                              value={ costumer.email }
                              label="Email" 
                              labelPlacement="stacked" 
                              placeholder="Ingresa tu Email">
                            </IonInput>
                  </IonCol>
              </IonRow>
            
                <IonRow>
                    <IonCol>
                          <IonInput
                            onIonChange={ e => costumer.address = String(e.detail.value)}
                            value={ costumer.address } 
                            label="Dirección" 
                            labelPlacement="stacked" 
                            placeholder="Ingresa tu Dirección">
                                
                          </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                      <IonCol>
                          <IonInput 
                          label="" 
                          labelPlacement="stacked" 
                          placeholder="">
                        </IonInput>
                      </IonCol>
              </IonRow>
                
                </IonCol>
              </IonRow>

        
            </IonItem>

            

            <IonItem>
              <IonButton onClick={ save } color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={ checkmark } />
                Guardar Cliente
              </IonButton>
            </IonItem>

          </IonCard>
            {/* <IonButton  onClick={  () => {} } color="danger"  fill="clear" >
                            Prueba local storage
            </IonButton> */}
        </IonContent>
       
      </IonContent>

     


    </IonPage>
  );
};

export default CostumerEdit;
