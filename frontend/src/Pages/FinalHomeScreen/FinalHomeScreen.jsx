import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import SearchBar from './SearchBar'
import NewJobButton from './NewJobButton'
import DisplayComponent from './DisplayComponent'

const FinalHomeScreen = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div>
            <SideBar />
        </div>
        <div className="my-4 ">
            <div className="flex">
              <div className='mx-20'>
                <SearchBar />
              </div>
              <div className='ml-auto'>
                <NewJobButton />
              </div>

            </div>
            <DisplayComponent />
        </div>
      </div>

    </>
  )
}

export default FinalHomeScreen
