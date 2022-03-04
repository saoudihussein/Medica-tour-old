import React, { Component } from 'react'

export class SocialProfiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <div class="row mt-5" >
    <div class="col">
      <label>Type d'interventions 1:<span style={{color:"red"}}>*</span></label>
      <select class="form-control" id="exampleFormControlSelect1" name='interventions1' onChange={inputChange('interventions1')} value={values.interventions1}>
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
    <select class="form-control" id="exampleFormControlSelect1" name="interventions2" onChange={inputChange('interventions2')} value={values.interventions2}>
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
    <div class="col-sm">
      <label>Date souhaitée d'intervention:<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Date souhaitée d'intervention" onChange={inputChange('interventions2')} value={values.interventions2} required/>
    </div>
    <div class="col-sm">
    <label>Etat civil:<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Type d'interventions 2" />
    </div>
  </div>

                <div className="row">
                    <div className="col-6">
                        <button style={{backgroundColor:"#dc3545",color:"white",borderRadius:"5px",borderColor:"#dc3545"}} onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button style={{backgroundColor:"#007bff",color:"white",borderRadius:"5px",borderColor:"#007bff"}} onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialProfiles
