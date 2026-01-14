document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Contact Form Logic
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const btn = this.querySelector("button");
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Success! Thank you for contacting Safe360.");
                btn.innerText = originalText;
                btn.disabled = false;
                this.reset();
            }, 1500);
        });
    }

    // 2. Active Navigation Highlighter
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 3. Hotspots Keyboard Support
    // This allows people using 'Tab' to press 'Enter' on dots
    const hotspots = document.querySelectorAll('.tech-point');
    hotspots.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// 4. Accessible Feature Toggler
// This handles both the visuals (dots) and the text information
function showFeature(index) {
    // Hide all text panels
    const allCards = document.querySelectorAll('.feature-info');
    allCards.forEach(card => card.classList.remove('active'));

    // Reset all dots
    const allButtons = document.querySelectorAll('.tech-point');
    allButtons.forEach(btn => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-expanded', 'false');
    });

    // Show selected text panel
    const targetCard = document.getElementById('feat-' + index);
    if (targetCard) {
        targetCard.classList.add('active');
    }

    // Highlight selected dot
    const activeBtn = document.querySelector(`button[onclick="showFeature(${index})"]`);
    if (activeBtn) {
        activeBtn.classList.add('is-active');
        activeBtn.setAttribute('aria-expanded', 'true');
    }
}

const hotspotData = {
    1: {
        title: "Suspicious Phishing Email",
        risk: "Stolen Credentials",
        action: "Report to Security",
        desc: "Scenario: A warehouse PC shows an email from 'IT Support' asking for urgent verification. <br><br><strong>Outcome:</strong> By identifying this phishing attempt early, you prevent a site-wide credential breach."
    },
    2: {
        title: "Unattended Workstation",
        risk: "Unauthorized Data Access",
        action: "Lock Screen Immediately",
        desc: "Scenario: A logged-in computer is left unattended. <br><br><strong>Outcome:</strong> Following 'Lock-when-away' policies prevents accidental or malicious insider threats."
    },
    3: {
        title: "Found USB Device",
        risk: "Malware Injection",
        action: "Do Not Plug In",
        desc: "Scenario: A USB stick is lying near a warehouse terminal. <br><br><strong>Outcome:</strong> Handing it to IT prevents 'Rubber Ducky' attacks that bypass firewalls."
    },
    4: {
        title: "Fake Courier Call",
        risk: "Social Engineering",
        action: "Refuse Information",
        desc: "Scenario: A caller asks for an OTP for a delivery. <br><br><strong>Outcome:</strong> Verifying through official channels stops account compromise."
    },
    5: {
        title: "Parcel QR Code",
        risk: "Quishing (QR Phishing)",
        action: "Verify with Supervisor",
        desc: "Scenario: A QR code on a label claims to show updated invoices. <br><br><strong>Outcome:</strong> Avoiding unknown QR codes prevents redirection to malicious login pages."
    },
    6: {
        title: "Mobile Device Policy",
        risk: "Data Leakage",
        action: "Follow BYOD Rules",
        desc: "Scenario: A personal phone connected to the secure Wi-Fi. <br><br><strong>Outcome:</strong> Segregating personal devices ensures malware cannot jump to corporate systems."
    }
};

function openHotspot(id) {
    const data = hotspotData[id];
    const modal = document.getElementById('hotspotModal');
    const content = document.getElementById('hotspotContent');
    
    content.innerHTML = `
        <div class="modal-icon"><i class="fa-solid fa-shield-virus"></i></div>
        <h3>${data.title}</h3>
        <div class="scenario-meta">
            <span class="risk-high"><i class="fa-solid fa-triangle-exclamation"></i> RISK: ${data.risk}</span>
        </div>
        <p>${data.desc}</p>
        <div style="background: #eef2f7; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
            <small><strong>CORRECT ACTION:</strong> ${data.action}</small>
        </div>
    `;
    
    modal.classList.add('show-modal');
}

function closeHotspot() {
    document.getElementById('hotspotModal').classList.remove('show-modal');
}

// Ensure clicking background closes the modal
window.addEventListener("click", (e) => {
    const modal = document.getElementById('hotspotModal');
    if (e.target === modal) {
        closeHotspot();
    }
});

