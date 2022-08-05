import React from "react";
import "./About.css"

const About = () => {
  return (
    <>
  {/* Pengalaman */}
    <div className="judul-pengalaman">
    <h1 className="judul-pengalaman">Pengalaman</h1>
    </div>

    <section className="Pengalaman">
      <div className="pendidikan">
        <h2 className="judul-pendidikan">Pendidikan</h2>
        <div>
          <ul className="list-pendidikan">
            <li className="upn"><strong>S1 Hubungan Internasional UPNVJ</strong>
                <br/>
                <p>(2017 - 2021)</p>
            </li>
            <li className="sma"><strong>SMA Negeri 79 Jakarta</strong>
                <br/>
                <p>(2014 - 2017)</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="pekerjaan">
        <h2>Pengalaman Pekerjaan dan Kegiatan</h2>
        <div>
          <ul>
            <li><strong>Staf Homestay</strong>
                <br/>
                Ndaleme Mbahkung Malang
                <br/>
                <p>(Januari 2022 - Sekarang)</p>
            </li>
            <li><strong>Anggota Tim Penelitian Lapangan</strong>
                <br/>
                UPN Veteran Jakarta
                <br/>
                <p>(September - Desember 2020)</p>
            </li>
            <li><strong>Panitia Logistik Cabor Paralayang</strong>
                <br/>
                Asian Games 2018
                <br/>
                <p>(Mei - Agustus 2018)</p>
            </li>
            <li><strong>Panitia Pendataan Pemilih dan Petugas TPS Pemilu 2019</strong>
                <br/>
                KPU
                <br/>
                <p>(April 2018- April 2019)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Kemampuan */}
    <div className="judul-pengalaman">
        <h1 className="judul-kemampuan">Kemampuan</h1>
    </div>

    <section className="kemampuan">
      <div className="hardskill">
        <h2>Hard Skill</h2>
        <ul>
          <li>Microsoft Word.</li>
          <li>Microsoft Excel.</li>
          <li>Microsoft PowerPoint.</li>
          <li>Adobe Photoshop.</li>
          <li>Canva.</li>
          <li>Pengumpulan dan Analisa Data Metode OSINT<br/>(<i>Open-Source Intelligence</i>)</li>
        </ul>
      </div>

      <div className="frontend">
        <h2 className="judul-frontend">Front-end Web Development</h2>
        <ul>
          <li>HTML.</li>
          <li>CSS.</li>
          <li>Javascript (DOM).</li>
          <li>Jquery.</li>
          <li>React.js</li>
          <li>Website Statis.</li>
        </ul>
      </div>

      <div className="bahasa">
        <h2>Bahasa</h2>
        <ul>
          <li>Bahasa Indonesia.</li>
          <li>Bahasa Malaysia.</li>
          <li>Bahasa Inggris (TOEFL ITP: 533).</li>
          <li>Bahasa Mandarin (Pemula).</li>
        </ul>
      </div>

      <div className="Softskill">
        <h2>Soft Skill</h2>
        <ul>
          <li>Kerja teliti atau <i>detail-oriented</i>.</li>
          <li>Disiplin waktu.</li>
          <li>Mampu bekerja di bawah tekanan.</li>
          <li>Adaptif.</li>
          <li>Komunikatif dan mampu bekerja dengan tim.</li>
          <li>Mampu memecahkan masalah.</li>
        </ul>
      </div>
    </section>

{/* sertifikat */}
    <div className="judul-pengalaman">
        <h1 className="judul-sertifikat">Sertifikat Kemampuan</h1>
    </div>

    <section className="sertifikat">

    <div className="portoweb1">
        <li><strong>Full Stack Web Development Bootcamp Certification</strong>
        <br/>
        <p><strong>Binar Academy</strong></p>
        <br/>
        <p className="date-text">13 Juli 2022</p>
        <img src="./foto/binar-sertifikat.PNG" alt="porto-homestay" className="img-porto1"/>
        </li>
      </div>
      <div className="portoweb2">
      <li><strong>Full Stack Web Development Bootcamp Certification</strong>
        <br/>
        <p><strong>Binar Academy</strong></p>
        <br/>
        <p className="date-text">15 Agustus 2021</p>
        <img src="./foto/osint-web.png" alt="porto-homestay" className="img-porto1"/>
        </li>
      </div>

    </section>
    </>
  );
};

export default About