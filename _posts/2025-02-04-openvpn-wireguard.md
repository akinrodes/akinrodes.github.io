---
layout: post
title: Guide VPN Freebox OpenVPN et WireGuard
date: 2025-02-04
categories: [vpn]
tags: [openvpn, wireguard]     # TAG names should always be lowercase
published: true
---

# 📌 Guide : Installer un VPN sur une Freebox et y accéder à distance  

Ce guide explique comment configurer un **VPN sur une Freebox** et y accéder depuis l’étranger, en utilisant **OpenVPN** et **WireGuard**. Il inclut également la configuration d’un **DNS Dynamique (No-IP)** pour éviter les problèmes d’adresse IP changeante.  

---

## 🚀 1. Configuration d’un DNS Dynamique (No-IP)  

Si **pas d’IP fixe**, il faut utiliser un **DNS Dynamique** (DynDNS ou No-IP) pour toujours retrouver la Freebox sur Internet.  

### 🛠️ Étape 1 : Créer un compte No-IP  
1. Va sur **[https://www.noip.com/](https://www.noip.com/)** et crée un compte.  
2. Dans le tableau de bord, clique sur **"Add a Hostname"**.  
   - **Hostname** : Choisis un nom (ex. `monvpn.no-ip.com`).  
   - **Type d’enregistrement** : Sélectionne **"DNS Host (A)"**.  
   - **IP Address** : Mets l’IP publique de la Freebox (**trouvable sur [https://whatismyipaddress.com/](https://whatismyipaddress.com/)**).  
3. Valide et enregistre.  

### 🛠️ Étape 2 : Configurer le DNS Dynamique sur la Freebox  
1. Connecte-toi à **[https://mafreebox.freebox.fr](https://mafreebox.freebox.fr)**.  
2. Va dans **Paramètres avancés > DNS Dynamique**.  
3. Clique sur **Ajouter un service** et remplis :  
   - **Service** : `No-IP`  
   - **Utilisateur** : Ton identifiant No-IP  
   - **Mot de passe** : Ton mot de passe No-IP  
   - **Domaine** : `monvpn.no-ip.com`  
4. Valide et active le service.  

---

## 🔐 2. Configurer OpenVPN sur la Freebox  

La Freebox permet d’activer **un serveur VPN OpenVPN**, qui peut être en **Mode Routé** (plus stable) ou **Mode Bridgé** (connexion complète au réseau local).  

### 🛠️ Étape 1 : Activer OpenVPN sur la Freebox  
1. Connecte-toi à **[http://mafreebox.freebox.fr](http://mafreebox.freebox.fr)**.  
2. Va dans **Paramètres avancés > VPN > Serveur VPN**.  
3. Active **OpenVPN** et choisis un mode :  
   - **Mode Routé** (recommandé)  
   - **Mode Bridgé** (si besoin d’un accès complet au réseau local)  

4. Configure les options :  
   - **Adresse IP VPN** : `10.8.0.1` (pour le mode Routé)  
   - **DNS** : `192.168.1.1`  
   - **Passerelle VPN** : `192.168.1.254`  
   - **Protocole** : **UDP** (meilleure performance)  
   - **Port** : `1194`  

5. Crée un **utilisateur VPN** avec un **nom et mot de passe**.  

6. **Télécharge le fichier de configuration .ovpn**.  

---

## 💻 3. Se connecter à OpenVPN depuis un PC  

### 🛠️ Windows  
1. **Télécharge et installe [OpenVPN Client](https://openvpn.net/community-downloads/)**.  
2. **Importe le fichier `.ovpn`** téléchargé depuis la Freebox.  
3. **Connecte-toi** en cliquant sur **"Connect"**.  
4. Teste ta connexion sur [https://whatismyipaddress.com/](https://whatismyipaddress.com/).  

---

## 🔥 4. Configurer WireGuard sur la Freebox (Alternative plus simple)  

### 🛠️ Étape 1 : Activer le serveur WireGuard sur la Freebox  
1. Connecte-toi à **[http://mafreebox.freebox.fr](http://mafreebox.freebox.fr)**.  
2. Va dans **Paramètres avancés > VPN > WireGuard**.  
3. Active **WireGuard** et configure :  
   - **Adresse du serveur** : `10.7.0.1/24`  
   - **Port** : `51820`  
   - **DNS** : `192.168.1.1`  
4. **Ajoute un utilisateur WireGuard** :  
   - Génère une **clé privée/public**.  
   - Associe l’utilisateur au réseau VPN.  

5. **Télécharge le fichier de configuration `.conf`** pour WireGuard.  

---

## 💻 5. Se connecter à WireGuard depuis un PC  

### 🛠️ Windows  
1. **Télécharge WireGuard** : [https://www.wireguard.com/install/](https://www.wireguard.com/install/).  
2. **Importe le fichier `.conf`** téléchargé depuis la Freebox.  
3. **Connecte-toi** en cliquant sur **"Activer"**.  
4. Teste ta connexion sur [https://whatismyipaddress.com/](https://whatismyipaddress.com/).  

---

## 🎯 6. Accéder au PC de bureau en France à distance  

Si tu veux accéder au **PC de ton bureau en France**, tu peux utiliser **Bureau à distance (RDP) ou VNC** une fois connecté au VPN.  

### 🔹 **Bureau à distance (Windows RDP)**  
1. Active **Bureau à distance** sur le PC en France (`mstsc.exe`).  
2. Connecte-toi à l’adresse IP locale du PC en France (ex. `192.168.1.10`).  

### 🔹 **VNC (Mac/Linux/Windows)**  
1. Installe un serveur **VNC** sur le PC de France (ex. TightVNC, AnyDesk).  
2. Connecte-toi via l’IP locale de la Freebox.  

---

## 🎬 Conclusion  

✅ **OpenVPN ou WireGuard ?**  
- **WireGuard** est plus simple et plus rapide.  
- **OpenVPN en mode Routé** est plus sécurisé et compatible avec tous les appareils.  

✅ **Avec ce guide, tu pourras :**  
- Accéder à Internet depuis l’étranger via la connexion Freebox.  
- Te connecter à ton **PC en France** comme si tu étais sur place.  
- **Contourner les restrictions locales** en utilisant l’IP française.  

**Besoin d’aide ? Pose tes questions ! 🚀**  
