# 🔐 ByteDrop Challenge Series

Welcome to **ByteDrop**, a cybersecurity initiative built for Genesee County and beyond. Each challenge is designed to sharpen your digital defense skills through hands-on scenarios, terminal simulations, and real-world tools.

🌐 **Live site:** [https://byte10.vercel.app](https://byte10.vercel.app)

---

## 📦 Challenge Archive

### 🧠 ByteDrop #001: OS Detection

**Scenario:**  
You're performing network reconnaissance. Your task is to scan a target IP address using `nmap` to identify open ports and the operating system in use.

**Command Used:**  
```bash
nmap -sV -O 10.0.0.56
```

**Skills Tested:**  
- Network scanning  
- OS fingerprinting  
- Service enumeration

🔗 Try it: [https://byte10.vercel.app](https://byte10.vercel.app)

---

### 🧠 ByteDrop #002: Web Server Recon

**Scenario:**  
You're investigating a suspicious web server. Use `nikto` to scan for vulnerabilities, outdated software, and exposed directories.

**Command Used:**  
```bash
nikto -h http://10.0.0.56
```

**Skills Tested:**  
- Web server scanning  
- Vulnerability detection  
- Reconnaissance techniques

🔗 Try it: [https://byte10.vercel.app](https://byte10.vercel.app)

---

### 🧠 ByteDrop #003: Python Log Sniffer

**Scenario:**  
You're analyzing a log file to detect repeated IP addresses — a common sign of brute-force or scanning activity. Complete the Python script to identify and print IPs that appear more than once.

**Skills Tested:**  
- Python scripting  
- Dictionary logic  
- Log analysis automation

**Sample Code Snippet:**
```python
ip_counts[ip] = ip_counts.get(ip, 0) + 1

for ip in ip_counts:
    if ip_counts[ip] > 1:
        print(ip)
```

🔗 Try it: [https://byte10.vercel.app](https://byte10.vercel.app)

---

## 🚀 What's Next?

New challenges drop regularly. Future topics may include:
- Password cracking
- Social engineering simulations
- Basic encryption/decryption
- Malware behavior analysis

Stay sharp. Stay curious. Stay secure.  
💬 Got ideas or feedback? Open an issue or start a discussion!

---

## 🛡️ License

MIT License. Use, remix, and share freely — just don’t use it for evil. Intended for Genesee County residents mainly.
```


