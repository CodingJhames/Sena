import Costumer from './Costumer';

export async function searchCostumer(  ) {

    //let url = process.env. + 'costumers';
    //let url = process.env.REACT_APP_API + 'costumers';
    
    let url = process.env.REACT_APP_API  + 'costumers';
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    return await response.json();

    // if( !localStorage['costumers'] ){
    //     localStorage['costumers'] = '[]';
    // }

    // let costumers = localStorage['costumers'];
    // costumers = JSON.parse(costumers);

    // return costumers;
};

export async function removeCustomer(id:string) {
    let url = process.env.REACT_APP_API  + 'costumers/' + id;
    await fetch(url,{
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

};

export async function saveCostumer( costumer: Costumer ) {
    let url = process.env.REACT_APP_API  + 'costumers';
    await fetch(url,{
        "method": 'POST',
        "body":JSON.stringify(costumer),
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    
};


export async function searchCostumerById(  id:string ) {
    let url = process.env.REACT_APP_API  + 'costumers/' + id ;
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    return await response.json();
};



