const About = () => {
  return (
    <div>
      <h1> About US </h1>
      <p>
        {" "}
        Welcome to <strong>Supreme Grill</strong>, the place where we serve
        mouth-watering fast food made with the finest ingredients. Whether
        you're craving juicy burgers, crispy fries, or a refreshing cold drink,
        we have something for everyone.{" "}
      </p>
      <p>
        Our mission is simple: to provide fast, delicious, and affordable food
        that brings smiles to your face. With a focus on quality and customer
        satisfaction, we strive to be the number one choice for fast food lovers
        in town.
      </p>
      <h3>Find us at :</h3>
      <p> Nonsense address</p>
      <iframe
        className="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.7083545774735!2d-0.12464352338582327!3d51.40841327179098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607ecd4f4b073%3A0xa3bb59a00a9ab38e!2sGrillmaster!5e0!3m2!1sen!2suk!4v1746271093830!5m2!1sen!2suk"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      "
    </div>
  );
};
export default About;
