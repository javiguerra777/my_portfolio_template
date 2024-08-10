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
      {/* <h2 className="text-2xl font-medium text-center">Contact Form</h2> */}
      <p className="text-lg text-center">Reach out below!</p><br />
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
          Email: <input
          {...register("email", { required: true })}
          type="email" 
          id="email" 
          placeholder=""
          required
          />
        </label>
        <label htmlFor="subject">
          Subject: <input 
          {...register("subject", { required: true })}
          type="text" 
          id="subject"
          placeholder=""
          required
          />
        </label>
        <label htmlFor="body">
          Message: 
          <textarea
          {...register("body", { required: true })}
          id="body" 
          placeholder=""
          required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      </section>
    </main>
  )
}

export default Contact