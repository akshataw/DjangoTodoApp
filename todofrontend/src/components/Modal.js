import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

export default class CustomModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    if(event.target.type === "checkbox") {
      value = event.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({
      activeItem
    });
  };
  render(){
    const { toggle, onSave } = this.props;
    return(
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Todo Item
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={ this.state.activeItem.title }
                onChange={ this.handleChange }
                placeholder="What needs to be done?"
                />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={ this.state.activeItem.description }
                onChange={ this.handleChange }
                placeholder="Describe todo..."
                />
            </FormGroup>
            <FormGroup check>
              <Label for="done">
              <Input
                type="checkbox"
                name="done"
                checked={ this.state.activeItem.done }
                onChange={ this.handleChange }
              />
                Done
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
