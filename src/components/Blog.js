import React from "react";
import "./Blog.css"

const Blog = () => {
  return (
    <>
    <div>
      <h1>Portofolio</h1>
    </div>

    <section className="porto-web">
      <div><h2>Website</h2></div>
      <div><li><a href="https://www.malanghomestay.com/">Ndaleme Mbahkung Homestay</a></li></div>
      <div><li><a href="https://binar-ch11.herokuapp.com/">Tugas Challenge 11 Kursus FSW Wave 18 Binar Academy</a></li></div>
    </section>

    <section className="porto-tulis">
      <div><h2>Karya Ilmiah</h2></div>
      <div>
        <li><a href="https://repository.upnvj.ac.id/12519/">
          Skripsi:<br/><span className="skripsi">Analisa Keberhasilan Diplomasi Olahraga 
          Indonesia untuk Memasukan Paralayang ke dalam Asian Games 2018</span></a></li>
      </div>
    </section>
    </>
  );
};

export default Blog