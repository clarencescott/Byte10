
function runCommand() {
  const input = document.getElementById('userInput').value.trim();
  const output = document.getElementById('output');

  if (input.includes('nmap') && input.includes('-sV') && input.includes('-O') && input.includes('10.0.0.56')) {
    output.textContent = `
Starting Nmap 7.93 ( https://nmap.org ) at 2025-08-04 11:34 EDT
Nmap scan report for 10.0.0.56
Host is up (0.0012s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3
80/tcp   open  http    Apache httpd 2.4.29
443/tcp  open  https   OpenSSL 1.1.1

OS details: Linux 4.15 - 5.4, Ubuntu-based
Network Distance: 1 hop

Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds
    `;
  } else {
    output.textContent = `Error: Invalid input. Try using "nmap -sV -O 10.0.0.56"`;
  }
}