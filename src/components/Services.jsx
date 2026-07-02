function Services() {
  const services = [
    {
      title: "Business Websites",
      description:
        "Professional, responsive websites for small businesses with modern layouts and mobile-friendly designs.",
    },
    {
      title: "Frontend Development",
      description:
        "Interactive websites built using HTML, CSS, JavaScript, and React with clean, organized code.",
    },
    {
      title: "Website Redesigns",
      description:
        "Refresh outdated websites with a modern appearance, improved usability, and responsive layouts.",
    },
    {
      title: "3D Models",
      description:
        "Custom low-poly and game-ready 3D models created in Blender for games and interactive projects.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;