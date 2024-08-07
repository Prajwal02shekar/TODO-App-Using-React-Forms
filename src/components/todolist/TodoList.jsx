import React, { Fragment } from 'react'

const TodoList = ({ items, handleDelete, handleUpdate }) => {
    console.log(items);
    return (
        <div className='todo'>
            <h2>Courses</h2>
            <table>
                <thead>
                    <th>id</th>
                    <th>course</th>
                    <th>trainer</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        items.length > 0 && items.map((course) => {
                            console.log(course);
                            return (
                                <Fragment key={course.id}>
                                    <tr key={course.id}>
                                        <td>{course.id.slice(0, 4)}</td>
                                        <td>{course.course}</td>
                                        <td>{course.trainer}</td>
                                        <td>
                                            <button className='update' onClick={() => handleUpdate(course.id)}>Update</button>
                                            <button className='delete' onClick={() => handleDelete(course.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </Fragment>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList