import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Image, Grid, Segment } from 'semantic-ui-react'

class Sec2Part extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div>
          <div style={{backgroundColor: '#fd824e', padding: "30px", paddingBottom: "60px"}}>
            <Image src="/section-one-sticker.png" style={{position: "absolute"}}/>
            <div style={{textAlign: "center", marginBottom: "20px"}}>
              <span style={{backgroundColor: "#f9c70c", padding: "15px"}}>ร่วมสนุกง่ายๆ เพียง</span>
              <hr style={{borderTop: "3px solid black",width:"160px", marginLeft: "auto", marginRight: "auto"}}></hr>
            </div>
            <div style={{backgroundColor: "white", borderRadius: "25px", padding: "30px",position:"relative", zIndex: "2"}}>
              <li>เปิดแอป Grab และไปที่วิดเจ็ต "วงล้อแห่งความสุข"</li>
              <li>ใช้ ฌพฟิฑำไฟพกห 30 คะแนน เพื่อรับสิทธิ์หมุน 1 ครั้ง</li>
              <li>สามารถหมุนกี่ครั้งก็ได้</li>
              <li>คุณจะได้รับรางวัลทุกครั้งที่หมุน</li>
              <li>ร่วมสนุกได้ตั้งแต่วันที่ 19 ธค. 2536 - 9 มค. 2564</li>
            </div>
          </div>
          <div style={{backgroundColor: '#3abc60', padding: "30px"}}>
            <div style={{textAlign: "center", marginBottom: "15px", marginTop: "-40px"}}>
              <Image src="/section-two-sticker.png"style={{position: "absolute", right: "20px", marginTop: "-20px"}}/>
              <span style={{backgroundColor: "#f9c70c", padding: "15px"}}>ของรางวัลทั้งหมดมีดังนี้</span>
              <hr style={{borderTop: "3px solid black",width:"180px", marginLeft: "auto", marginRight: "auto"}}></hr>
            </div>
            <div style={{backgroundColor: "white", borderRadius: "25px", padding: "30px", position:"relative", zIndex: "2"}}>
              <li>ของพรีเมียม จาก Disney Tsum Tsum ประกอบไปด้วย 1) หมอนนุ่มน่ากอด 2)หมอนรองคอชวนฝัน 3)</li>
              <li>ส่วนลด GrabMart มูลค่ารวม 10,000 บาท</li>
              <li>ส่วนลด GrabMart มูลค่า 100 บาท (ขั้นต่ำ 320 บาท | จ่ายด้วย GrabPlay เท่านั้น)</li>
              <li>ส่วนลด GRabExpress (Bike) 50% ลดสูงสุด45 บาท</li>
              <li>ส่วนลด JustGrab มูลค่า 30 บาท</li>
              <p style={{textAlign: "center", backgroundColor: "#eeeeee",borderRadius: "15px", padding: "5px", marginTop: "20px"}}>*เป็นไปตามเงื่อนไขที่บริษัทฯ กำหนด</p>
            </div>
          </div>
        </div>
        )
    }
}

export default (Sec2Part)