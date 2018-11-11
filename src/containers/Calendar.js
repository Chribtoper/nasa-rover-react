import React from 'react'
import '../stylesheets/Calendar.css'
import { Form, Radio, Divider } from 'semantic-ui-react'


const Calendar = () => {

  return(
    <div>

      <Form style={{margin: "50px", display: "flex", justifyContent: "space-around"}}>
        <Form.Field>
          <label> Sol 1 </label>
          <div className="Timeline-line" style={{background: "black" }} />
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <div className="Timeline-line" style={{background: "black" }} />
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <div className="Timeline-line" style={{background: "black" }} />
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <div className="Timeline-line" style={{background: "black" }} />
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <div className="Timeline-line" style={{background: "black" }} />
          <Radio style={{margin: "5px;"}}/>
        </Form.Field>
      </Form>
    </div>
  )
}

export default Calendar
