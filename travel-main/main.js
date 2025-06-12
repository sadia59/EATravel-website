const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}

const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1', scrollrevealOption)
ScrollReveal().reveal('.home h4', {
    ...scrollrevealOption,
    delay: 800,
})
ScrollReveal().reveal('.home .btn-explore', {
    ...scrollrevealOption,
    delay: 1200,
})

ScrollReveal().reveal('.about .about-title', scrollrevealOption)
ScrollReveal().reveal('.about .about-desc', {
    ...scrollrevealOption,
    delay: 600,
})
ScrollReveal().reveal('.about .item-data', {
    ...scrollrevealOption,
    delay: 1200,
})
ScrollReveal().reveal('.btn-explore', {
    ...scrollrevealOption,
    delay: 2000,
})
ScrollReveal().reveal('.btn-more', {
    ...scrollrevealOption,
    delay: 2000,
})
ScrollReveal().reveal('.card', scrollrevealOption)
ScrollReveal().reveal('.card .image', {
    ...scrollrevealOption,
    delay: 600,
})
ScrollReveal().reveal('.card .content-card h4', {
    ...scrollrevealOption,
    delay: 1600,
})
ScrollReveal().reveal('.next .card .content-card  p', {
    ...scrollrevealOption,
    delay: 2000,
})
ScrollReveal().reveal('.next .card .content-card p', {
    ...scrollrevealOption,
    delay: 600,
})
ScrollReveal().reveal('form .input', scrollrevealOption)
ScrollReveal().reveal('row .card', scrollrevealOption)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginItem = document.querySelector('#login .item:nth-child(1)');
const registerItem = document.getElementById('register-box');
document.getElementById("register-box").style.opacity = "1";
document.getElementById("register-box").style.visibility = "visible";

showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginItem.style.display = 'none';
  registerItem.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginItem.style.display = 'block';
  registerItem.style.display = 'none';
});
function toggleReadMore(id, btn) {
  const desc = document.getElementById(id);
  desc.classList.toggle('expanded');
  btn.textContent = desc.classList.contains('expanded') ? 'Read Less' : 'Read More';
}

const translations = {
  en: {
    nav: ["home", "about us", "Services", "next", "blog", "gallery", "contact", "login/register"],
    home: {
  title: `Bridging <strong>the World, </strong> Building Alliances <strong>"Go places. Meet the world."</strong>`,
  subtitle: `"Because life’s best stories are written on the road."`
},
aboutTitle: "About Us",

    aboutTitle: "About Us",
    aboutDesc: [
      "At Establish Alliances Travel, we believe that travel is not just about visiting new places — it's about discovering new perspectives, cultures, and connections.",
      "From carefully curated budget-friendly packages to premium, tailor-made itineraries, we offer flexible travel solutions for every kind of explorer.",
      "With a team of passionate travel experts, global partners, and local insights, we ensure that your travel story is smooth, safe, and full of discovery."
    ],
    aboutData: ["completed trips", "Tour Guides", "Destinations"],
    exploreMore: "Explore More",
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer everything you need for a perfect travel experience",
    services: [
      { title: "Custom Travel Planning", desc: "Tailor-made itineraries based on your style, budget, and preferences." },
      { title: "Flight & Hotel Booking", desc: "Seamless ticketing and accommodation arrangements worldwide." },
      { title: "Visa Assistance", desc: "We help you with documents, appointments, and smooth visa processing." },
      { title: "Guided Tours", desc: "Join hand-picked group tours or enjoy private guided experiences." }
    ],

nextTitle: "Uncover the world’s most captivating destinations",
nextSubtitle: `"Travel with purpose, passion, and unforgettable experiences"`,

destinations: {
    paris: {
      title: "Paris, France",
      desc1: "The Arc de Triomphe is one of Paris’s most iconic landmarks, standing proudly at the top of the Champs-Élysées.",
      desc2: "Visitors can climb to the rooftop for panoramic views of the city, including the Eiffel Tower and the city’s star-shaped avenues."
    },
    lugano: {
      title: "Lugano, Switzerland",
      desc1: "Lugano is a picturesque lakeside town nestled between the Swiss Alps and Lake Lugano.",
      desc2: "Stroll along the lakefront promenade, explore historic piazzas, or take a cable ride up Monte Brè."
    },
    venice: {
      title: "Venice, Italy",
      desc1: "Venice is a floating masterpiece, built on canals and brimming with Renaissance architecture.",
      desc2: "Explore the iconic St. Mark’s Basilica, cross the charming Rialto Bridge, or lose yourself in the narrow alleyways and piazzas."
    }
  },

blogTitle: "Our Blog Highlights",
blogSubtitle: "Insightful content designed to enhance your travel planning and adventures!",
blogs: [
  "Curated travel insights to help you make informed, confident decisions every step of the way. From destination guides and itinerary tips to cultural etiquette and budgeting strategies — our blog equips you with the knowledge you need for seamless travel experiences.",
  "Expert guidance and practical tips tailored to elevate every aspect of your journey. Whether you're planning a weekend escape or a month-long adventure, our in-depth articles offer reliable advice on destinations, logistics, and must-have travel tools.",
  "Comprehensive resources crafted to simplify your planning and enrich your travel experience. We go beyond the basics — offering deep dives into unique places, smart travel hacks, and firsthand experiences to help you travel smarter, safer, and more meaningfully."
],

galleryTitle: "Photo Gallery",
gallerySubtitle: "Explore snapshots from around the world, taken by our expert photographers — and get ready for your own moment in the frame!",

footerNote: "Thanks for visiting our website! We truly appreciate your time and trust in us. At Establish Alliances Travel, we believe that travel is more than just a journey — it's a way to rediscover yourself. Whether you need flight bookings, hotel reservations, visa support, or full tour packages – our team is always here to help you explore the world with ease and confidence. From snow-capped mountains to vibrant cityscapes, every trip we plan is a promise of adventure, comfort, and meaningful memories.",
footerMessage: "Let us be part of your next great story. We look forward to serving you and building unforgettable travel experiences together. 🌍✈️"

  },
  bn: {
    nav: ["হোম", "আমাদের সম্পর্কে", "সেবা", "পরবর্তী", "ব্লগ", "গ্যালারি", "যোগাযোগ", "লগইন/রেজিস্টার"],
    home: {
  title: `বিশ্বকে <strong>সংযুক্ত করুন,</strong> সম্পর্ক গড়ুন <strong>"চলো যাই। বিশ্বকে জানি।"</strong>`,
  subtitle: `"কারণ জীবনের সেরা গল্পগুলো লেখা হয় ভ্রমণের পথে।"`
},
aboutTitle: "আমাদের সম্পর্কে",

    aboutTitle: "আমাদের সম্পর্কে",
    aboutDesc: [
      "Establish Alliances Travel-এ আমরা বিশ্বাস করি ভ্রমণ শুধু নতুন জায়গায় যাওয়া নয় — এটি নতুন দৃষ্টিভঙ্গি, সংস্কৃতি ও সম্পর্ক আবিষ্কার।",
      "বাজেট-সাশ্রয়ী প্যাকেজ থেকে শুরু করে প্রিমিয়াম কাস্টম ট্যুর — আমরা সব ধরনের ভ্রমণকারীর জন্য সেবা দিয়ে থাকি।",
      "আমাদের অভিজ্ঞ টিম, আন্তর্জাতিক অংশীদার এবং স্থানীয় গাইডদের সহায়তায় আপনার যাত্রা হবে নিরাপদ, মসৃণ ও উপভোগ্য।"
    ],
    aboutData: ["সম্পন্ন ট্রিপ", "ট্যুর গাইড", "গন্তব্য"],
    exploreMore: "আরও জানুন",
    servicesTitle: "আমাদের সেবা",
    servicesSubtitle: "আপনার ভ্রমণকে নিখুঁত করতে আমরা সব কিছুই অফার করি",
    services: [
      { title: "কাস্টম ট্রাভেল প্ল্যানিং", desc: "আপনার রুচি, বাজেট ও পছন্দ অনুযায়ী ট্যুর প্ল্যান তৈরি করা হয়।" },
      { title: "ফ্লাইট ও হোটেল বুকিং", desc: "বিশ্বব্যাপী টিকিট এবং হোটেল বুকিংয়ের সুবিধা।" },
      { title: "ভিসা সহায়তা", desc: "ডকুমেন্টেশন, অ্যাপয়েন্টমেন্ট ও সহজ ভিসা প্রসেসিং সহায়তা।" },
      { title: "গাইডেড ট্যুর", desc: "গ্রুপ বা প্রাইভেট ট্যুর — আপনার পছন্দমতো।" }
    ],
nextTitle: "বিশ্বের মনোমুগ্ধকর গন্তব্যগুলো আবিষ্কার করুন",
nextSubtitle: `"উদ্দেশ্য, আবেগ এবং স্মরণীয় অভিজ্ঞতা নিয়ে ভ্রমণ করুন"`,

destinations: {
    paris: {
      title: "প্যারিস, ফ্রান্স",
      desc1: "আর্ক দে ট্রায়োম্ফ প্যারিসের অন্যতম বিখ্যাত স্থাপনা, যা চ্যাম্পস-এলিসি'র শীর্ষে গর্বের সাথে দাঁড়িয়ে আছে।",
      desc2: "ভিজিটররা ছাদে উঠে শহরের প্যানোরামিক দৃশ্য উপভোগ করতে পারেন, যার মধ্যে আইফেল টাওয়ার ও তারকার মতো ছড়িয়ে থাকা রাস্তাও রয়েছে।"
    },
    lugano: {
      title: "লুগানো, সুইজারল্যান্ড",
      desc1: "লুগানো একটি মনোরম হ্রদের পাশের শহর, যা সুইস আল্পস ও লুগানো হ্রদের মাঝে অবস্থিত।",
      desc2: "লেকফ্রন্টে হাঁটুন, ঐতিহাসিক পিয়াজ্জাগুলো ঘুরে দেখুন, অথবা মোন্টে ব্রে-তে কেবল রাইড নিন।"
    },
    venice: {
      title: "ভেনিস, ইতালি",
      desc1: "ভেনিস একটি ভাসমান শিল্পকর্ম, যেটি ক্যানালের উপর নির্মিত এবং রেনেসাঁ স্থাপত্যে ভরপুর।",
      desc2: "সেন্ট মার্কস বাসিলিকা দেখুন, রিয়ালতো ব্রিজ পার হন, অথবা সরু গলিপথে হারিয়ে যান।"
    }
  },

blogTitle: "আমাদের ব্লগ হাইলাইটস",
blogSubtitle: "আপনার ভ্রমণ পরিকল্পনা ও অভিজ্ঞতা উন্নত করতে দারুণ কিছু তথ্য এখানে!",
blogs: [
  "যত্নসহকারে বাছাই করা ট্রাভেল ইনসাইট আপনাকে প্রতিটি ধাপে আত্মবিশ্বাসী সিদ্ধান্ত নিতে সাহায্য করবে। গন্তব্য গাইড, সফর পরিকল্পনা, সাংস্কৃতিক শিষ্টাচার এবং বাজেট কৌশল — সবই পাবেন আমাদের ব্লগে।",
  "বিশেষজ্ঞদের গাইডেন্স ও ব্যবহারিক টিপস যা আপনার যাত্রার প্রতিটি দিককে উন্নত করতে সহায়ক। ছুটির দিনে স্বল্পমেয়াদী সফর হোক বা দীর্ঘ অ্যাডভেঞ্চার — আমাদের আর্টিকেলগুলো বিশ্বস্ত ও প্রয়োজনীয় তথ্য সরবরাহ করে।",
  "আপনার ভ্রমণ পরিকল্পনাকে সহজতর ও সমৃদ্ধ করার জন্য তৈরি করা ব্যাপক রিসোর্স। আমরা সাধারণ তথ্যের বাইরে গিয়ে আপনাকে দিব অনন্য স্থান, স্মার্ট হ্যাক ও অভিজ্ঞতা ভিত্তিক পরামর্শ — যাতে ভ্রমণ হয় আরও নিরাপদ, সহজ ও অর্থবহ।"
],

galleryTitle: "ফটো গ্যালারি",
gallerySubtitle: "বিশ্বজুড়ে আমাদের এক্সপার্ট ফটোগ্রাফারদের তোলা কিছু চমৎকার মুহূর্ত দেখুন — আর প্রস্তুত হন নিজের গল্প লেখার জন্য!",


    footerNote: "আমাদের ওয়েবসাইট পরিদর্শনের জন্য ধন্যবাদ! আপনার মূল্যবান সময় এবং আমাদের প্রতি আস্থার জন্য আমরা আন্তরিকভাবে কৃতজ্ঞ। Establish Alliances Travel-এ আমরা বিশ্বাস করি, ভ্রমণ শুধু একটি যাত্রা নয় — এটি নিজেকে নতুনভাবে আবিষ্কারের একটি উপায়। আপনি যদি ফ্লাইট বুকিং, হোটেল রিজার্ভেশন, ভিসা সহায়তা বা সম্পূর্ণ ট্যুর প্যাকেজ চান — আমাদের টিম সর্বদা প্রস্তুত আপনাকে বিশ্ব অন্বেষণে সাহায্য করতে, সহজে এবং আত্মবিশ্বাসের সাথে। বরফে ঢাকা পর্বত থেকে শুরু করে প্রাণবন্ত নগরীর আলোয় ভরপুর প্রতিটি ভ্রমণই আমাদের জন্য একটি প্রতিশ্রুতি — সাহসিকতা, আরাম এবং অর্থবহ স্মৃতির।",
footerMessage: "চলুন, আমরা হই আপনার পরবর্তী অসাধারণ গল্পের অংশ। আমরা অপেক্ষা করছি আপনাকে সেবা দেওয়ার জন্য এবং একসাথে স্মরণীয় ভ্রমণের অভিজ্ঞতা তৈরি করার জন্য। 🌍✈️"

  }
};
function setLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("language", lang);

  const t = translations[lang];

  // Navigation
  document.querySelectorAll('.navigation .link a').forEach((el, i) => {
    el.textContent = t.nav[i];
  });
// Home section title and subtitle
document.querySelector('.home h1').innerHTML = t.home.title;
document.querySelector('.home h4').textContent = t.home.subtitle;

  // About Section
  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

  const aboutParagraphs = document.querySelectorAll('.about-desc p');
  aboutParagraphs.forEach((p, i) => {
    p.textContent = t.aboutDesc[i] || "";
  });

  // About data boxes
  const aboutData = document.querySelectorAll('.about .item-data .col span');
  aboutData.forEach((span, i) => {
    span.textContent = t.aboutData[i];
  });

  // Explore More buttons
  const exploreButtons = document.querySelectorAll('.btn-explore');
  exploreButtons.forEach(btn => {
    if (btn.firstChild) {
      btn.firstChild.textContent = t.exploreMore + " ";
    }
  });

  // Services section
  const servicesTitle = document.querySelector('.services .title');
  const servicesSubtitle = document.querySelector('.services .subtitle');
  if (servicesTitle) servicesTitle.textContent = t.servicesTitle;
  if (servicesSubtitle) servicesSubtitle.textContent = t.servicesSubtitle;

  const serviceCards = document.querySelectorAll('.services .card');
  serviceCards.forEach((card, i) => {
    const title = card.querySelector('h4');
    const desc = card.querySelector('p');
    if (title && desc && t.services[i]) {
      title.textContent = t.services[i].title;
      desc.textContent = t.services[i].desc;
    }
  });

  // Next Section Titles
const nextTitle = document.querySelector('.next .title');
const nextSubtitle = document.querySelector('.next .subtitle');
if (nextTitle) nextTitle.textContent = t.nextTitle;
if (nextSubtitle) nextSubtitle.textContent = t.nextSubtitle;

// Update destinations content
document.getElementById('paris-desc').innerHTML =
  `${t.destinations.paris.desc1} <span class="more-text">${t.destinations.paris.desc2}</span>`;

document.getElementById('lugano-desc').innerHTML =
  `${t.destinations.lugano.desc1} <span class="more-text">${t.destinations.lugano.desc2}</span>`;

document.getElementById('venice-desc').innerHTML =
  `${t.destinations.venice.desc1} <span class="more-text">${t.destinations.venice.desc2}</span>`;

// Update destination titles
document.querySelector('h4:contains("Paris")').textContent = t.destinations.paris.title;
document.querySelector('h4:contains("Lugano")').textContent = t.destinations.lugano.title;
document.querySelector('h4:contains("Venice")').textContent = t.destinations.venice.title;

// Blog Section
const blogTitle = document.querySelector('.blog .title');
const blogSubtitle = document.querySelector('.blog .subtitle');
if (blogTitle) blogTitle.textContent = t.blogTitle;
if (blogSubtitle) blogSubtitle.textContent = t.blogSubtitle;

// Blog Paragraphs
const blogParagraphs = document.querySelectorAll('.blog .items .card .content-card p');
blogParagraphs.forEach((p, i) => {
  if (t.blogs && t.blogs[i]) {
    p.textContent = t.blogs[i];
  }
});

// Gallery Section
const galleryTitle = document.querySelector('.gallery .title');
const gallerySubtitle = document.querySelector('.gallery .subtitle');
if (galleryTitle) galleryTitle.textContent = t.galleryTitle;
if (gallerySubtitle) gallerySubtitle.textContent = t.gallerySubtitle;


  const footerP = document.querySelectorAll('footer .content p');
if (footerP[0]) footerP[0].textContent = t.footerNote;
if (footerP[1]) footerP[1].textContent = t.footerMessage;

}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang); 
 


  const toggleContainer = document.getElementById("language-toggle");
  if (toggleContainer) {
    toggleContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const lang = e.target.getAttribute("data-lang");
        if (lang && typeof setLanguage === 'function') {
          setLanguage(lang); 
        }
      }
    });
  }
});
