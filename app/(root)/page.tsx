import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'David', lastName: 'Stine', email: 'david@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Hello"
            user={loggedIn?.firstName || 'Guest'} 
            subtext = 'Access and manage your account transactions more efficiently'
          />
        <TotalBalanceBox 
        accounts = {[]} 
        totalBanks = {1}
        totalCurrentBalance = {1250.34}
        /> 

        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions = {[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
      />

    </section>              
  )
}

export default Home