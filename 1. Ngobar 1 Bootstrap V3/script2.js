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

// Parallax efect about pada saat halaman di load tampilkan isi dari section about
$(window).on('load',function() {

    $(".pKiri").addClass("pMuncul");
    $(".pKanan").addClass("pMuncul");

});



// Parallax efek ketika di scroll kecepatan element didalam jumbotron berberbda

// tangkap element paling atas ketika di scroll
$(window).scroll(function(){

    // Mengetahui jarak antara element tujuan ke paling atas browser
    const myScroll = $(this).scrollTop();
// Atur element mana yang mau diatur kecepatannya
    $(".jumbotron img").css({
    "transform": "translate(0px,"+myScroll/4 +"%)"
});

$(".jumbotron h1").css({
    "transform": "translate(0px,"+myScroll/2 +"%)"
});

$(".jumbotron p").css({
    "transform": "translate(0px,"+myScroll +"%)"
});

// Parallax Landing element
// jika nilai scroll lebih besar dari jarak section ke atas broser
    if (myScroll > $(".portfolio").offset().top -250 ) {


        // Maka jalankan class landing untuk memunculkan gambar
        // $(".portfolio .thumbnail").addClass("landing");

        // ambil semua elementnya lalu setiap gambar
        $(".portfolio .thumbnail").each(function(i){
            // atur waktu kemunculannya
            setTimeout(function(){
                // sesuai indexnya (eq method digunakan untuk mengembalikan nilai element sesuai dengan index number)
                $(".portfolio .thumbnail").eq(i).addClass("landing")
           },300 *(i+1));
        });

           // Efek parallax pada about
   
    }

    


 

});







