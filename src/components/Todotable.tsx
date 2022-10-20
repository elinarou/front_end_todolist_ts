import React from 'react';

export default function Todotable(props: any) {

    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            props.todos.map((todo: { date: string; desc: string; priority: string}, index: number) =>
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td>{todo.priority}</td>
                <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
              </tr>
            )
            }
          </tbody>
        </table>      
      </div>
    );
};