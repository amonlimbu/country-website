export const Contact = () => {
    return <section className="section-contact">
        <h2 className="container-title">contact us</h2>
        <div className="contact-wrapper container">
            <form action="">
            <input 
              type="text" 
              required autoComplete="false" 
              placeholder="Enter your Name" 
              name="username"
            />
            <input 
              type="email" 
              className="form-control"
              required autoComplete="false" 
              placeholder="Enter your Name" 
              name="username"
            />
            <textarea 
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="false"
            >
            </textarea>
            <button type="submit" value="send">send</button>
        </form>
        </div>
    </section>
}