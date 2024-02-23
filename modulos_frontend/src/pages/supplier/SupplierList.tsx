

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeSupplier, searchSupplier } from './SupplierApi';

import Supplier from './Supplier';



const SupplierList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [suppliers, setSupplier] = useState<Supplier[]>([]);
  const history = useHistory();
  
  useEffect(() => {
    search();
  }, [history.location.pathname])
  
  const search = async() => {
    let result = await searchSupplier();
    
    setSupplier(result);
  };

  const remove = (id: string ) => {
    removeSupplier(id);
    search();
  };

  const addSupplier = () => {
    history.push('/page/supplier/new');
  };

  const editSupplier  = ( id:string ) => {
    history.push('/page/supplier/' + id );
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
          
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <IonCard>
            <IonTitle>Gestion de Proveedores</IonTitle>
            
            <IonItem>
              <IonButton onClick={ addSupplier } color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Proveedor
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
              { suppliers.map( (proveedor:Supplier) =>  
                  <IonRow>
                      <IonCol>{proveedor.name}</IonCol>
                      <IonCol>{proveedor.email}</IonCol>
                      <IonCol>{proveedor.phone}</IonCol>
                      <IonCol>{proveedor.address}</IonCol>
                      <IonCol>
                        <IonButton color="primary"  fill="clear" 
                          onClick={() => editSupplier( String(proveedor.id) )}>
                          <IonIcon icon={pencil} slot='icon-only'/>
                        </IonButton>

                        <IonButton color="danger"  fill="clear" 
                          onClick={() => remove(String(proveedor.id))}>
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

export default SupplierList;
