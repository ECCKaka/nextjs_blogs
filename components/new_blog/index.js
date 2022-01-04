
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function NewBlog( props ) {

  return (
    <>
      <Modal 
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={props.onSubmit}>
          <Form.Group className="mb-3" controlId="blog_title">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control type="text" placeholder="Enter a title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="blog_body">
            <Form.Label>Blog Body</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="blog body" />
          </Form.Group>
          <Form.Group controlId="blog_pic" className="mb-3">
            <Form.Label>Blog Picture</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button className="float-end" variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className="float-end" variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default NewBlog;