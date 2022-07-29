import React from "react";

const About = () => {
  return (
    <>
    {/* Pengalaman */}
    <section className="Pengalaman">
      <h1>Pengalaman</h1>

      <div>
        <h2>Pendidikan</h2>
        <div className="pendidikan">
          <ul>
            <li><strong>S1 Hubungan Internasional UPNVJ</strong>
                <br/>
                <p>(2017 - 2021)</p>
            </li>
            <li><strong>SMA Negeri 79 Jakarta</strong>
                <br/>
                <p>(2014 - 2017)</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Pengalaman Pekerjaan dan Kegiatan</h2>
        <div className="pekerjaan">
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
    <section className="kemampuan">
      <h1>Kemampuan</h1>

      <div className="hardskill">
        <h2>Hard Skill</h2>
        <ul>
          <li>Microsoft Word.</li>
          <li>Microsoft Excel.</li>
          <li>Microsoft PowerPoint.</li>
          <li>Adobe Photoshop.</li>
          <li>Canva.</li>
          <li>Pengumpulan dan Analisa Data Metode OSINT<br/>(Open-Source Intelligence)</li>
        </ul>
      </div>

      <div className="frontend">
        <h2>Front-end Web Development</h2>
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
          <li>Bahasa Inggris.</li>
          <li>Bahasa Malaysia.</li>
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
          <li>Komunikatif dan mampu bekerjadengan tim.</li>
          <li>Mampu memecahkan masalah.</li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default About