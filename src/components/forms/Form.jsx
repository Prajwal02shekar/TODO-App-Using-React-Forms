import React from 'react'

const Form  = ({course,trainer,handleChange,handleSubmit}) => {
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="course">Course</label>
                <input type="text" placeholder='Enter course' name='course' required value={course} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="trainer">Trainer</label>
                <input type="text" placeholder='Enter Trainer name' name='trainer' required value={trainer} onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default  Form