import fb from './icons8-facebook-circled-48.png'
import insta from './icons8-instagram-48.png'
import link from './icons8-linkedin-circled-48.png'
import tweet from './icons8-twitter-circled-48.png'

function Header(){
    return (
      <>
        <section
          id="header"
          style={{ backgroundColor: "#D60D25", height: "33px" }}
        >
          <div class="container">
            <div class="row">
              {/* <div class='col'>
                    <div style={{backgroundColor:'red'}}><p>hello header</p></div>
                    </div> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#F9F6B1" }}>
                  {" "}
                  <i
                    class="bi bi-telephone"
                    style={{ color: "white" }}
                  ></i>{" "}
                  991-469-9900, 981-034-9900, 976-944-9900 {"   "}
                  <i class="bi bi-envelope" style={{ color: "white" }}></i>{" "}
                  info@astroindia.com
                </span>
                <span>
                  <img src={fb} alt="fb" style={{ width: "25px" }} />
                  <img src={insta} alt="insta" style={{ width: "25px" }} />
                  <img src={link} alt="link" style={{ width: "25px" }} />
                  <img src={tweet} alt="tweet" style={{ width: "25px" }} />
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="container" style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'10px'}}>
         
            <img
              src="https://www.astroindia.com/wp-content/uploads/2018/08/logo.png"
              alt="" 
              style={{height:'90px',marginTop:'15px'}}
            />
            <img src='https://www.astroindia.com/wp-content/uploads/2018/09/logo-right-img2.png'
            alt=''/>
        </div>
      </>
    );
}

export default Header;