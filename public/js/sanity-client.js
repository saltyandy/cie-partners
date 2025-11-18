// Sanity Client Configuration
const SANITY_PROJECT_ID = 'eq5xohht';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2024-02-04';

// Fetch page content from Sanity
async function fetchPageContent(slug = 'home') {
  try {
    const query = `*[_type == "page" && slug.current == "${slug}"][0]`;
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;

    console.log('Fetching from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    console.log('Sanity response:', data);

    if (data.result) {
      return data.result;
    } else {
      console.error('Page not found in Sanity');
      return null;
    }
  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
}

// Update page with Sanity content
async function loadPageContent() {
  const page = await fetchPageContent('home');

  if (!page) {
    console.warn('Could not load content from Sanity, using static content');
    return;
  }

  // Update Hero Section
  if (page.heroSection) {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      if (page.heroSection.heading) {
        const h1 = heroContent.querySelector('h1');
        if (h1) h1.textContent = page.heroSection.heading;
      }
      if (page.heroSection.subheading) {
        const p = heroContent.querySelector('p');
        if (p) p.textContent = page.heroSection.subheading;
      }
      if (page.heroSection.logoUrl) {
        const img = heroContent.querySelector('img');
        if (img) img.src = page.heroSection.logoUrl;
      }
    }
  }

  // Update Contact Section
  if (page.contactSection) {
    const contactContent = document.querySelector('.contact-content');
    if (contactContent) {
      if (page.contactSection.heading) {
        const h2 = contactContent.querySelector('h2');
        if (h2) h2.textContent = page.contactSection.heading;
      }

      const contactDetails = contactContent.querySelector('.contact-details');
      if (contactDetails && page.contactSection) {
        const emailDiv = contactDetails.querySelector('[data-contact="email"]');
        const phoneDiv = contactDetails.querySelector('[data-contact="phone"]');
        const addressDiv = contactDetails.querySelector('[data-contact="address"]');

        if (emailDiv && page.contactSection.email) {
          const link = emailDiv.querySelector('a');
          if (link) {
            link.href = `mailto:${page.contactSection.email}`;
            link.textContent = page.contactSection.email;
          }
        }

        if (phoneDiv && page.contactSection.phone) {
          const link = phoneDiv.querySelector('a');
          if (link) {
            link.href = `tel:${page.contactSection.phone}`;
            link.textContent = page.contactSection.phone;
          }
        }

        if (addressDiv && page.contactSection.address) {
          const p = addressDiv.querySelector('p');
          if (p) p.innerHTML = page.contactSection.address.replace(/\n/g, '<br>');
        }
      }
    }
  }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadPageContent);
