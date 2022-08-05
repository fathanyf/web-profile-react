import React from "react";
import "./Home.css"
import Slider from "../components/slider/slider"
import FotoNanda1 from "../components/foto/fotonandaAG18.jpg"

const Home = () => {
  return (
    <>
    <section className="section1">
      <div className="max-width">
        <div className="home-content">
        <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
        <Slider
        imageSrc={FotoNanda1}
        title={"Selamat Datang di Website Saya."}
        subtitle={
          "Saya Fathan Yuda Febrianda"
        }
      />
        </div>
      </div>
        </div>
      </div>
    </section>
      
    <section className="section2">
      <div>
        <h2 className="judul-section2">Tentang Saya</h2>
        <div className="section2-content">
          <div className="sec2-foto">
            <img src="./foto/fotonanda1.PNG" className="foto1"/>
          </div>
          <div className="sec2-text">
            <p className="text">
              Saya Saya Fathan Yuda Febrianda dan biasa dipanggil dengan Fathan. 
              Saya adalah lulusan S1 Hubungan Internasional UPNVJ dengan predikat 
              Cum Laude yang bernilai IPK 3.79/4.00. 
              <br/>
              <br/>
              Saat ini Saya bekerja di Ndaleme Mbahkung Homestay Malang sebagai
              Staf Homestay yang bertugas untuk menjamin kelancaran dan kerapihan operasional Homestay.
              <br/>
              <br/>
              Saya memiliki keahlian di bilang frontend web development, administrasi,
              penulisan artikel bidang kelilmuan hubungan internasional, dan kemampuan pengumpulan 
              dan analisa data dengan metode OSINT (<i>Open-Source Intelligence</i>).
              </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home