import React from "react";
import "./Blog.css"

const Blog = () => {
  return (
    <>
    <div>
      <h1 className="judul-porto">Portofolio</h1>
    </div>

    <div><h2 className="judul-porto-web">Website</h2></div>
    <section className="porto-web">
    <div className="flex-container">
    <div>
      <li><a href="https://www.malanghomestay.com/">Ndaleme Mbahkung Homestay</a>
      <br/>
      <a href="https://www.malanghomestay.com/"><img src="./foto/web-homestay2.PNG" alt="porto-homestay" className="img-porto1"/></a>
      </li></div>
      <div><li><a href="https://binar-ch11.herokuapp.com/">Tugas Challenge 11 Kursus FSW Wave 18 Binar Academy</a>
      <br/>
      <a href="https://binar-ch11.herokuapp.com/"><img src="./foto/web-binar-ch11.PNG" alt="porto-binar" className="img-porto2"/></a>
      </li></div>
    </div>
    </section>

    <div><h2 className="judul-porto-tulis">Karya Ilmiah</h2></div>
    <section className="porto-tulis">
      <div>
        <li><a href="https://repository.upnvj.ac.id/12519/">
          Skripsi:<br/><span className="skripsi">Analisa Keberhasilan Diplomasi Olahraga 
          Indonesia untuk Memasukan Paralayang ke dalam Asian Games 2018.</span></a></li>
      </div>
    </section>
    </>
  );
};

export default Blog