import img from './about-us-img.jpg'
import img1 from './4-oy73sa10n8oeqh6o59rxy4b2uel9d7q4xjw34ey04e.jpg'

function Navbar(){
    return (
      <>
        <nav class="navbar navbar-expand-md " style={{ background: "#393636" }}>
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    SERVICES
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    VASTU
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    BOOKS
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    ARTICLES
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    GALLERY
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    CONTACT
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    PAY NOW
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container" style={{ marginTop: "1px" }}>
          <div className="row">
            <div className="col-md-5">
              <div
                style={{
                  height: "380px",
                  background: "#393636",
                  padding: "10px",
                }}
              >
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Surname"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Date of Birth"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Address"
                    className="form-control"
                    style={{ marginBottom: "10px" }}
                  />
                  <label>
                    <input type="checkbox" name="agree" value="yes"  /><span style={{color:'white'}}> I accept terms and conditions.</span>
                  </label>
                  <button type="submit" class="btn btn-success form-control" style={{marginTop:'10px'}}>Submit</button>
                </form>
             
                 
              </div>
            </div>
            <div className="col-md-7">
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
        </div>
        <hr/>
      </>
    );
}

export default Navbar;