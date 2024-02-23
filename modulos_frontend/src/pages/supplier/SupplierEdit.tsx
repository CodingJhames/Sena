



import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { saveSupplier, searchSupplierById } from './SupplierApi';
import Supplier from './Supplier';



const SupplierEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string }>();
  
  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname])
  
  const search = async() => {

    if ( id !== 'new'){
      let supplier = await searchSupplierById(id);
      setSupplier(supplier);
    }
  };

  const save = async() => {
      
      await saveSupplier( supplier );
      history.push('/page/suppliers');
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
            <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor' }</IonTitle>
              
            <IonItem>
            
            <IonRow>
                  <IonCol>
                      
                  <IonRow>
                <IonCol>
                    <IonInput 
                    onIonChange={ e => supplier.name = String(e.detail.value) }
                    value={ supplier.name }
                    label="Nombre" 
                    labelPlacement="stacked" 
                    placeholder="Ingresa tu Nombre">
                  </IonInput>
                </IonCol>
            </IonRow>
              
            <IonRow>
              <IonCol>
                  <IonInput 
                    onIonChange={ e => supplier.email = String(e.detail.value) }
                    value={ supplier.email }
                    label="Email" 
                    labelPlacement="stacked" 
                    placeholder="Email">
                  </IonInput>
              </IonCol>
            </IonRow>

              <IonRow>
                      <IonCol>
                          <IonInput
                          onIonChange={ e => supplier.phone = String(e.detail.value) }
                          value={ supplier.phone }
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
                              onIonChange={ e => supplier.address= String(e.detail.value) }
                              value={ supplier.address }
                              label="Dirección" 
                              labelPlacement="stacked" 
                              placeholder="Ingresa tu Dirección">
                            </IonInput>
                  </IonCol>
              </IonRow>
            
                <IonRow>
                    <IonCol>
                          <IonInput
                            onIonChange={ e => supplier.web = String(e.detail.value)}
                            value={ supplier.web } 
                            label="Webpage" 
                            labelPlacement="stacked" 
                            placeholder="Webpage">
                                
                          </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                          <IonInput
                            onIonChange={ e => supplier.contact = String(e.detail.value)}
                            value={ supplier.contact } 
                            label="Contacto" 
                            labelPlacement="stacked" 
                            placeholder="Contacto">
                                
                          </IonInput>
                    </IonCol>
                </IonRow>
                
                </IonCol>
              </IonRow>

        
            </IonItem>

            

            <IonItem>
              <IonButton onClick={ save } color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={ checkmark } />
                Guardar Proveedor
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

export default SupplierEdit;
