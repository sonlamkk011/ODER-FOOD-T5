

const TestHome = () => {
    return(
        <>
        <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center mb-3 pb-3">
      <div className="col-md-12 heading-section text-center ftco-animate">
        <span className="subheading">Featured Products</span>
        <h2 className="mb-4">Our Products</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
    </div>
  </div>
  <div className="container">   
    <div className="row">
      <div className="col-md-6 col-lg-3 ftco-animate">
        <div className="product">
          <a href="#" className="img-prod">
            <img
              className="img-fluid"
              src="Assets/images/product-1.jpg"
              alt="Colorlib Template"
            />
            
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3>
              <a href="#">Bell Pepper</a>
            </h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className="mr-2 price-dc">$120.00</span>
                  <span className="price-sale">$80.00</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <a
                  href="#"
                  className="add-to-cart d-flex justify-content-center align-items-center text-center"
                >
                  <span>
                    <i className="ion-ios-menu" />
                  </span>
                </a>
                <a
                  href="#"
                  className="buy-now d-flex justify-content-center align-items-center mx-1"
                >
                  <span>
                    <i className="ion-ios-cart" />
                  </span>
                </a>
                <a
                  href="#"
                  className="heart d-flex justify-content-center align-items-center "
                >
                  <span>
                    <i className="ion-ios-heart" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default TestHome;