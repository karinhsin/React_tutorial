import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const App = () =>{
  const now = new Date()
  const [startDate, setStartDate] = useState(now)

  useEffect(() => {
    const year = (now - startDate) / (1000 * 60 * 60 * 24 * 365)
    
    if (year == 0){
      return
    }

    if (year > 18){
          alert("超過18歲")
        }
        else{
          alert("不超過18歲")
        }
    })

  return(
    <>
    <div className="wrap">
      <h2>請輸入生日</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    </>
  )
}

export default App