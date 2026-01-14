const hotspotData = {
    "1": {
        title: "Suspicious Phishing Email",
        icon: "fa-envelope-open-text",
        scenario: "A warehouse office PC shows an email claiming to be from 'IT Support' asking for urgent login verification.",
        risk: "Phishing attack leading to stolen credentials and network-wide compromise.",
        action: "Do not click links; do not download attachments; report the email to IT immediately.",
        outcome: "Protecting user identity and preventing unauthorized system access."
    },
    "2": {
        title: "Unattended Workstation",
        icon: "fa-desktop",
        scenario: "A logged-in computer is left unattended in a high-traffic dispatch office.",
        risk: "Unauthorized access to company systems, data theft, or accidental record modification.",
        action: "Lock the screen immediately (Win + L) and remind staff of the lock-policy.",
        outcome: "Maintaining physical security of digital access points."
    },
    "3": {
        title: "Unknown USB Device",
        icon: "fa-usb",
        scenario: "A USB stick is found lying on a desk or near a warehouse terminal.",
        risk: "Malware infection, ransomware entry, or automated data exfiltration.",
        action: "Do not plug it in. Hand it over to the cybersecurity team or IT security.",
        outcome: "Preventing hardware-based malware from entering the secure perimeter."
    },
    "4": {
        title: "Fake Courier Call",
        icon: "fa-phone-volume",
        scenario: "A caller claims to be a courier asking for an OTP or system password to 'confirm delivery'.",
        risk: "Voice-based social engineering leading to complete account takeover.",
        action: "Refuse to share information. Verify the request through official vendor channels.",
        outcome: "Strengthening the human firewall against social manipulation."
    },
    "5": {
        title: "QR Code on Parcel",
        icon: "fa-qrcode",
        scenario: "A QR code on a label claims to show 'updated invoice' or 'priority tracking'.",
        risk: "Directing users to malicious phishing websites or automatic malware downloads.",
        action: "Avoid scanning unknown QR codes. Use official tracking numbers via browser.",
        outcome: "Avoiding modern mobile phishing (Quishing) tactics."
    },
    "6": {
        title: "Personal Mobile Security",
        icon: "fa-mobile-screen",
        scenario: "An employee connects a personal, unmanaged phone to the secure corporate Wi-Fi.",
        risk: "Data leakage or malware bridging from an insecure device to the secure network.",
        action: "Follow company BYOD (Bring Your Own Device) rules; use Guest Wi-Fi for personal use.",
        outcome: "Network segmentation and device integrity management."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the ID from the URL (?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const container = document.getElementById('hotspot-content');

    // 2. Check if ID exists in our data
    if (id && hotspotData[id]) {
        const item = hotspotData[id];
        
        // 3. Inject the attractive HTML layout
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 40px;">
                <i class="fa-solid ${item.icon}" style="font-size: 5rem; color: var(--secondary); margin-bottom: 20px;"></i>
                <h1 style="color: var(--primary); font-size: 2.5rem;">${item.title}</h1>
            </div>

            <div style="display: grid; gap: 30px;">
                <div style="background: #f1f7ff; padding: 25px; border-radius: 12px; border-left: 6px solid var(--secondary);">
                    <h3 style="color: var(--primary); margin-bottom: 10px;"><i class="fa-solid fa-circle-info"></i> The Scenario</h3>
                    <p style="font-size: 1.1rem; line-height: 1.6;">${item.scenario}</p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #fff5f5; padding: 25px; border-radius: 12px;">
                        <h3 style="color: #c53030; margin-bottom: 10px;"><i class="fa-solid fa-biohazard"></i> The Risk</h3>
                        <p>${item.risk}</p>
                    </div>
                    <div style="background: #f0fff4; padding: 25px; border-radius: 12px;">
                        <h3 style="color: #2f855a; margin-bottom: 10px;"><i class="fa-solid fa-shield-halved"></i> Correct Action</h3>
                        <p>${item.action}</p>
                    </div>
                </div>

                <div style="border-top: 1px solid #eee; padding-top: 25px; margin-top: 10px;">
                    <h4 style="color: var(--gray); text-transform: uppercase; letter-spacing: 1px;">Learning Outcome</h4>
                    <p style="font-weight: 600; color: var(--primary); font-size: 1.2rem;">${item.outcome}</p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `<h1>Scenario Not Found</h1><p>Please return to the home page.</p>`;
    }
});