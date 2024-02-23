



import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { saveEmployee, searchEmployee, searchEmployeeById } from './EmployeeApi';
import Employee from './Employee';



const EmployeeEdit: React.FC = () => {

  //const { name, id } = useParams<{ name: string; id: string }>();
  const { name } = useParams<{ name: string; }>();
  const routeMatch: any = useRouteMatch("/page/employee/:id");
  let id = routeMatch?.params?.id;
  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname])
  
  const search = async() => {

    if ( id !== 'new'){
      let employee = await searchEmployeeById(id);
      setEmployee(employee);
    }
  };

  const save = async () => {
      await saveEmployee( employee );
      history.push('/page/employees');
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
            <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado' }</IonTitle>
              
            <IonItem>
            
            <IonRow>
                  <IonCol>
                      
                  <IonRow>
                <IonCol>
                    <IonInput 
                    onIonChange={ e => employee.firstname = String(e.detail.value) }
                    value={ employee.firstname }
                    label="Nombre" 
                    labelPlacement="stacked" 
                    placeholder="Ingresa tu Nombre">
                  </IonInput>
                </IonCol>
            </IonRow>
              
            <IonRow>
              <IonCol>
                  <IonInput 
                    onIonChange={ e => employee.lastname = String(e.detail.value) }
                    value={ employee.lastname }
                    label="Apellido" 
                    labelPlacement="stacked" 
                    placeholder="Ingresa tu Apellido">
                  </IonInput>
              </IonCol>
            </IonRow>

              <IonRow>
                      <IonCol>
                          <IonInput
                          onIonChange={ e => employee.phone = String(e.detail.value) }
                          value={ employee.phone }
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
                              onIonChange={ e => employee.email = String(e.detail.value) }
                              value={ employee.email }
                              label="Email" 
                              labelPlacement="stacked" 
                              placeholder="Ingresa tu Email">
                            </IonInput>
                  </IonCol>
              </IonRow>
            
                <IonRow>
                    <IonCol>
                          <IonInput
                            onIonChange={ e => employee.address = String(e.detail.value)}
                            value={ employee.address } 
                            label="Dirección" 
                            labelPlacement="stacked" 
                            placeholder="Ingresa tu Dirección">
                                
                          </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                          <IonInput
                            onIonChange={ e => employee.salary = Number(e.detail.value)}
                            value={ employee.salary } 
                            label="Salario" 
                            labelPlacement="stacked" 
                            placeholder="Salario">
                                
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

export default EmployeeEdit;
