import React from 'react'
import DefaultLayout from '../layouts/Default'

const Home = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-full">
        <h2 className="font-black text-3xl text-yellow-500">REKADOS</h2>
      </div>
    </DefaultLayout>
  )
}

export default Home