/* ============================================================
   JAYGANESH MANOHAR PRIVATE LIMITED — MAIN JAVASCRIPT
   script.js  |  Link this file on every page of the website
   ============================================================ */

/* ─── Mobile nav toggle ─── */
const hamburger = document.getElementById('ham');
const mobileNav = document.getElementById('mobnav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

/* Close mobile nav when a link is clicked */
mobileNav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
});

/* ─── Navbar shadow on scroll ─── */
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.10)';
  } else {
    navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)';
  }
});

/* ─── Contact form submission ─── */
function doSub() {
  var name  = document.getElementById('fn').value.trim();
  var email = document.getElementById('fe').value.trim();
  var phone = document.getElementById('fp').value.trim();
  var msg   = document.getElementById('fm').value.trim();

  if (!name || !email) {
    alert('Please fill in your Name and Email Address.');
    return;
  }

  /* Show success message */
  var successEl = document.getElementById('fok');
  successEl.style.display = 'block';

  /* Clear fields */
  document.getElementById('fn').value = '';
  document.getElementById('fe').value = '';
  document.getElementById('fp').value = '';
  document.getElementById('fm').value = '';

  /* Hide success message after 5 seconds */
  setTimeout(function() {
    successEl.style.display = 'none';
  }, 5000);
}

/* ─── Scroll-in animations ─── */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

/* Elements to animate on scroll */
var animatedElements = document.querySelectorAll(
  '.biz-card, .why-card, .cert-card, .dir-card, .cli-card, .t-feat, .m-feat'
);

animatedElements.forEach(function(el) {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ── Mobile Businesses submenu toggle ── */
function toggleMobBiz() {
  var sub   = document.getElementById('mobBizSub');
  var arrow = document.getElementById('mobBizArrow');
  if (!sub) return;
  var isOpen = sub.classList.toggle('open');
  arrow.textContent = isOpen ? '▴' : '▾';
}
<script>
const form = document.querySelector('.cta-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Show a loading text or disable button
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.innerHTML = "Sending...";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // This replaces the form content with your custom success message
                form.innerHTML = `<div class="form-ok" style="display:block; text-align:center; font-size:1.2rem; color:#fff; padding:20px;">✅ Thank you! Your submission has been received!</div>`;
            } else {
                console.log(response);
                alert(json.message);
            }
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        });
});
</script>
