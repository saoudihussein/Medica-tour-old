/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react'
import '../pages/index.css'
import emailjs from 'emailjs-com'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import LayoutPageContact from '../components/LayoutPageContact';
import { useHistory } from "react-router-dom";

function Devis() {
  let history = useHistory();
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    console.log("ffffffff"+form.current)
    emailjs.sendForm('service_2xzyfb8', 'template_gwhu49j', form.current, 'user_Q6HZeXB39h1agBN2yZC1w')
      .then((result) => {
        console.log("ffffff"+e)

        window.location.replace('/success');

        }, (error) => {
          window.location.replace('/');

          console.log(error.text);
      });
  };


  return (
    <div>
      <LayoutPageContact>
        <div className='container col-sm-w-100  col-md-w-75 col-lg-w-75 col-xl-w-75 col-xxl-w-75  justify-content-center pt-5'>
          <h1 className='titlePageIntern '>Devis</h1>
          <form ref={form} onSubmit={sendEmail}>
  <div class="row mt-5" >
    <div class="col">
      <label>Nom :<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Nom" name="nom" required/>
    </div>
    <div class="col">
    <label>Prénom :<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Prénom" name="prenom" />
    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Date de naissance :<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Date de naissance : " name="dateNaissance" required/>
    </div>
    <div class="col">
    <label>Pays:<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Pays"name="pays" />
    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Téléphone :<span style={{color:"red"}}>*</span></label>
      <input type="number" class="form-control" placeholder="Téléphone  " required/>
    </div>
    <div class="col">
    <label>Email :<span style={{color:"red"}}>*</span></label>
      <input type="email" class="form-control" placeholder="Email " />
    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Type d'interventions 1:<span style={{color:"red"}}>*</span></label>
      <select class="form-control" id="exampleFormControlSelect1">
      <option>sleeve gastrique </option>
      <option>Anneau gastrique </option>
      <option>By-pass gastrique</option>
      <option>Augmentation mammaire</option>
      <option>Lifting des seins</option>
      <option>Lipofilling mammaire</option>
      <option>Reduction mammaire</option>
      <option>Implant dentaire </option>
      <option>facette dentaire</option>
      <option>blachimment des dents</option>
      <option>Abdominoplastie</option>
      <option>mini abdominoplastie</option>
      <option>Lifting des bras </option>
      <option>Body lift</option>
      <option>Liposuccion </option>
      <option>Lifting des cuisses </option>
      <option>Augmentation des mollets </option>
      <option>Augmentation des fesses(implant)</option>
      <option>Lipofilling des fesses </option>
      <option>Blepharoplastie</option>
      <option>Genioplastie</option>
      <option>Lifting visage </option>
      <option>Mini lifting visage</option>
      <option>Otoplastie</option>
      <option>Rhinoplastie</option>
      <option>Nymphoplastie </option>
      <option>Penoplastie</option>
      <option>Vaginoplastie</option>
      <option>Biopsie testiculaire</option>
      <option>Fecondation in vitro</option>
      <option>Insemination artificielle</option>
      <option>Greffe cheveux </option>
      <option>Greffe de la barbe</option>
      <option>Greffe des sourcils</option>
      <option>Traitement Laser</option>
      <option>Mesobotox</option>
      <option>PRP </option>
      <option>Rhinoplastie Médicale</option>
      <option>Amincissement</option>
      <option>Fils Tenseurs</option>
      <option>Mésothérapie</option>
      <option>Toxine Botulique</option>
  
    </select>
        </div>
    <div class="col">
    <label>Type d'interventions 2:<span style={{color:"red"}}>*</span></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>sleeve gastrique </option>
      <option>Anneau gastrique </option>
      <option>By-pass gastrique</option>
      <option>Augmentation mammaire</option>
      <option>Lifting des seins</option>
      <option>Lipofilling mammaire</option>
      <option>Reduction mammaire</option>
      <option>Implant dentaire </option>
      <option>facette dentaire</option>
      <option>blachimment des dents</option>
      <option>Abdominoplastie</option>
      <option>mini abdominoplastie</option>
      <option>Lifting des bras </option>
      <option>Body lift</option>
      <option>Liposuccion </option>
      <option>Lifting des cuisses </option>
      <option>Augmentation des mollets </option>
      <option>Augmentation des fesses(implant)</option>
      <option>Lipofilling des fesses </option>
      <option>Blepharoplastie</option>
      <option>Genioplastie</option>
      <option>Lifting visage </option>
      <option>Mini lifting visage</option>
      <option>Otoplastie</option>
      <option>Rhinoplastie</option>
      <option>Nymphoplastie </option>
      <option>Penoplastie</option>
      <option>Vaginoplastie</option>
      <option>Biopsie testiculaire</option>
      <option>Fecondation in vitro</option>
      <option>Insemination artificielle</option>
      <option>Greffe cheveux </option>
      <option>Greffe de la barbe</option>
      <option>Greffe des sourcils</option>
      <option>Traitement Laser</option>
      <option>Mesobotox</option>
      <option>PRP </option>
      <option>Rhinoplastie Médicale</option>
      <option>Amincissement</option>
      <option>Fils Tenseurs</option>
      <option>Mésothérapie</option>
      <option>Toxine Botulique</option>
  
    </select>    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Date souhaitée d'intervention:<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Date souhaitée d'intervention" required/>
    </div>
    <div class="col">
    <label>Etat civil:<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Type d'interventions 2" />
    </div>
  </div>
  <div className='mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 01</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 02</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 03</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 04</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='mt-5'>
<label for="formFileLg" class="form-label" style={{fontSize:"25px"}}>Photos 05</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='mt-5'>
<label>Informations supplémentaires</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

</div>
<div className='mt-3 mb-5' style={{textAlign:"center"}}>
<button type="submit" style={{color:"white",backgroundColor:"#06b9d2",borderRadius:"5px",border:"10px solid #06b9d2"}}>Envoyer</button>
</div>
</form>

        </div>



      </LayoutPageContact>




    </div>
  )


}
export default Devis


