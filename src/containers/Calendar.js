import React from 'react'
import { Form, Radio, Divider } from 'semantic-ui-react'

const Calendar = () => {

  return(
    <div>
      <Divider> </Divider>
      <Form style={{margin: "50px", display: "flex", justifyContent: "space-around"}}>
        <Form.Field>
          <label> Sol 1 </label>
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <Radio/>
        </Form.Field>
        <Form.Field>
          <label> Sol 1 </label>
          <Radio/>
        </Form.Field>
      </Form>
    </div>
  )
}

export default Calendar
