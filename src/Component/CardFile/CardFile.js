import React from 'react'
import Card from './Card'

function CardFile() {
  return (
    <div>
      <center>


        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "center", height: "auto", }}>
          <div style={{ width: "70%", height: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", }}>
            <Card />

          </div>
        </div>
      </center>

    </div>
  )
}

export default CardFile
