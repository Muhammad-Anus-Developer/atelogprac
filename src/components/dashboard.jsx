import "../App.css"
import Bootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "./button";
// import Sidebar from "./sidebar";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useRef, useState } from "react";
import METCondition from "./metCondition";
import Grid from '@mui/material/Grid';
import Boxes from "./boxes";


// import MyChart from './Charts';
// import Demo from "./newchart";
const Dashboard = () => {
   
// pop up coding 
const [popopen, setpopopen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickpopopen = (scrollType) => () => {
    setpopopen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setpopopen(false);
  };

  const descriptionElementRef = useRef(null);
 useEffect(() => {
    if (popopen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [popopen]);

//   end pop up coding 
    return (
<>


  
       <div className="row">

  <Boxes />
        <div className="font back8" >
            <div className="App grad">
            
{/* ------------------------ Navbar --------------------- */}



            </div>



                    <div className="col-md-1"></div>

                </div>
                
            </div>
           {/* <Card sx={{marginLeft:"5%",marginRight:"5%", marginTop:".6%", border:"1px solid gray"}}>
               <CardContent> */}
            <div className="mx-2 py-5">
                <div className="row" >
                    <div className="col-md-6">

                    <h2 className="py-1 px-1 text-dark fs-1 mx-4 my-2" style={{fontWeight:"bolder", fontFamily:"Poppins"}} >
<span className="px-1 py-1" style={{ borderRadius:"150px" , marginRight:"30px"}}>
                    <BallotOutlinedIcon  style={{color:"#F73F3F", fontSize:"40px"}} />
                       </span>
                        E- LOG</h2>

                    </div>
                    
                  
                </div>
            </div>
            {/* </CardContent>
            </Card> */}

            <Card sx={{margin:"1%" , cursor:"pointer"}} onClick={handleClickpopopen('paper')}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-4"></span>
    </div>
    <div className="col-7" >
        <Typography  variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Photometric Test, Runway 30 Photometric Test
        </Typography>
        </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-3" style={{ border: "1px solid grey", fontSize:"17px", borderRadius:"50px" ,width:"140px" }} >OMA</button>

            </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-1" style={{ border: "1px solid grey",  fontSize:"15px", borderRadius:"50px",width:"140px" }} >18/10/21 <br/> 18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}} onClick={handleClickpopopen('paper')}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-4"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Runway Inspection, RWY Lighting Inspection
        </Typography>
        </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-3" style={{ border: "1px solid grey", fontSize:"17px", borderRadius:"50px" ,width:"140px" }} >OMA</button>

            </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-1" style={{ border: "1px solid grey",  fontSize:"15px", borderRadius:"50px",width:"140px" }} >18/10/21 <br/>18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}} >
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-4"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}} onClick={handleClickpopopen('paper')}>
        BCD, MOB 5, NTR
        </Typography>
        </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-3" style={{ border: "1px solid grey", fontSize:"17px", borderRadius:"50px" ,width:"140px" }} >OMA</button>

            </div>
            <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-1" style={{ border: "1px solid grey", fontSize:"15px", borderRadius:"50px" ,width:"140px" }} >18/10/21 <br/>18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}} onClick={handleClickpopopen('paper')}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-4"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Runway Inspection
        </Typography>
        </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-3" style={{ border: "1px solid grey", fontSize:"17px", borderRadius:"50px" ,width:"140px" }} >OMA</button>

            </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-1" style={{ border: "1px solid grey", fontSize:"15px", borderRadius:"50px" ,width:"140px" }} >18/10/21 <br/>18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>


            <Card sx={{margin:"1%"}} onClick={handleClickpopopen('paper')}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-4"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Runway Inspection
        </Typography>
        </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-3" style={{ border: "1px solid grey", fontSize:"17px", borderRadius:"50px" ,width:"140px" }} >OMA</button>

            </div>
        <div className="col-2">
        <button type="button" className="btn mx-5 px-4 py-1" style={{ border: "1px solid grey", fontSize:"15px", borderRadius:"50px",width:"140px" }} >18/10/21 <br/>18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>

            





{/* start pop coding  */}
      <Dialog
        open={popopen}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description" 
        
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title">MET Condition</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} >
          <DialogContentText sx={{width:"800px"}}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              
              <METCondition />
          </DialogContentText>
        </DialogContent>
      
      </Dialog>
  {/* end pop up coding  */}
      
        
        </>
    )
}


export default Dashboard;