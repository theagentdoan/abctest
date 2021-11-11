import React from 'react'

export default function AddProductForm() {

    return (
        <div className="product-add col-12">
        <form action className="product-add__form">
          <div className="col-md-4">
          <label htmlFor="validationID" className="form-label product-add__box">ID</label> 
            <div className="input-group has-validation">
            
              <input type="text" className="form-control is-invalid " id="validationID" placeholder="Please choose an ID" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
             
            </div>
           
          </div>
          <div className="col-md-4">
          <label htmlFor="validationTitle" className="form-label product-add__box">Title</label>
            <div className="input-group has-validation">
            
              <input type="text" className="form-control is-invalid" id="validationTitle" placeholder="Please choose a title" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
              
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationPrice" className="form-label">Price</label>
            <div className="input-group has-validation">
              <input type="number" className="form-control is-invalid" id="validationPrice" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required placeholder="Please choose a price"/>
              
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDescription" className="form-label">Decsription</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control is-invalid" id="validationDescription" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required placeholder="Please choose a description"/>
              
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCategory" className="form-label">Category</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control is-invalid" id="validationCategory" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required placeholder="Please choose a category" />
             
            </div>
          </div>
          <div className="mb-3 product-add__image">
          <label htmlFor="validationImage" className="form-label">Image</label>
          <input multiple type="file" id="validationImage" className="form-control product-add_image" aria-label="file example" required />
            <div className="invalid-feedback">Example invalid form file feedback</div>
          <div className="product-add__imgbox">
            <div className="product-add__imgsmallbox">+</div>
            <div className="product-add__imgsmallbox">+</div>
            <div className="product-add__imgsmallbox">+</div>
            <div className="product-add__imgsmallbox">+</div>
            <div className="product-add__imgsmallbox">+</div>
            <div className="product-add__imgsmallbox">+</div>
          </div>
            
          </div>
          <div className="col-md-4 ">
            <label htmlFor="validationPromotion" className="form-label">Discount:</label>
            <div className="input-group ">
              <label htmlFor="validationPromotion" className="form-label product-add__discount">Promotion</label>
              <input type="text" className="form-control is-invalid" id="validationPromotion" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Please choose a promotion name"/>
              <div>
              <label htmlFor="validationFrom" className="product-add__dateText1">From</label> 
              <input type="date" className=" is-invalid product-add__date" id="validationFrom" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" />
              
              <label htmlFor="validationTo" className="product-add__dateText2">To</label>
              <input type="date" className=" is-invalid product-add__date" id="validationTo" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" />
              </div>
              <label htmlFor="validationPercent" className="form-label product-add__discount">Percentage</label>
              <input type="number" className="form-control is-invalid " id="validationPercent" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Please choose percentage"/> 
            </div>
          </div>
          <div className="mb-3 ">
            <button className="btn btn-primary product-add__submit" type="submit" >Submit form</button>
          </div>
        </form>
      </div>
      
    )
}
