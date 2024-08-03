import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
const { Title, Paragraph } = Typography;


function Hero() {
    return (
        <Layout style={{ minHeight: '50vh', backgroundColor: '#f0f2f5' }}>
          <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
             <div style={{display:"flex", justifyContent:"center"}}>
               <img src="/public/vecteezy_3d-purple-illustration-icon-of-shopping-bag-with-discount_29726217.png" alt="" style={{width:"10%"}} />
               <img src="/public/vecteezy_man-carrying-shopping-bags_24524036.png" alt="" style={{width:"10%"}} />
             </div>
              <h1 className="" >On <span style={{color:"#1677ff"}}>Store</span></h1>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel quas possimus perferendis voluptatem quam at facilis.</Paragraph>
            </div>
          </Content>
        </Layout>
      );
}

export default Hero
