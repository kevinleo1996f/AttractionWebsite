import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Filter() {
    return (
        <div>
      <Form.Group className="mb-3">
        <Form.Label>Price:</Form.Label>
        <Form.Select placeholder="Price Range">
            <option>$20 to $70AUD</option>
            <option>$70 to $150AUD</option>
            <option>$150 to $400AUD</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Guests Range:</Form.Label>
        <Form.Select placeholder="Price Range">
            <option>2pp</option>
            <option>2 to 9pp</option>
            <option>2 to 20pp</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location:</Form.Label>
        <Form.Select placeholder="Price Range">
            <option>Yarra Valley</option>
            <option>Phillip Island</option>
            <option>Melbourne CBD</option>
        </Form.Select>
      </Form.Group>
        </div>
    )
}