# BigRock Custom Domain DNS Configuration Guide for `bemytraveller.com`

This guide explains how to point your custom domain **`bemytraveller.com`** registered on **BigRock** to your GitHub Pages website repository (`https://github.com/RR-DigitalSolutions/be-my-traveller`).

---

## Step 1: GitHub Pages Setup (In your GitHub Repository)

1. Go to your repository: [https://github.com/RR-DigitalSolutions/be-my-traveller](https://github.com/RR-DigitalSolutions/be-my-traveller)
2. Click **Settings** (top navigation tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
   - Click **Save**.
5. Under **Custom domain**:
   - Enter: `bemytraveller.com`
   - Click **Save**. (GitHub automatically creates or checks the `CNAME` file in the repo).
6. Check **Enforce HTTPS** (Wait a few minutes after DNS propagation for the SSL certificate to issue, then check this box).

---

## Step 2: Log in to BigRock Control Panel

1. Go to [BigRock Login](https://www.bigrock.in/) and sign in to your account.
2. Click on **Manage Orders** -> **List/Search Orders**.
3. Click on **`bemytraveller.com`** from your list of domains.
4. Scroll down to the **DNS Management** section.
5. Click **Manage DNS**.

> 💡 *Note: If BigRock DNS Management is disabled, ensure your domain Name Servers (NS) are set to BigRock's default name servers (e.g., `dns1.bigrock.in`, `dns2.bigrock.in`).*

---

## Step 3: Add DNS Records in BigRock

You need to add **4 A Records** (for the root domain `bemytraveller.com`) and **1 CNAME Record** (for `www.bemytraveller.com`).

### 1. Add Apex / Root Domain A Records

Click **Add A Record** for each of the following 4 GitHub Pages IP addresses:

| Record Type | Host Name / Name | Destination / IP Address | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `185.199.108.153` | 1 Hour / Default |
| **A** | `@` (or leave blank) | `185.199.109.153` | 1 Hour / Default |
| **A** | `@` (or leave blank) | `185.199.110.153` | 1 Hour / Default |
| **A** | `@` (or leave blank) | `185.199.111.153` | 1 Hour / Default |

---

### 2. Add `www` Subdomain CNAME Record

Click **Add CNAME Record**:

| Record Type | Host Name / Name | Value / Target Hostname | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `rr-digitalsolutions.github.io` | 1 Hour / Default |

---

## Step 4: Verification & Propagation

1. **DNS Propagation**: DNS updates usually take **5 to 30 minutes** (up to 24 hours globally).
2. You can check DNS propagation online at [whatsmydns.net](https://www.whatsmydns.net/#A/bemytraveller.com).
3. Once DNS propagates, visit `https://bemytraveller.com` or `https://www.bemytraveller.com` in your browser.
4. In GitHub Settings -> Pages, make sure **Enforce HTTPS** is enabled so your visitors get a secure HTTPS connection with lock icon 🔒!

---

## Lead Management for Client
- All tour inquiries submitted on `bemytraveller.com` trigger instant pre-filled WhatsApp messages to `+91 7018465381`.
- Submitted inquiries are also stored in local storage on the browser and can be exported anytime.
