// ============================================
// BE MY TRAVELLER - CONFIG & MAIN JAVASCRIPT
// ============================================

const CONFIG = {
    domain: 'bemytraveller.com',
    phone: '+91 7018465381',
    whatsappNumber: '917018465381',
    email: 'info@bemytraveller.com',
    location: 'Pan-India & Worldwide Tour Specialist (Head Office: Manali, HP)'
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    setupMobileMenu();
    setupFormValidation();
    setupInquiryForm();
    setupAnimations();
});

// ============================================
// COUNTDOWN TIMER
// ============================================

function initCountdown() {
    // Set coming soon date to 30 days from now
    const comingSoonDate = new Date();
    comingSoonDate.setDate(comingSoonDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = comingSoonDate.getTime() - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// MOBILE MENU
// ============================================

function setupMobileMenu() {
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        navLink.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ============================================
// FORM VALIDATION
// ============================================

function setupFormValidation() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
}

function validateForm() {
    const form = document.getElementById('inquiryForm');
    if (!form) return true;

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true;

    // Validate Name
    if (fullName.length < 2) {
        showError('fullName', 'Please enter a valid name');
        isValid = false;
    } else {
        clearError('fullName');
    }

    // Validate Email
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    } else {
        clearError('email');
    }

    // Validate Phone
    if (phone.length < 10) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    } else {
        clearError('phone');
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`error-${fieldName}`);
    if (field && errorElement) {
        field.parentElement.classList.add('error');
        errorElement.textContent = message;
    }
}

function clearError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`error-${fieldName}`);
    if (field && errorElement) {
        field.parentElement.classList.remove('error');
        errorElement.textContent = '';
    }
}

// ============================================
// INQUIRY FORM HANDLER
// ============================================

function setupInquiryForm() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    // Add change listeners for real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.id === 'fullName' && this.value.trim().length < 2) {
                showError('fullName', 'Please enter a valid name');
            } else if (this.id === 'email' && !validateEmail(this.value)) {
                showError('email', 'Please enter a valid email');
            } else if (this.id === 'phone' && this.value.trim().length < 10) {
                showError('phone', 'Please enter a valid phone number');
            } else {
                clearError(this.id);
            }
        });
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const formData = getFormData();
    
    // Save to local leads registry
    const existingLeads = JSON.parse(localStorage.getItem('bmt_leads') || '[]');
    existingLeads.push({
        ...formData,
        submittedAt: new Date().toISOString()
    });
    localStorage.setItem('bmt_leads', JSON.stringify(existingLeads));
    console.log('Lead Saved:', formData);

    // Show success modal
    showSuccessModal();

    // Optionally auto-open WhatsApp with inquiry formatted message
    setTimeout(() => {
        openWhatsAppInquiry();
    }, 1200);

    // Reset form
    document.getElementById('inquiryForm').reset();
    localStorage.removeItem('tourInquiryDraft');
}

function getFormData() {
    const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
        .map(checkbox => checkbox.value);

    return {
        fullName: document.getElementById('fullName')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        city: document.getElementById('city')?.value || '',
        destination: document.getElementById('destination')?.value || '',
        travelers: document.getElementById('travelers')?.value || '',
        travelDate: document.getElementById('travelDate')?.value || '',
        duration: document.getElementById('duration')?.value || '',
        budget: document.getElementById('budget')?.value || '',
        activities: activities,
        accommodation: document.querySelector('input[name="accommodation"]:checked')?.value || '',
        dietaryNeeds: document.getElementById('dietaryNeeds')?.value || '',
        specialRequests: document.getElementById('specialRequests')?.value || '',
        newsletter: document.getElementById('newsletter')?.checked || false
    };
}

// ============================================
// QUICK INQUIRY HANDLER
// ============================================

function handleQuickInquiry(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[placeholder="Your Name"]')?.value || '';
    const email = form.querySelector('input[placeholder="Your Email"]')?.value || '';
    const phone = form.querySelector('input[placeholder="Your Phone"]')?.value || '';
    const message = form.querySelector('textarea')?.value || '';

    if (!name || !email || !phone || !message) {
        alert('Please fill all required fields');
        return;
    }

    const lead = {
        type: 'Quick Inquiry',
        name, email, phone, message,
        submittedAt: new Date().toISOString()
    };

    const existingLeads = JSON.parse(localStorage.getItem('bmt_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('bmt_leads', JSON.stringify(existingLeads));

    // Close modal
    document.getElementById('inquiry-modal').style.display = 'none';

    // Format WhatsApp message
    const waMsg = encodeURIComponent(
        `🏔️ *New Quick Inquiry - Be My Traveller*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email}\n` +
        `💬 *Message:* ${message}`
    );

    // Prompt user to send on WhatsApp
    if (confirm('Thank you for your inquiry! Would you like to connect with our team instantly on WhatsApp?')) {
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`, '_blank');
    } else {
        alert('Thank you! We have received your inquiry and will contact you shortly.');
    }

    form.reset();
}

// ============================================
// DYNAMIC CONTENT UPDATE
// ============================================

function updateDynamicContent() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    const destination = document.getElementById('destination')?.value || '';
    const travelers = document.getElementById('travelers')?.value || '';
    const travelDate = document.getElementById('travelDate')?.value || '';
    const duration = document.getElementById('duration')?.value || '';
    const budget = document.getElementById('budget')?.value || '';
    const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
        .map(cb => cb.value);
    const accommodation = document.querySelector('input[name="accommodation"]:checked')?.value;

    updateSummary({
        destination, travelers, travelDate, duration, budget, activities, accommodation
    });

    updatePackageRecommendations({
        destination, travelers, activities, budget
    });
}

function updateSummary(data) {
    const summaryContent = document.getElementById('summaryContent');
    if (!summaryContent) return;

    if (!data.travelers && !data.destination) {
        summaryContent.innerHTML = '<p class="placeholder">Fill the form to see your trip summary</p>';
        return;
    }

    const destinationText = {
        'himachal': 'Himachal Pradesh',
        'kashmir-ladakh': 'Kashmir & Ladakh',
        'kerala-south': 'Kerala & South India',
        'goa-beach': 'Goa & Beaches',
        'rajasthan': 'Rajasthan Heritage',
        'uttarakhand': 'Uttarakhand',
        'northeast': 'Northeast India',
        'golden-triangle': 'Golden Triangle',
        'international': 'International / Custom'
    };

    const travelersText = {
        '1': '1 Person',
        '2-3': '2-3 People',
        '4-6': '4-6 People',
        '7-10': '7-10 People',
        '10+': '10+ People (Group)'
    };

    const durationText = {
        '1-2': '1-2 Days',
        '3-5': '3-5 Days',
        '1-week': '1 Week',
        '2-weeks': '2 Weeks',
        'custom': 'Custom Duration'
    };

    const budgetText = {
        'economy': 'Economy (₹5k - ₹12k)',
        'comfort': 'Comfort (₹12k - ₹28k)',
        'premium': 'Premium (₹28k - ₹55k)',
        'luxury': 'Luxury (₹55k+)'
    };

    let html = '';

    if (data.destination) {
        html += `<div class="summary-item">
            <span class="summary-label">Destination:</span>
            <span class="summary-value">${destinationText[data.destination] || data.destination}</span>
        </div>`;
    }

    if (data.travelers) {
        html += `<div class="summary-item">
            <span class="summary-label">Travelers:</span>
            <span class="summary-value">${travelersText[data.travelers]}</span>
        </div>`;
    }

    if (data.travelDate) {
        const date = new Date(data.travelDate);
        const formattedDate = date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        html += `<div class="summary-item">
            <span class="summary-label">Travel Date:</span>
            <span class="summary-value">${formattedDate}</span>
        </div>`;
    }

    if (data.duration) {
        html += `<div class="summary-item">
            <span class="summary-label">Duration:</span>
            <span class="summary-value">${durationText[data.duration]}</span>
        </div>`;
    }

    if (data.budget) {
        html += `<div class="summary-item">
            <span class="summary-label">Budget:</span>
            <span class="summary-value">${budgetText[data.budget]}</span>
        </div>`;
    }

    if (data.accommodation) {
        const accommodationText = {
            'hotel': 'Hotel',
            'resort': 'Resort',
            'guesthouse': 'Guest House',
            'homestay': 'Homestay'
        };
        html += `<div class="summary-item">
            <span class="summary-label">Accommodation:</span>
            <span class="summary-value">${accommodationText[data.accommodation]}</span>
        </div>`;
    }

    if (data.activities.length > 0) {
        const activitiesText = {
            'trekking': 'Trekking',
            'camping': 'Camping',
            'photography': 'Photography',
            'adventure': 'Adventure Sports',
            'cultural': 'Cultural Tours',
            'relaxation': 'Relaxation'
        };
        const activitiesList = data.activities
            .map(a => activitiesText[a])
            .join(', ');
        html += `<div class="summary-item">
            <span class="summary-label">Activities:</span>
            <span class="summary-value">${activitiesList}</span>
        </div>`;
    }

    summaryContent.innerHTML = html || '<p class="placeholder">Fill more details to see summary</p>';
}

function updatePackageRecommendations(data) {
    const packagesContent = document.getElementById('packagesContent');
    if (!packagesContent) return;

    let recommendations = [];

    // Recommend based on destination
    if (data.destination === 'kerala-south' || data.destination === 'goa-beach') {
        recommendations.push({
            name: '🌴 Tropical Coastal Package',
            description: 'Backwaters, houseboats, sandy beaches & seaside resorts',
            features: ['Private Houseboat Stay', 'Beach Resort Booking', 'Water Sports & Cruises', 'Sightseeing & Transfers']
        });
    } else if (data.destination === 'rajasthan' || data.destination === 'golden-triangle') {
        recommendations.push({
            name: '🏰 Royal Heritage Package',
            description: 'Palaces, desert camps, forts & cultural performances',
            features: ['Heritage Hotel Stay', 'Desert Safari & Camping', 'Fort & Palace Guided Tours', 'Private AC Cab']
        });
    } else if (data.destination === 'kashmir-ladakh' || data.destination === 'himachal') {
        recommendations.push({
            name: '🏔️ Himalayan Paradise Escape',
            description: 'Snow peaks, valley stays, bike trips & mountain adventures',
            features: ['Valley View Resort Stay', 'Rohtang/Gulmarg/Pangong Excursion', 'Bonfire & Camping', 'All Private Transfers']
        });
    }

    // Recommend based on activities
    if (data.activities.includes('trekking') || data.activities.includes('adventure')) {
        recommendations.push({
            name: '🧗 Extreme Adventure Package',
            description: 'Perfect for thrill-seekers & outdoor lovers',
            features: ['Guided Trekking & Camping', 'Rafting / Paragliding', 'Bonfire & Stargazing', 'Experienced Expedition Leader']
        });
    }

    if (data.budget === 'luxury') {
        recommendations.push({
            name: '👑 Royal Luxury Signature Tour',
            description: 'Ultra-premium experience with 5-star hospitality',
            features: ['5-Star Luxury Stays', 'Private Luxury Vehicle', 'VIP Transfers & Dining', 'Dedicated Concierge']
        });
    }

    // Default recommendations if none match
    if (recommendations.length === 0) {
        recommendations = [
            {
                name: '✈️ All-India Classic Discovery',
                description: 'Best-selling customizable itinerary for families & couples',
                features: ['Handpicked 3★/4★ Hotels', 'Private AC Sedan/SUV', 'Sightseeing & Breakfast', '24/7 On-Trip Manager']
            },
            {
                name: '🌟 Premium Custom Collection',
                description: 'Tailor-made journey customized to your exact preferences',
                features: ['Flexible Travel Dates', 'Luxury Stay Upgrades', 'Special Couple/Group Setups', 'Direct WhatsApp Assistance']
            }
        ];
    }

    let html = recommendations.map(pkg => `
        <div class="package-item">
            <h4>${pkg.name}</h4>
            <p>${pkg.description}</p>
            <ul>
                ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    packagesContent.innerHTML = html;
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
    // Navigate to home page
    window.location.href = 'index.html';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }

    const inquiryModal = document.getElementById('inquiry-modal');
    if (inquiryModal && event.target === inquiryModal) {
        inquiryModal.style.display = 'none';
    }

    const whatsappModal = document.getElementById('whatsappModal');
    if (whatsappModal && event.target === whatsappModal) {
        whatsappModal.style.display = 'none';
    }
});

// ============================================
// WHATSAPP INTEGRATION
// ============================================

function openWhatsAppChat() {
    const phoneNumber = CONFIG.whatsappNumber;
    const message = encodeURIComponent('Hi Be My Traveller! I\'m interested in planning an All India tour package. Can you help me with custom options and pricing?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function openWhatsAppInquiry() {
    const form = document.getElementById('inquiryForm');
    if (!form) {
        openWhatsAppChat();
        return;
    }

    const formData = getFormData();
    const fullName = formData.fullName || 'Customer';
    const phone = formData.phone || 'Not specified';
    const destination = formData.destination || 'All India Tour';
    const travelers = formData.travelers || 'Not specified';
    const travelDate = formData.travelDate || 'Not specified';
    const duration = formData.duration || 'Not specified';
    const budget = formData.budget || 'Not specified';
    const accommodation = formData.accommodation || 'Not specified';
    const activities = formData.activities.join(', ') || 'Sightseeing & Leisure';

    const message = encodeURIComponent(
        `✈️ *Be My Traveller - All India Tour Inquiry*\n\n` +
        `👤 *Name:* ${fullName}\n` +
        `📞 *Contact:* ${phone}\n` +
        `📍 *Destination:* ${destination}\n` +
        `👥 *Travelers:* ${travelers}\n` +
        `📅 *Travel Date:* ${travelDate}\n` +
        `⏱️ *Duration:* ${duration}\n` +
        `💰 *Budget Tier:* ${budget}\n` +
        `🏨 *Stay Preference:* ${accommodation}\n` +
        `🎯 *Interests:* ${activities}\n\n` +
        `Please send me custom package options & best price quotation!`
    );

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
}

// ============================================
// SCROLL TO CONTACT
// ============================================

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// ANIMATIONS ON SCROLL
// ============================================

function setupAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and form sections
    document.querySelectorAll('.feature-card, .contact-item, .form-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

// ============================================
// EXPORT DATA AS WORD DOCUMENT
// ============================================

function downloadInquiry() {
    const formData = getFormData();
    const content = `
Be My Traveller - Tour Inquiry Form

Personal Information
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- City: ${formData.city}

Travel Details
- Number of Travelers: ${formData.travelers}
- Preferred Travel Date: ${formData.travelDate}
- Duration: ${formData.duration}
- Budget: ${formData.budget}

Preferences
- Accommodation: ${formData.accommodation}
- Activities: ${formData.activities.join(', ')}
- Dietary Needs: ${formData.dietaryNeeds || 'None'}

Special Requests
${formData.specialRequests || 'None'}

Date Submitted: ${new Date().toLocaleString('en-IN')}
    `;

    // Create blob and download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `tour-inquiry-${Date.now()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ============================================
// LOCAL STORAGE FOR FORM AUTO-SAVE
// ============================================

const AUTO_SAVE_INTERVAL = 30000; // 30 seconds

function setupAutoSave() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    // Load saved data
    loadFormData();

    // Auto-save every 30 seconds
    setInterval(() => {
        saveFormData();
    }, AUTO_SAVE_INTERVAL);

    // Save on form change
    form.addEventListener('change', saveFormData);
}

function saveFormData() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    const formData = new FormData(form);
    const data = {
        timestamp: new Date().getTime()
    };

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    localStorage.setItem('tourInquiryDraft', JSON.stringify(data));
    console.log('Form auto-saved');
}

function loadFormData() {
    const saved = localStorage.getItem('tourInquiryDraft');
    if (!saved) return;

    const data = JSON.parse(saved);
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    Object.keys(data).forEach(key => {
        if (key === 'timestamp') return;
        const element = form.elements[key];
        if (element) {
            if (element.type === 'checkbox' || element.type === 'radio') {
                if (element.value === data[key]) {
                    element.checked = true;
                }
            } else {
                element.value = data[key];
            }
        }
    });

    console.log('Form data restored from auto-save');
}

// Initialize auto-save on page load
setupAutoSave();

// ============================================
// CONSOLE LOG EASTER EGG
// ============================================

console.log('%c🏔️ Welcome to Be My Traveller!', 'font-size: 20px; color: #00a86b; font-weight: bold;');
console.log('%cVisit us at Manali, Himachal Pradesh', 'font-size: 14px; color: #666;');
console.log(`%cFor inquiries: ${CONFIG.phone} | ${CONFIG.email}`, 'font-size: 12px; color: #999;');
