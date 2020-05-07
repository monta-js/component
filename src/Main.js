import React from 'react' ;
import Photo from './profile/ProfilPhoto';
import Name from './profile/FullName';
import Adresse from './profile/Address';
const Bloc = () => {
    return (
<div class="container">
    <div class="row no-gutters justify-content-center">
         <div class=" col-lg-4">
            <Photo/>  
         </div>
         
         <div class="row align-items-center bg-info text-white  justify-content-center">
            <div class=" col-lg-6 ">
              <Name/>
              <Adresse/>
            </div>
         </div>
         
    </div>
</div>
        
    );
}
export default Bloc ;
