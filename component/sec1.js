import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Image, Grid } from 'semantic-ui-react'

class Sec1Part extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div style={{backgroundImage: 'url("/main-bg.png")', backgroundRepeat: "no-repeat",  backgroundSize: "cover"}}>
            <div style={{position: "absolute", left: "50%", transform: "translate(-162px, 20px)", zIndex: "2"}}>
              <Image src="/slot-game.png" style={{position: "fixed" ,minWidth: "300px", zIndex:"1"}}/>
              <Image src="/slot-gear.png" style={{position: "absolute" ,minWidth: "17px",  transform: "translate(264px, 258px)", zIndex:"1"}}/> 
              <Image src="/slot-hand.png" style={{position: "absolute" ,minWidth: "27px", transform: "translate(266px, 204px)"}}/>
              <Image src="/play-btn.png" style={{position: "absolute" ,minWidth: "96px", transform: "translate(248px, 118px)", zIndex:"2"}}/>
              <Image src="/element-8.png" style={{position: "absolute" ,minWidth: "81px", transform: "translate(-35px, 137px)"}}/>
              <Image src="/Packshot-All-online.png" style={{position: "absolute" ,minWidth: "300px", transform: "translate(0px, 315px)", zIndex:"2"}}/>
            </div>
            {/* <Image src="/slot-game.png" style={{position: "absolute" , left: "50%", transform: "translate(-50%, 10%)", zIndex: "2"}}/> */}
            <Grid columns='equal' style={{paddingTop: "20px", margin: "0px"}}>
              <Grid.Column width={3}>
                <Image src="/how-to-play.png" style={{align: "center", marginLeft: 'auto', marginRight: 'auto'}}/>
              </Grid.Column>
              <Grid.Column>
                <Image src="/element-1.png" style={{}}/>
              </Grid.Column>
              <Grid.Column>
                <Image src="/element-2.png" style={{marginLeft: 'auto', marginRight: '0'}}/>
              </Grid.Column>
              <Grid.Column width={3} style={{paddingLeft: "0px"}}>
                <Image src="/point.png" style={{minWidth: "60px", paddingLegt: "0px"}}/>
              </Grid.Column>
            </Grid>
            <Grid columns="equal" style={{margin: "0"}}>
              <Grid.Column style={{margin: "0", marginTop: "-50px"}}>
                <Grid.Row><Image src="/element-3.png" style={{paddingBottom: "120px", width: "50px"}}/></Grid.Row>
                <Grid.Row><Image src="/element-4.png" style={{width: "70px"}}/></Grid.Row>
                <Grid.Row><Image src="/element-7.png" style={{paddingTop: "50px",marginBottom: "20px"}}/></Grid.Row>
              </Grid.Column>
              <Grid.Column style={{margin: "0",marginTop: "-50px"}}>
                <Grid.Row><Image src="/element-9.png" style={{marginLeft: 'auto', marginRight: '20px', paddingBottom: "80px"}}/></Grid.Row>
                <Grid.Row><Image src="/element-5.png" style={{marginLeft: 'auto', marginRight: '0', paddingBottom: "20px"}}/></Grid.Row>
                <Grid.Row><Image src="/element-6.png" style={{marginLeft: 'auto', marginRight: '0', paddingBottom: "20px", width:"100px"}}/></Grid.Row>
              </Grid.Column>
            </Grid>
        </div>
        )
    }
}

export default (Sec1Part)