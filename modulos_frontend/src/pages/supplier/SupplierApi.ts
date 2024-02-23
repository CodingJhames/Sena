
import Supplier from "./Supplier";

// export function searchSupplier(  ) {
//     if( !localStorage['vendors'] ){
//         localStorage['vendors'] = '[]';
//     }

//     let vendors = localStorage['vendors'];
//     vendors = JSON.parse(vendors);

//     return vendors;
// };

// export function removeCostumer(id:string) {
//     let vendors = searchSupplier();
//     let index = vendors.findIndex((vendor:any) => vendor.id == id );
//     vendors.splice(index, 1 );
//     localStorage['vendors'] = JSON.stringify(vendors);
// };

// export function saveSupplier( vendor: Supplier ) {
//     let vendors = searchSupplier();
//     if (vendor.id){
//         //Editar Cliente
//         let index = vendors.findIndex((c:Supplier) => c.id == vendor.id );
//         vendors[index] = vendor;
//     }else {
//         // Nuevo Cliente
//         vendor.id = String(Math.round(Math.random() * 100000) );
//         vendors.push(vendor);
//     }
    
//     localStorage['vendors'] = JSON.stringify(vendors);
// };


// export function searchSupplierById(  id:string ) {
//     let vendors = searchSupplier();
//     return vendors.find((vendor:any) => vendor.id == id );
// };



export async function searchSupplier(  ) {

    
    let url = process.env.REACT_APP_API  + 'suppliers';
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    return await response.json();

};

export async function removeSupplier(id:string) {
    let url = process.env.REACT_APP_API  + 'suppliers/' + id;
    await fetch(url,{
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

};

export async function saveSupplier( supplier: Supplier ) {
    let url = process.env.REACT_APP_API  + 'suppliers';
    await fetch(url,{
        "method": 'POST',
        "body":JSON.stringify(supplier),
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    
};


export async function searchSupplierById(  id:string ) {
    let url = process.env.REACT_APP_API  + 'suppliers/' + id ;
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    return await response.json();
};





