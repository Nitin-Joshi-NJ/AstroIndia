// import { Modal } from "@mui/material";
import  { useState } from 'react';
// import Modal from "@mui/material/Moda.0l";
import BasicModal from './BasicModal';
import { Modal } from '@mui/material';
// import BasicModal1 from './BasicModal1';
// import Box from "@mui/material/Box";
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
  }; 

function Horoscope(){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("");

    function CurrentDate() {
        // Get the current date
        const currentDate = new Date();
      
        // Format the date as a string
        const dateString = currentDate.toDateString();
        return dateString
    }

    const handleOpen = (e,value) => {
      setOpen(true);
      if(value=='Aries'){
        console.log('hello')
        const data = {
          name: "Aries",
          horoscope:
            "Partnership, business problems, past disappointments – all need your attention today. Stop waiting for the right time to attend to them. You will be hearing from someone much unexpected, like a voice from your past.",
          message: "Priorities what is essential.",
          color: "Green",
          number: "28",
        };
        setData(data)
      }else if(value=='Taurus'){
        const data = {
          name: "Taurus",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Gemini'){
        const data = {
          name: "Gemini",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Cancer'){
        const data = {
          name: "Cancer",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Leo'){
        const data = {
          name: "Leo",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Virgo'){
        const data = {
          name: "Virgo",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Libra'){
        const data = {
          name: "Libra",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Scorpio'){
        const data = {
          name: "Scorpio",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }
      else if(value=='Sagittarius'){
        const data = {
          name: "Sagittarius",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Capricorn'){
        const data = {
          name: "Capricorn",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }
      else if(value=='Aquarius'){
        const data = {
          name: "Aquarius",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }else if(value=='Pisces'){
        const data = {
          name: "Pisces",
          horoscope:
            "“The Moon” takes you through a difficult karmic situation. Work will progress satisfactorily. You may be in an irritable mood and will be prone to losing your temper with friends and family and may resent their advice or well meaning efforts.",
          message: "Get all the facts before making decisions.",
          color: "Purple",
          number: "33",
        };
        setData(data)
      }
    };

    const handleClose = () => {
      setOpen(false);
    };
    

    // let previousDate = new Date().getDate();
    //     console.log('p',previousDate)
    //     function checkDate(){
    //         const currentDate = new Date().getDate();
    //         console.log('c',currentDate)
      
    //         if (currentDate !== previousDate) {
        
    //         console.log("Date has changed!");
    
    //          previousDate = currentDate;
    //         }
    //     }

    // setInterval(checkDate,10000)

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/4eNOPAXh-cc"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6">
              <h2 style={{ textAlign: "center" }}>Daily Horoscope</h2>
              <h5 style={{ textAlign: "center" }}>
                <CurrentDate />
              </h5>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/bfi_thumb/aries-1-oy0lgiml1ln8l2t85f4c697cqnroau3umllyi4f9w2.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Aries')}
                      // onClick={()=>{<BasicModal1/>}}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                        position: "relative",
                        top: "10px",
                      }}
                    >
                      Aries
                      <br />
                      MAR 21-APR 20
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/taurus.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Taurus')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Taurus
                      <br />
                      APR 21-MAY 20
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/gemini.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Gemini')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Gemini
                      <br />
                      MAY 22-JUNE 21
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/cancer.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Cancer')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Cancer
                      <br />
                      JUNE 22-JULY 22
                    </p>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/leo.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Leo')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      LEO
                      <br />
                      JUL 23-AUG 23
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/virgo.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Virgo')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Virgo
                      <br />
                      AUG 24-SEP 23
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/libra.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Libra')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Libra
                      <br />
                      SEP 24-OCT 23
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/scorpio.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Scorpio')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Scorpio
                      <br />
                      OCT 24-NOV 22
                    </p>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/sagittarius.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Sagittarius')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Sagittarius
                      <br />
                      NOV 23-DEC 21
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/capricorn.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Capricorn')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Capricorn
                      <br />
                      DEC 22-JAN 20
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/aquarius.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Aquarius')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Aquarius
                      <br />
                      JAN 21-FEB 19
                    </p>
                  </p>
                  <p>
                    {" "}
                    <img
                      src="https://www.astroindia.com/wp-content/uploads/2018/08/pisces.png"
                      alt=""
                      style={{ paddingLeft: "15px" }}
                      onClick={(e)=>handleOpen(e,'Pisces')}
                    />
                    <br />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#de1f26",
                        textAlign: "center",
                      }}
                    >
                      Pisces
                      <br />
                      FEB 20-MAR 20
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BasicModal isOpen={open}  data={data} setClose={handleClose}/>
        {/* <BasicModal1/> */}

      </>
    );
}

export default Horoscope;