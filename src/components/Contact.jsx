import React from 'react'


const Contact = () => {
  return (
    <div>
      
 

 <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Contact</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/message.png" alt="Contact us"
              height="200px" width="200px" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="exampleForm" 
                className="form-label">Full Name</label>
                <input type="email" class="form-control"id="exampleForm" 
                placeholder="ndeye amie"/>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" 
                className="form-label">Email address</label>
                <input type="email" className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"/>
              </div>
                
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" 
                className="form-label">Example textarea</label>
                <textarea className="form-control" 
                id="exampleFormControlTextarea1"
                 rows="3"></textarea>
              </div>
              <button type="submit" className="btn
               btn-outline-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </div> 
     
    </div>
  )
}

export default Contact