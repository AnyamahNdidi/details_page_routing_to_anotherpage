import React from 'react'
import "./Cardstyle.css"
import img from "./img/1ba96cb0-66ff-49a8-9df5-afdb4884c9e5.png"
import { app } from "../../base"
import { Button } from "antd"
import 'antd/dist/antd.css';
import DetailScreenModal from './DetailScreenModal'
import { Link } from "react-router-dom"

const db = app.firestore().collection("student")

function Card() {
  const [data, setdata] = React.useState([])
  const [open, setOpen] = React.useState(true)



  const getData = async () => {
    await db.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      setdata(items)
    });

  }

  console.log(data)
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>

      {
        data.map(({ title, avatar, paragraph, dese, img1, img2, datails, avater, id }) => (
          <div className="AllCard">
            <div className="cardimg">
              <img src={img1} style={{ width: "100%", height: "100%" }} />

            </div>
            <div className="cardcom">

              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>
            <Link to={`/details/${id}`}>
              <div className="cirleImg">
                <img src={avatar} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />

              </div>
            </Link>

            <div>



            </div>
            <div>
              {
                open ? (<DetailScreenModal
                  id={id}
                  title={title}
                  datails={datails}
                  dese={dese}
                  avatar={avatar}
                  img1={img1}
                  img2={img2}


                />) : null
              }
            </div>

          </div>

        ))
      }
    </>
  )
}

export default Card
