function Contact() {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;