import React from 'react'
import { ContainerWrapper } from '../elements'
import { Nav, Footer } from '../components'

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
)
