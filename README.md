# Nextron

## Links
[Live site link](https://nextron-7.web.app/)

[Server side repo link](https://github.com/Yamin39/nextron-server)

## Setup Process

To run the project locally, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/Yamin39/nextron-client.git
```

2. **Navigate to the project directory**:
```bash
cd nextron-client
```

3. **Install dependencies**:
```bash
npm install
```

4. **Add important credentials**: Create a .env.local file and add your Firebase credentials and Stripe publish key.
```javascript
VITE_APIKEY=yourAPIKEY
VITE_AUTHDOMAIN=yourAUTHDOMAIN
VITE_PROJECTID=yourPROJECTID
VITE_STORAGEBUCKET=yourSTORAGEBUCKET
VITE_MESSAGINGSENDERID=yourMESSAGINGSENDERID
VITE_APPID=yourAPPID
VITE_PAYMENT_GATEWAY_PK=yourStripePublishKey
```

5. **Run the project**:
```bash
npm run dev
```
