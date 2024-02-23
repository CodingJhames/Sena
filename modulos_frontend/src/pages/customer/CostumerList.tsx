

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCostumer, searchCostumer } from './CostumerApi';
import Costumer from './Costumer';



const CostumerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Costumer[]>([]);
  const history = useHistory();
  
  useEffect(() => {
    search();
  }, [history.location.pathname])
  
  const search = async() => {
    let result = await searchCostumer();
    setClientes(result);
  };

  const remove = async(id: string ) => {
    await removeCustomer(id);
    search();
  };

  const addCostumer = () => {
    history.push('/page/costumer/new');
  };

  const editCostumer  = ( id:string ) => {
    history.push('/page/costumer/' + id );
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
            <IonTitle>Gestion Clientes</IonTitle>
            
            <IonItem>
              <IonButton onClick={ addCostumer } color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Cliente
              </IonButton>
            </IonItem>

            <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
              { clientes.map( (cliente:Costumer) =>  
                  <IonRow>
                      <IonCol>{cliente.firstname}</IonCol>
                      <IonCol>{cliente.email}</IonCol>
                      <IonCol>{cliente.phone}</IonCol>
                      <IonCol>{cliente.address}</IonCol>
                      <IonCol>
                        <IonButton color="primary"  fill="clear" 
                          onClick={() => editCostumer( String(cliente.id) )}>
                          <IonIcon icon={pencil} slot='icon-only'/>
                        </IonButton>

                        <IonButton color="danger"  fill="clear" 
                          onClick={() => remove(String(cliente.id))}>
                          <IonIcon icon={close} slot='icon-only'/>
                        </IonButton>
                      </IonCol>
                  </IonRow>
          )}       
        </IonGrid>
          </IonCard>
            {/* <IonButton  onClick={pruebaLocalStorage} color="danger"  fill="clear" >
                            Prueba local storage
            </IonButton> */}
        </IonContent>
      
      </IonContent>

    </IonPage>
  );
};

export default CostumerList;
