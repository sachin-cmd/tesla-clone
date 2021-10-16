import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'

function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            id="models"
            description="
            Order Online for Touchless Delivery"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            backgImg="model-s.jpg"

            
            />
            <Section
            title="Model X"
            id="modelx"
            
           
            
            description="
            Order Online for Touchless Delivery"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            backgImg="model-x.jpg"
          
          />
            <Section
            title="Model Y"
            description="
            Order Online for Touchless Delivery"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            backgImg="model-y.jpg"

            />
            <Section
            title="Model 3"
            description="
            Order Online for Touchless Delivery"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            backgImg="model-3.jpg"

            />

            <Section
             title="Solar Panel"
             description="
             Order Online for Touchless Delivery"
             leftBtn="Custom Order"
             rightBtn="Existing inventory"
             backgImg="solar-panel.jpg"
             />

             <Section
             title="Solar Roof"
             description="
             Order Online for Touchless Delivery"
             leftBtn="Custom Order"
             rightBtn="Existing inventory"
             backgImg="solar-roof.jpg"
             />
                 <Section
             title="Accessories"
             description="
             Order Online for Touchless Delivery"
             leftBtn="Shop Now"
             
             backgImg="accessories.jpg"
             />

        </Container>
    )
}

export default Home

const Container= styled.div`
height:100vh;
`
