import React from 'react'

function ProductDescription({planet}) {
  return (
    <div style={{
        display:'grid',
        maxHeight:'100%',
        gridTemplateRows:'1fr 1fr',
        gridTemplateColumns:'1fr 1fr',
        paddingRight:'32px'
    }}>
        <img style={{
            width:'100%',
            height:'100%',
            borderRadius:'20px',
            objectFit:'cover'
        }} 
        src={planet.profilePicture} alt="" />
        <h3 className='productHeader' style={{paddingLeft:'24px', paddingTop:'8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

        <h6 className='productDescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Auctor elit sed vulputate mi sit amet mauris commodo. Est sit amet facilisis magna. Sed nisi lacus sed viverra. Ut pharetra sit amet aliquam id diam maecenas. Lectus mauris ultrices eros in cursus. Id aliquet risus feugiat in ante metus dictum. Dolor sed viverra ipsum nunc aliquet bibendum enim. Ac odio tempor orci dapibus ultrices. Vitae proin sagittis nisl rhoncus mattis.
            <br /><br/>
            Non enim praesent elementum facilisis leo. Magna eget est lorem ipsum dolor. Eget nunc scelerisque viverra mauris in aliquam. Porttitor rhoncus dolor purus non. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin sed libero enim sed. Luctus accumsan tortor posuere ac ut consequat semper.
        </h6>
    </div>
  )
}

export default ProductDescription