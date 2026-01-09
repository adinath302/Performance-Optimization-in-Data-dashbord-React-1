import React from 'react'

const Other = ({ setothercount, othercount }) => {
  console.log("Other rendered")

  return (
    <div>
      <div onClick={() => setothercount(othercount + 1)}>OTHERCOUNT - {othercount}</div>

      <div>
      </div>
    </div>
  )
}

export default Other;