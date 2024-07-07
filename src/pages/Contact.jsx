import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const body = data.body;
    const subject = data.subject;
    // The myEmail variable should be replaced with your email address
    const myEmail= "replace with your email address";
    const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + email + ", Message: " + body)}`;
    window.location.href = mailToLink;
  }
  return (
    <main className="contact-container">
      <section className="border border-2 p-2 rounded-md form-container">
      <h2 className="text-2xl font-medium text-center">Contact Form</h2>
      <p className="text-lg text-center">If you are interested in my work, fill out this form below</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
          <p>Your Email</p>
          <input
          {...register("email", { required: true })}
          type="email" 
          id="email" 
          placeholder="Enter your email here"
          required
          />
        </label>
        <label htmlFor="subject">
          <p>Subject</p>
          <input 
          {...register("subject", { required: true })}
          type="text" 
          id="subject"
          placeholder="Enter your subject here"
          required
          />
        </label>
        <label htmlFor="body">
          <p>Body</p>
          <textarea
          {...register("body", { required: true })}
          id="body" 
          placeholder="Enter your message here"
          required
          />
        </label>
        <button type="submit">Send Email</button>
      </form>
      </section>
    </main>
  )
}

export default Contact