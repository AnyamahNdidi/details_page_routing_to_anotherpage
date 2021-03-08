import React from 'react'
import { app } from ".././../base"
import { useParams } from "react-router-dom"




const db = app.firestore().collection("student")
function DetailScreen() {
  const { id } = useParams();
  const [data, setdata] = React.useState(null);

  const getData = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setdata(docData.data());
  }

  React.useEffect(() => {
    getData();
  }, [])
  return (
    <div>

      <center>
        this is the profile
      </center>
      <div>
        {data && data.title}
      </div>
      <div>
        <img src={data && data.avatar} />
      </div>

    </div>
  )
}

export default DetailScreen
