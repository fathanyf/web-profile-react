import React from "react";
import "./Contact.css" 

const Contact = () => {
  return (
    <>
    <div className="judul-kontak">
      <h1>Kontak</h1>
    </div>

  <div className="konten-kontak">
  <section className="kontak-umum">
      <h2>Kontak Umum</h2>
      <div className="konten-kontak-umum">
          <div class="row">
            <i class="fas fa-user"></i>
              <div class="info">
                <div class="head">Nama</div>
                <div class="sub-title">Fathan Yuda Febrianda</div>
              </div>
          </div>

          <div class="row">
            <i class="fas fa-map-marker-alt"></i>
              <div class="info">
                <div class="head">Alamat</div>
                <div class="sub-title">Menteng, Jakarta Pusat</div>
              </div>
          </div>

          <div class="row">
            <i class="fas fa-fax"></i>
              <div class="info">
                <div class="head">Telefon</div>
                <div class="sub-title">0857-3321-1563</div>
              </div>
          </div>

          <div class="row">
            <i class="fas fa-envelope"></i>
              <div class="info">
                <div class="head">Email</div>
                <div class="sub-title">fathanupn17@gmail.com</div>
              </div>
          </div>
      </div>
    </section>

    <section className="kontak-sosmed">
      <h2>Media Sosial</h2>
      <div className="konten-kontak-sosmed">
        <div class="row">
               <i class="fab fa-linkedin-in"></i>
              <div class="info">
                <div class="head">linkedin</div>
                <div class="sub-title"><a href="https://www.linkedin.com/in/fathanyf/">Fathan Yuda Febrianda</a></div>
              </div>
          </div>

          <div class="row">
              <i class="fab fa-github"></i>
              <div class="info">
                <div class="head">Github</div>
                <div class="sub-title"><a href="https://github.com/fathanyf">fathanyf</a></div>
              </div>
          </div>
      </div>
    </section>
  </div>
    
    </>
  );
};

export default Contact