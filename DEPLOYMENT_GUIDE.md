# 🚀 Panduan Deploy Website ke Digital Ocean + Domain Spaceship

## 📋 Persiapan Sebelum Deploy

### **1. Build Website untuk Production**
```bash
npm run build
```
Ini akan membuat folder `dist/` yang berisi file-file yang siap untuk production.

### **2. Persiapan File**
Pastikan semua gambar dan asset sudah ada di folder `public/images/`:
- ✅ Logo-Muhammado.png
- ✅ 1.jpeg, 2.jpeg, 3.jpeg
- ✅ IMG_0159.JPG
- ✅ Faqih.jpeg

## 🌊 Digital Ocean Droplet Setup

### **Langkah 1: Setup Droplet**
1. **Login ke Digital Ocean**
2. **Create Droplet:**
   - **OS:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($6/bulan untuk starter)
   - **Region:** Pilih yang terdekat dengan Indonesia
   - **Authentication:** SSH Key (lebih aman) atau Password
   - **Hostname:** nama-domain-anda.com

### **Langkah 2: Connect ke Droplet**
```bash
ssh root@IP_ADDRESS_DROPLET
```

### **Langkah 3: Install Dependencies**
```bash
# Update system
apt update && apt upgrade -y

# Install Nginx
apt install nginx -y

# Install Node.js (untuk build jika diperlukan)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2 (untuk process management)
npm install -g pm2
```

## 🌐 Domain Setup (Spaceship)

### **Langkah 1: DNS Configuration**
Di dashboard Spaceship, tambahkan DNS records:

```
Type: A
Name: @
Value: IP_ADDRESS_DROPLET
TTL: 3600

Type: A  
Name: www
Value: IP_ADDRESS_DROPLET
TTL: 3600
```

### **Langkah 2: SSL Certificate (Opsional)**
```bash
# Install Certbot untuk SSL gratis
apt install certbot python3-certbot-nginx -y

# Generate SSL certificate
certbot --nginx -d nama-domain-anda.com -d www.nama-domain-anda.com
```

## 📁 Deploy Website

### **Metode 1: Upload Manual**

**1. Build Website Lokal:**
```bash
npm run build
```

**2. Upload ke Droplet:**
```bash
# Install SCP atau gunakan FileZilla/WinSCP
scp -r dist/* root@IP_ADDRESS_DROPLET:/var/www/html/
```

**3. Setup Nginx:**
```bash
# Edit nginx config
nano /etc/nginx/sites-available/default
```

**4. Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name nama-domain-anda.com www.nama-domain-anda.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Handle static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**5. Restart Nginx:**
```bash
nginx -t
systemctl restart nginx
systemctl enable nginx
```

### **Metode 2: Git Deploy (Recommended)**

**1. Setup Git di Droplet:**
```bash
# Install Git
apt install git -y

# Clone repository
cd /var/www
git clone https://github.com/USERNAME/REPOSITORY.git website
cd website

# Install dependencies
npm install

# Build
npm run build

# Copy build files
cp -r dist/* /var/www/html/
```

**2. Setup Auto Deploy Script:**
```bash
# Create deploy script
nano /var/www/deploy.sh
```

```bash
#!/bin/bash
cd /var/www/website
git pull origin main
npm install
npm run build
cp -r dist/* /var/www/html/
systemctl reload nginx
echo "Deploy completed!"
```

```bash
# Make script executable
chmod +x /var/www/deploy.sh
```

## 🔧 Optimasi Production

### **1. Setup PM2 (jika menggunakan Node.js)**
```bash
# Create ecosystem file
nano ecosystem.config.js
```

```javascript
module.exports = {
  apps: [{
    name: 'web-lpk',
    script: 'server.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### **2. Setup Firewall**
```bash
# Enable UFW
ufw enable

# Allow SSH, HTTP, HTTPS
ufw allow ssh
ufw allow 'Nginx Full'
```

### **3. Setup Monitoring**
```bash
# Install htop untuk monitoring
apt install htop -y

# Setup log rotation
nano /etc/logrotate.d/nginx
```

## 🚀 Langkah Deploy Cepat

### **Step 1: Build Website**
```bash
npm run build
```

### **Step 2: Upload ke Droplet**
```bash
# Zip build files
tar -czf website.tar.gz dist/

# Upload ke droplet
scp website.tar.gz root@IP_ADDRESS_DROPLET:/var/www/

# Extract di droplet
ssh root@IP_ADDRESS_DROPLET
cd /var/www
tar -xzf website.tar.gz
cp -r dist/* /var/www/html/
```

### **Step 3: Setup Nginx**
```bash
# Edit nginx config
nano /etc/nginx/sites-available/default
```

### **Step 4: Restart Services**
```bash
nginx -t
systemctl restart nginx
```

## 🔍 Troubleshooting

### **Common Issues:**

**1. Website tidak bisa diakses:**
```bash
# Check nginx status
systemctl status nginx

# Check nginx config
nginx -t

# Check firewall
ufw status
```

**2. Domain tidak resolve:**
- Pastikan DNS records sudah benar di Spaceship
- Tunggu 24-48 jam untuk DNS propagation
- Test dengan `nslookup nama-domain-anda.com`

**3. SSL Certificate issues:**
```bash
# Renew certificate
certbot renew --dry-run
```

## 📞 Support

Jika ada masalah:
1. Check logs: `tail -f /var/log/nginx/error.log`
2. Check droplet status di Digital Ocean dashboard
3. Verify DNS settings di Spaceship

## 🎯 Checklist Deploy

- [ ] Build website (`npm run build`)
- [ ] Setup droplet dengan Ubuntu 22.04
- [ ] Install Nginx
- [ ] Upload files ke `/var/www/html/`
- [ ] Configure Nginx
- [ ] Setup DNS di Spaceship
- [ ] Test website
- [ ] Setup SSL (opsional)
- [ ] Setup monitoring

**Estimasi waktu:** 2-4 jam untuk setup lengkap
