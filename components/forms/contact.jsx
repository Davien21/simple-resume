import Form from "./index";
import Joi from "joi-browser";

class ContactForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.string(),
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email Address"),
    message: Joi.string().required().label("Message"),
  };

  async componentDidMount() {}

  async openEmployeePage(id) {
    this.props.history.push(`/employees/listings/${id}`);
  }
  mayalpoq;
  doSubmit = () => {
    console.log("Success!");
  };

  render() {
    return (
      <div>
        <p className="title mb-4 semi-bold">Get in touch</p>
        <form
          onSubmit={this.handleSubmit}
          action={this.state.errors.length ?? "https://formspree.io/f/mayalpoq"}
          id="contact-form"
          method="POST"
        >
          {this.renderInput("name", "Your Name *")}
          {this.renderInput("email", "Email *")}
          {this.renderTextArea("message", "Message *")}
          {this.renderButton("Send Message")}
        </form>
      </div>
    );
  }
}

export default ContactForm;
