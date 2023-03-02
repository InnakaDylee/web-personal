import React from 'react';

import upLogo from '../assets/img/logo.svg';
import ubuntu from '../assets/img/ubuntu.png';
import virtualbox from '../assets/img/virtual-box.png';
import stepInstall1 from '../assets/img/stepInstall1.png';
import stepInstall2 from '../assets/img/stepInstall2.png';
import stepInstall3 from '../assets/img/stepInstall3.png';
import stepInstall4 from '../assets/img/stepInstall4.png';
import stepInstall5 from '../assets/img/stepInstall5.png';
import stepInstall6 from '../assets/img/stepInstall6.png';
import stepInstall7 from '../assets/img/stepInstall7.png';
import stepInstall8 from '../assets/img/stepInstall8.png';
import setubuntu1 from '../assets/img/setubuntu1.png';
import setubuntu2 from '../assets/img/setubuntu2.png';
import setubuntu3 from '../assets/img/setubuntu3.png';
import setubuntu4 from '../assets/img/setubuntu4.png';
import setubuntu5 from '../assets/img/setubuntu5.png';
import setubuntu6 from '../assets/img/setubuntu6.png';
import setubuntu7 from '../assets/img/setubuntu7.png';
import setubuntu8 from '../assets/img/setubuntu8.png';
import setubuntu9 from '../assets/img/setubuntu9.png';
import setubuntu10 from '../assets/img/setubuntu10.png';
import setubuntu11 from '../assets/img/setubuntu11.png';


export function UbuntuTutor() {
    return (
        <div>
            <body className="body">
                <a  href="#" className="up-button" draggable="false"><img src={upLogo} draggable="false"/></a>
                <h1 className='flex'>Panduan untuk Menginstal Server Ubuntu di Virtual Box</h1>
                <p className="first-letter:w-3">Dalam tutorial ini, Anda akan belajar cara menginstal Server Ubuntu di mesin virtual menggunakan VirtualBox. VirtualBox adalah perangkat lunak virtualisasi yang kuat dan gratis yang memungkinkan Anda menjalankan beberapa sistem operasi pada satu mesin fisik. Ubuntu Server adalah sistem operasi populer dan open-source yang banyak digunakan untuk aplikasi server.</p>
                <p>Berikut adalah langkah-langkah untuk menginstal Ubuntu di VirtualBox:</p>
                <h3>1. Pertama, langkah yang perlu dilakukan adalah mendownload dan install Ubuntu Server dan VirtualBox dari link berikut:</h3>
                <ul className="link">
                <a  href="https://ubuntu.com/download/server#downloads">
                    <li>https://ubuntu.com/download/server#downloads</li>
                    <img className="content-imgli ubuntu" src={ubuntu} alt=""/>
                </a>
                <a  href="https://www.virtualbox.org/wiki/Downloads">
                    <li>https://www.virtualbox.org/wiki/Downloads</li>
                    <img className="content-imgli virtualbox" src={virtualbox} alt=""/>
                </a>
                <br></br>
                <img className="content-imgli stepinstal1" src={stepInstall1} alt=""/>
                <br></br>
                <img className="content-imgli stepinstal2" src={stepInstall2} alt=""/>
                </ul>
                <br></br>
                <h3>2. Setelah proses selesai, langkah selanjutnya buka VirtualBox.</h3>
                <p>1. klik “Add” untuk membuat dan mengsetup virtual machine baru :</p>
                <img className="content-img stepinstal3" src={stepInstall3} alt=""/>
                <p>2. Masukkan nama dan pilih lokasi file. Masukkan ISO Ubuntu yang sudah didownload tadi, lalu klik "Next" : </p>
                <img className="content-img stepinstal4" src={stepInstall4} alt=""/>
                <p>3. Buat Username dan password beserta nama hostname dan domainnya, lalu klik "Next" :</p>
                <img className="content-img stepinstal5" src={stepInstall5} alt=""/>
                <p>4. Tentukan besaran RAM dan Processor yang akan digunakan pada Virtual Box, lalu klik "Next" :</p>
                <img className="content-img stepinstal6" src={stepInstall6} alt=""/>
                <p>5. Tentukan besaran Hard Disk yang akan digunakan pada Virtual Box, lalu klik "Next" :</p>
                <img className="content-img stepinstal7" src={stepInstall7} alt=""/>
                <p>6. Berikut merupakan hasil summary dalam pembuatan virtual machine, terakhir klik "finish" :</p>
                <img className="content-img stepinstal8" src={stepInstall8} alt=""/>
                <h3>3. Selanjutnya, masuk ke virtual machine dan lakukan setup.</h3>
                <p>1. Pilih bahasa yang ingin digunakan :</p>
                <img className="content-img setubuntu 1" src={setubuntu1} alt=""/>
                <p>2. Pilih ingin menggunakan versi yang sekarang atau versi terbaru :</p>
                <img className="content-img setubuntu 2" src={setubuntu2} alt=""/>
                <p>3. Melakukan konfigurasi layout keyboard :</p>
                <img className="content-img setubuntu 3" src={setubuntu3} alt=""/>
                <p>4. Tetapkan koneksi jaringan untuk lingkup instalasi :</p>
                <img className="content-img setubuntu 4" src={setubuntu4} alt=""/>
                <p>5. Isi jika mempunyai alamat proxy (Optional) :</p>
                <img className="content-img setubuntu 5" src={setubuntu5} alt=""/>
                <p>6. Pilih konfigurasi storage atau buat custom storage layout (Optional) :</p>
                <img className="content-img setubuntu 6" src={setubuntu6} alt=""/>
                <p>7. Konfigurasi profil setting :</p>
                <img className="content-img setubuntu 7" src={setubuntu7} alt=""/>
                <p>8. Isi jika ingin membuat SSH untuk melakukan akses remote (Optional) :</p>
                <img className="content-img setubuntu 8" src={setubuntu8} alt=""/>
                <p>9. Pilih dan instal snap populer yang ingin dimiliki pada server :</p>
                <img className="content-img setubuntu 9" src={setubuntu9} alt=""/>
                <p>10. Tunggu beberapa saat untuk server siap melakukan instalasi dan reboot jika selesai :</p>
                <img className="content-img setubuntu 10" src={setubuntu10} alt=""/>
                <img className="content-img setubuntu 11" src={setubuntu11} alt=""/>
                <p2 className="gap"> Terima Kasih</p2>
      </body>
        </div>
    )
}

export default UbuntuTutor;