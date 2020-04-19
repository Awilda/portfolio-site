import React from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal';

class ContactPage extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        isShowing: false,
    }

    isDisabled() {
        if (this.state.name > 0 && this.state.email > 0 && this.state.message > 0) {
            this.setState({
                enabled: false
            });
        }
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
    this.isDisabled();
    const value = e.target.value;
    this.setState({
        ...this.state,
        [e.target.name]: value
    });
};

render() {
    return (
        <div className="contactPage">
        <h1 className="contactPage__title" >contact me!</h1>
        <div className="contactPage__social">
            <a href="https://github.com/Awilda" target="_blank">github</a>
            <a href="https://www.linkedin.com/in/awildacouverthier/" target="_blank">linkedin</a>
        </div>
        <form className="contactPage__form" onSubmit={this.handleSubmit.bind(this)}>
            <label>Name:</label>
            <input 
                type="text"
                name="name"
                value={this.state.name}
                id="contactPage__name"
                onChange={this.handleChange}
                required />
            <label>Email:</label>
            <input 
                type="email"
                name="email"
                value={this.state.email}
                id="contactPage__email"
                onChange={this.handleChange} 
                required/>
            <label>Message:</label>
            <textarea
                type="textarea"
                name="message"
                value={this.state.message}
                id="contactPage__message"
                onChange={this.handleChange}
                wrap="hard"
                required>
            </textarea>
            <button
                type="submit" 
                value="Send"
                id="contactPage__submitButton" 
                onClick={
                    this.state.name > 0 && this.state.email > 0 && this.state.message > 0 ? this.openModalHandler : this.closeModalHandler
                }
                >Send</button>
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