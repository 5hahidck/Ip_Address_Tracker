# 📍 IP Address Tracker

A sophisticated frontend mentor challenge solution that integrates real-time IP/Domain geolocation with dynamic map rendering. Built with a focus on asynchronous logic and responsive design.

---

## 🛠 Tech Stack & Tools

| Category | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript |
| **API** | [IPify Geolocation API](https://geo.ipify.org/) |
| **Mapping** | [LeafletJS](https://leafletjs.com/) |


---

## 📁 Project Structure Explained

Following professional standards, the project is decoupled into logical directories:

- **`assets/`**: Contains static resources like the custom location icons and background patterns.
- **`src/app.js`**: The engine of the app. Handles API requests, map initialization, and UI state management.
- **`.env`**: (Local only) Securely stores the IPify API Key to prevent exposure.
- **`.gitignore`**: Ensures sensitive configuration and `node_modules` aren't pushed to version control.

---

## 🧠 System Logic Flow

1. **Initialization**: On page load, the app detects the user's public IP via IPify and centers the Leaflet map.
2. **User Input**: Accepts both IPv4/IPv6 addresses and domain names (e.g., google.com).
3. **Async Fetch**: A `try-catch` block manages the data retrieval from the Geolocation API.
4. **DOM Update**: The "Information Card" updates dynamically without a page refresh.
5. **Map Re-centering**: The Leaflet marker smoothly transitions to the new coordinates using `.setView()`.

---

## 🚧 Technical Challenges & Solutions

### 1. Overlapping UI Components
**Challenge**: Positioning the data card so it floats perfectly between the header and the map on all screen sizes.
**Solution**: Used a combination of `absolute` positioning and `z-index` with a `translateY(50%)` transform to ensure it stays centered regardless of the map height.

### 2. API Security
**Challenge**: Keeping the API Key hidden during development.
**Solution**: Implemented a `.env` configuration. *Note: For production on GitHub Pages, I utilized environment variables in the deployment settings.*

---

## ⚙️ How to Run Locally

1. **Clone the repo**:
   ```bash
   git clone [https://github.com/your-username/ip-address-tracker.git](https://github.com/5hahidck/ip-address-tracker.git)