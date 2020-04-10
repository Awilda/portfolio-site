import React from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal';

class ContactPage extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        isShowing: false
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }


    handleSubmit = (e) => {
        e.preventDefault(e);

        const { name, email, message } = this.state

        let templateParams = {
          from_name: name,
          from_email: email,
          message_html: message
      };

      emailjs.send(
          'awildacouverthier@gmail.com',
          'template_csJzLVxQ_clone',
          templateParams,
          'user_y6Peqi25qrWqGpFKhj8UY'
          );
      this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
  })
};

handleChange = (e) => {
    const value = e.target.value;
    this.setState({
        ...this.state,
        [e.target.name]: value
    });
};

render() {
    return (
        <div>
        <h1 className="contactPage__title" >Contact Me!</h1>
        <form className="contactPage__form" onSubmit={this.handleSubmit.bind(this)}>
            <label>Name</label>
            <input 
                type="text"
                name="name"
                value={this.state.name}
                className=""
                onChange={this.handleChange}
                placeholder="Name" />
            <label>Email</label>
            <input 
                type="email"
                name="email"
                value={this.state.email}
                className="contactPage__email"
                onChange={this.handleChange}
                placeholder="Enter email" />
            <label>Message</label>
            <textarea
                type="textarea"
                name="message"
                value={this.state.message}
                className="contactPage__message"
                onChange={this.handleChange}
                wrap="hard">
            </textarea>
            <input 
                type="submit" 
                value="Send" 
                onClick={this.openModalHandler} />
        </form>
        <Modal
        className="modal"
        show={this.state.isShowing}
        close={this.closeModalHandler}>
        </Modal>

        </div>
        );
    }
}

export default ContactPage;