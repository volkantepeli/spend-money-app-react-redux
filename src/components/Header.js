import React from 'react';

function Header() {
  return (
    <div style={{backgroundColor : 'white', textAlign:'center'}}>
        <div style={{paddingTop:'15px'}}>
            <img className='photo' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' 
            alt='Elon Musk' />
        </div>
        <h1 className='name'>Spend Elon Musk' Money</h1>
    </div>
  )
}

export default Header