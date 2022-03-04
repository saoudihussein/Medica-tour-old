import React, { Component } from 'react'

export class SocialProfiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        window.location = '../success';
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
         
  <div class="row mt-5">
  <div className='col-sm mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 01</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='col-sm mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 02</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
</div>
<div class="row mt-5">

<div className='col-sm mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 03</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='col-sm mt-5'>
<label for="formFileLg" class="form-label"style={{fontSize:"25px"}}>Photos 04</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
</div>
<div class="row mt-5">

<div className='col-sm mt-5'>
<label for="formFileLg" class="form-label" style={{fontSize:"25px"}}>Photos 05</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
<div className='col-sm mt-5'>
<label>Informations supplémentaires</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

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
