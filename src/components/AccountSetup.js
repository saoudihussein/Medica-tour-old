import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
            <div class="row mt-5" >
    <div class="col">
      <label>Nom :<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Nom" name="nom" onChange={inputChange('nom')} value={values.nom} required/>
    </div>
    <div class="col">
    <label>Prénom :<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Prénom" name="prenom" onChange={inputChange('prenom')} value={values.prenom}/>
    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Date de naissance :<span style={{color:"red"}}>*</span></label>
      <input type="date" class="form-control" placeholder="Date de naissance : " name="dateNaissance" onChange={inputChange('dateNaissance')} value={values.dateNaissance} required/>
    </div>
    <div class="col">
    <label>Pays:<span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" placeholder="Pays"name="pays" onChange={inputChange('pays')} value={values.pays} />
    </div>
  </div>
  <div class="row mt-5" >
    <div class="col">
      <label>Téléphone :<span style={{color:"red"}}>*</span></label>
      <input type="number" class="form-control" placeholder="Téléphone  " name='telephone' onChange={inputChange('telephone')} value={values.telephone} required/>
    </div>
    <div class="col">
    <label>Email :<span style={{color:"red"}}>*</span></label>
      <input type="email" class="form-control" placeholder="Email " name='email'  onChange={inputChange('email')} value={values.email}/>
    </div>
  </div>

                <div className="text-right pt-4">
                    <button style={{backgroundColor:"#007bff",color:"white",borderRadius:"5px",borderColor:"#007bff"}} onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default AccountSetup
