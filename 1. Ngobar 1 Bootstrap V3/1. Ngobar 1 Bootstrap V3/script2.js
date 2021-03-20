// tangkap element / class tersebut, lalu lakukan aksi berikut ini
$(".page-scroll").on('click',function(e){

    // Ambil isi dari atributnya
    const tujuan = $(this).attr('href');
    // Ambil 1 elementnya (section)
    const elementTujuan = $(tujuan);
    // Cari tau berapa jarak dari body ke element tujuan
    // console.log(elementTujuan.offset());

    // Cegak aksi defaultnya(ketika di click berpindah class) menggunakan preventDefault
    // e.preventDefault();

    // Cari tau berapa jarak scroll dari tujuan ke body, yang cocok untuk element tujuan agar navbar tidak menutup tujuan
    // console.log($("html,body").scrollTop());

    // Lakukan animasi scrollnya
    $("html,body").animate({

        // apa yang mau dianimasikan?
        //  Mau dianimasikan kemana
        scrollTop: elementTujuan.offset().top -50

    },500);


    e.preventDefault();

});