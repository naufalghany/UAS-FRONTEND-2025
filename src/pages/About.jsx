import React from "react";

const About = () => {
  const container = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  };

  const heading = {
    color: "#14213d",
    textAlign: "center",
    marginBottom: "20px",
  };

  const subHeading = {
    color: "#fca311",
    fontSize: "20px",
    marginBottom: "10px",
  };

  const paragraph = {
    lineHeight: "1.6",
    marginBottom: "15px",
  };

  const card = {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const link = {
    color: "#fca311",
    textDecoration: "none",
    transition: "text-decoration 0.2s",
  };

  const linkHover = {
    textDecoration: "underline",
  };

  const list = {
    paddingLeft: "20px",
    marginBottom: "10px",
  };

  return (
    <div style={container}>
      <h1 style={heading}>About This Application</h1>
       <div style={card}>
        <h2 style={subHeading}>📖 Project Overview</h2>
        <p style={paragraph}>
          Covid ID adalah aplikasi frontend yang dibuat untuk memudahkan
          masyarakat mendapatkan informasi terbaru seputar Covid-19. Aplikasi
          ini memanfaatkan API publik untuk menampilkan data global, nasional,
          dan per provinsi.
        </p>
        <p style={paragraph}>
          Project ini dikembangkan sebagai bagian dari UAS Frontend dengan
          menggunakan teknologi modern seperti React, React Router, dan Axios.
        </p>
      </div>

     
      <div style={card}>
        <h2 style={subHeading}>📱 About Covid ID</h2>
        <p style={paragraph}>
          Aplikasi ini dibuat untuk menampilkan data Covid-19 global dan
          Indonesia secara real-time. Data diambil dari API publik.
        </p>
        <p style={paragraph}>Source Data:</p>
        <ul style={list}>
          <li>
            <a
              href="https://covid-fe-2023.vercel.app/api/global.json"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Global Data API
            </a>
          </li>
          <li>
            <a
              href="https://covid-fe-2023.vercel.app/api/indonesia.json"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Indonesia Data API
            </a>
          </li>
        </ul>
      </div>

      
      <div style={card}>
        <h2 style={subHeading}>👨‍💻 Developer</h2>
        <p style={paragraph}>
          Nama saya <strong>Naufal Ghany Ananta</strong>, mahasiswa yang
          tertarik dengan pengembangan web. Aplikasi ini dibuat sebagai bagian
          dari UAS Frontend Development.
        </p>
        <ul style={list}>
          <li>
            <a
              href="https://github.com/naufalghany"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              GitHub - @naufalghany
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/naufal-ghany-7b3b50251/"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              LinkedIn - Naufal Ghany Ananta
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default About;
