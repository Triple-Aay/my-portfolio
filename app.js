const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  //sections active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

} 
PageTransitions();



document.addEventListener('DOMContentLoaded', () => {
  // Support both spellings just in case
  const form = document.querySelector('.recommendation-form') || document.querySelector('.reccomendation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Grab values
    const name = (document.getElementById('name')?.value || '').trim();
    const subject = (document.getElementById('subject')?.value || '').trim(); // org + occupation
    const message = (document.getElementById('message')?.value || '').trim();

    if (!name || !subject || !message) {
      alert('Please fill in Name, Organization/Occupation, and Message.');
      return;
    }

    // Find the recommendations list container
    const blogsContainer =
      document.querySelector('#blogs .blogs') ||
      document.querySelector('.sec4 .blogs') ||
      document.querySelector('.blogs-content .blogs');

    if (!blogsContainer) {
      alert('Could not find the recommendations list (.blogs).');
      return;
    }

    // Build the new recommendation card
    const blog = document.createElement('div');
    blog.className = 'blog';

    const img = document.createElement('img');
    // Use a local placeholder image you add to your project, or switch to a placeholder URL
    img.src = 'images/blog5.jpg'; // or: 'https://via.placeholder.com/600x300?text=Recommendation'
    img.alt = `${name} recommendation`;
    blog.appendChild(img);

    const blogText = document.createElement('div');
    blogText.className = 'blog-text';

    const h4 = document.createElement('h4');
    h4.textContent = subject ? `${name}, ${subject}` : name;

    const p = document.createElement('p');
    p.textContent = `"${message}"`;

    blogText.appendChild(h4);
    blogText.appendChild(p);
    blog.appendChild(blogText);

    // Add the new card to the top (use .appendChild(blog) if you prefer bottom)
    blogsContainer.prepend(blog);

    // Clear the form
        form.reset();
    alert('Recommendation added successfully! Please check the recommendations section.');
      });
    });