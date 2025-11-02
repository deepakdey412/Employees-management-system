import React from 'react'
import { Button, Card } from 'react-bootstrap';

const App = () => {
 return (
    <div className="container mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
            This is a React Bootstrap card inside a Vite project.
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App