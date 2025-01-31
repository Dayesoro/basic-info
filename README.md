# HNG12 Public API  

This is a simple public API built with **Express.js**. The API returns basic information, including the developer's registered email, the current datetime in **ISO 8601** format, and a link to the project's GitHub repository.  

## 🚀 Live API Endpoint  
The API is publicly accessible at:  

**🔗 [https://basic-info-kx4r.onrender.com/info](https://basic-info-kx4r.onrender.com/info)** 

## 📖 API Documentation  

### **📍 Endpoint**  
GET /info

### **📥 Request Example**  
Simply send a **GET request** to:  
```bash
 GET https://basic-info-kx4r.onrender.com/info

📤 Response Example
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Dayesoro/basic-info.git"
}
⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Dayesoro/basic-info.git
cd hng12-api
2️⃣ Install Dependencies
npm install
3️⃣ Start the Server
node index.js
By default, the server runs on http://localhost:3015/

4️⃣ Test the API Locally
Open your browser or use Postman to test:

http://localhost:3015/
