import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
