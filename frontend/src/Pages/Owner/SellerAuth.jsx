import React, { useState } from 'react'
import SellerSignup from '../../Model/Owner/sellerSignup'
import SellerSignin from '../../Model/Owner/sellerSignin'

const SellerAuth = () => {
    const [authType,setAuthType] = useState("signup")
  return (
    <div>
        <div></div>
        <div>
            {
                authType === "signup"?
                <SellerSignup authType = {setAuthType} />
                :
                <SellerSignin authType = {setAuthType} />
            }
        </div>
    </div>
  )
}

export default SellerAuth