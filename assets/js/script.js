const hamburger = $('.toggle-btn');
const toggler   = $('#icon');
const sidebar   = $('#sidebar');
const backdrop  = $('#backdrop');

// fungsi untuk cek ukuran layar & atur state
function handleResize() {
  if (window.innerWidth < 992) {
    // selalu full (expand) di tablet/HP
    sidebar.addClass('expand');
    // toggler.removeClass('ri-arrow-right-double-line').addClass('ri-arrow-left-double-line');
  } else {
    // di desktop, biarkan sesuai toggle user
    // default expand (lebar penuh)
    // if (!sidebar.hasClass('expand')) {
    //   toggler.removeClass('ri-arrow-left-double-line').addClass('ri-arrow-right-double-line');
    // } else {
    //   toggler.removeClass('ri-arrow-right-double-line').addClass('ri-arrow-left-double-line');
    // }
  }
}

// panggil saat load pertama
handleResize();

// panggil setiap resize
$(window).resize(handleResize);

hamburger.click(function () {
  if (window.innerWidth >= 992) {
    // MODE DESKTOP: toggle "expand"
    sidebar.toggleClass('expand');
    // toggler.toggleClass('ri-arrow-right-double-line ri-arrow-left-double-line');
  } else {
    // MODE MOBILE/TABLET: buka sidebar + backdrop
    sidebar.addClass('active expand'); // selalu expand
    backdrop.addClass('active');
  }
});

// backdrop close
backdrop.click(function () {
  sidebar.removeClass('active');
  backdrop.removeClass('active');
});



// CHARTJS
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});