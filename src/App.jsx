import React from 'react'
import './App.css'
import { Nav, Hero, OurProducts, QualityProduct, Services, SpecialOffer, CustomerReview, Newsletter, Footer } from "./section/index"


const App = () => {
  return (
    <div className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <OurProducts />
      </section>
      <section className='xl:padding-l padding-b wide:padding-r'>
        <QualityProduct />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReview />
      </section>
      <section className='py-10'>
        <Newsletter />
      </section>
      <section className='padding-x padding-t bg-black pb-8'>
        <Footer />
      </section>
    </div>
  )
}

export default App

