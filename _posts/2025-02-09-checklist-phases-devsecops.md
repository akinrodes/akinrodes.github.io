---
layout: post
title: Checklist DevSecOps par Phase du Cycle de Vie
date: 2025-02-09
categories: [Security, DevSecOps]
tags: [security, devsecops, checklist, lifecycle]
published: true
---

# **Guide d'Utilisation de la Checklist**

## **Comment Utiliser cette Checklist**

### 1. **Comprendre l'Organisation par Phases**
- La checklist est organisée selon les phases du cycle DevSecOps
- Chaque phase contient des points de contrôle spécifiques
- Les points sont pondérés de 1 à 3 selon leur importance

### 2. **Système de Scoring**
- **Points critiques (3)** : Essentiels pour la sécurité
- **Points importants (2)** : Recommandés pour une bonne sécurité
- **Points basiques (1)** : Bonnes pratiques à suivre

### 3. **Niveaux de Maturité**
- **90-100%** : Expert - Sécurité de niveau entreprise
- **75-89%** : Avancé - Bonne sécurité, quelques améliorations possibles
- **50-74%** : Intermédiaire - Sécurité basique en place
- **25-49%** : Basique - Fondations à renforcer
- **0-24%** : Initial - Plan d'action urgent nécessaire

<div id="phase-report-container"></div>

## 1️⃣ **Phase de Planification**

### Modélisation des Menaces
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="threat-modeling">
    <label for="threat-modeling">Réalisation d'une analyse de menaces formelle (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Effectuer une analyse systématique des menaces potentielles en utilisant des méthodologies comme STRIDE ou PASTA.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Microsoft Threat Modeling Tool (Gratuit)</li>
        <li>OWASP Threat Dragon (Opensource)</li>
        <li>IriusRisk (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Identification précoce des risques de sécurité potentiels.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="data-flow">
    <label for="data-flow">Documentation des flux de données sensibles (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Cartographier tous les flux de données sensibles dans l'application.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Draw.io (Gratuit)</li>
        <li>Lucidchart (Commercial)</li>
        <li>Miro (Freemium)</li>
      </ul>
      <p><strong>Impact</strong>: Compréhension claire des données à protéger.</p>
    </div>
  </div>
</div>

## 2️⃣ **Phase de Développement**

### Sécurité du Code
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="sast">
    <label for="sast">Intégration SAST dans l'IDE (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Intégrer des outils de sécurité statiques dans l'environnement de développement.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>SonarQube (Freemium)</li>
        <li>Veracode (Commercial)</li>
        <li>Checkmarx (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Détection précoce des vulnérabilités de code.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="secure-coding">
    <label for="secure-coding">Standards de codage sécurisé définis (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Définir des standards de codage pour éviter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>OWASP Secure Coding Practices (Gratuit)</li>
        <li>SANS Secure Coding (Gratuit)</li>
      </ul>
      <p><strong>Impact</strong>: Réduction des risques de sécurité liés au code.</p>
    </div>
  </div>
</div>

## 3️⃣ **Phase de Build**

### Sécurité des Conteneurs
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="container-scan">
    <label for="container-scan">Scan des images conteneurs (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Scanner les images conteneurs pour détecter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Docker Hub (Gratuit)</li>
        <li>Quay (Freemium)</li>
        <li>CoreOS Clair (Opensource)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurisation des conteneurs.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="container-configuration">
    <label for="container-configuration">Configuration sécurisée des conteneurs (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Configurer les conteneurs pour éviter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Docker (Gratuit)</li>
        <li>Kubernetes (Opensource)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurisation des conteneurs.</p>
    </div>
  </div>
</div>

## 4️⃣ **Phase de Test**

### Tests Dynamiques
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="dast">
    <label for="dast">DAST automatisé (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Effectuer des tests dynamiques pour détecter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>OWASP ZAP (Opensource)</li>
        <li>Burp Suite (Commercial)</li>
        <li>Acunetix (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Détection des vulnérabilités.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="penetration-testing">
    <label for="penetration-testing">Tests de pénétration réguliers (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Effectuer des tests de pénétration pour détecter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Metasploit (Opensource)</li>
        <li>Core Impact (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Détection des vulnérabilités.</p>
    </div>
  </div>
</div>

### Sécurité des API
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="api-security">
    <label for="api-security">Sécurisation des API (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place une sécurité complète pour les API.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>API Security Scanner (Opensource)</li>
        <li>42Crunch (Commercial)</li>
        <li>Salt Security (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Protection contre les attaques API.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="api-gateway">
    <label for="api-gateway">API Gateway sécurisé (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Implémenter un API Gateway avec des contrôles de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Kong Gateway (Opensource)</li>
        <li>AWS API Gateway (Commercial)</li>
        <li>Azure API Management (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Contrôle centralisé de la sécurité API.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="api-documentation">
    <label for="api-documentation">Documentation API sécurisée (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Documenter les aspects de sécurité des API.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Swagger/OpenAPI (Opensource)</li>
        <li>Postman (Freemium)</li>
        <li>ReadMe (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Meilleure compréhension et utilisation sécurisée des API.</p>
    </div>
  </div>
</div>

### Sécurité des Microservices
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="service-mesh">
    <label for="service-mesh">Service Mesh Security (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Sécuriser la communication entre les microservices.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Istio (Opensource)</li>
        <li>Linkerd (Opensource)</li>
        <li>AWS App Mesh (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Communication sécurisée entre services.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="service-isolation">
    <label for="service-isolation">Isolation des Services (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Implémenter une isolation forte entre les services.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Network Policies Kubernetes (Opensource)</li>
        <li>Calico (Opensource)</li>
        <li>Cilium (Opensource)</li>
      </ul>
      <p><strong>Impact</strong>: Limitation de la propagation des attaques.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="service-authentication">
    <label for="service-authentication">Authentication Inter-Services (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place une authentification forte entre services.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>mTLS (Protocole)</li>
        <li>Spiffe/Spire (Opensource)</li>
        <li>HashiCorp Vault (Opensource/Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Prévention des accès non autorisés entre services.</p>
    </div>
  </div>
</div>

### Conformité et Gouvernance
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="compliance-frameworks">
    <label for="compliance-frameworks">Frameworks de Conformité (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mise en conformité avec les standards réglementaires.</p>
      <p><strong>Frameworks recommandés</strong>:</p>
      <ul>
        <li>GDPR/RGPD</li>
        <li>PCI DSS</li>
        <li>ISO 27001</li>
        <li>SOC 2</li>
      </ul>
      <p><strong>Impact</strong>: Conformité réglementaire et légale.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="security-policies">
    <label for="security-policies">Politiques de Sécurité (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Définir et maintenir des politiques de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Confluence (Commercial)</li>
        <li>GitBook (Freemium)</li>
        <li>SharePoint (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Standardisation des pratiques de sécurité.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="security-audits">
    <label for="security-audits">Audits de Sécurité (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Réaliser des audits réguliers de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Qualys (Commercial)</li>
        <li>Rapid7 InsightVM (Commercial)</li>
        <li>OpenVAS (Opensource)</li>
      </ul>
      <p><strong>Impact</strong>: Validation continue de la sécurité.</p>
    </div>
  </div>
</div>

### Gestion des Identités
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="iam-management">
    <label for="iam-management">Gestion des Accès Privilégiés (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Gérer les accès privilégiés de manière sécurisée.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>CyberArk (Commercial)</li>
        <li>HashiCorp Vault (Opensource/Commercial)</li>
        <li>BeyondTrust (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Contrôle des accès privilégiés.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="sso-implementation">
    <label for="sso-implementation">Single Sign-On (SSO) (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Implémenter une solution SSO sécurisée.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Keycloak (Opensource)</li>
        <li>Okta (Commercial)</li>
        <li>Auth0 (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Authentification centralisée et sécurisée.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="zero-trust">
    <label for="zero-trust">Zero Trust Architecture (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place une architecture Zero Trust.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Zscaler (Commercial)</li>
        <li>Cloudflare Zero Trust (Commercial)</li>
        <li>Google BeyondCorp (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurité renforcée basée sur la confiance zéro.</p>
    </div>
  </div>
</div>

### Observabilité
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="centralized-logging">
    <label for="centralized-logging">Logging Centralisé (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place un système de logging centralisé.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>ELK Stack (Opensource)</li>
        <li>Graylog (Opensource)</li>
        <li>Splunk (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Visibilité complète sur les événements de sécurité.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="security-monitoring">
    <label for="security-monitoring">Monitoring de Sécurité (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Surveiller en temps réel les événements de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Prometheus + Grafana (Opensource)</li>
        <li>Datadog Security (Commercial)</li>
        <li>New Relic (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Détection rapide des incidents de sécurité.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="security-alerting">
    <label for="security-alerting">Alerting Avancé (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Configurer des alertes intelligentes pour la sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>PagerDuty (Commercial)</li>
        <li>OpsGenie (Commercial)</li>
        <li>AlertManager (Opensource)</li>
      </ul>
      <p><strong>Impact</strong>: Réponse rapide aux incidents de sécurité.</p>
    </div>
  </div>
</div>

### Sécurité des Données
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="data-encryption">
    <label for="data-encryption">Chiffrement des Données (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place le chiffrement des données au repos et en transit.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>HashiCorp Vault (Opensource/Commercial)</li>
        <li>AWS KMS (Commercial)</li>
        <li>Azure Key Vault (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Protection des données sensibles.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="data-classification">
    <label for="data-classification">Classification des Données (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Classifier et étiqueter les données selon leur sensibilité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Microsoft Information Protection (Commercial)</li>
        <li>AWS Macie (Commercial)</li>
        <li>Google Cloud DLP (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Protection adaptée selon la sensibilité des données.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="data-lifecycle">
    <label for="data-lifecycle">Gestion du Cycle de Vie des Données (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Gérer le cycle de vie complet des données.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>AWS S3 Lifecycle (Commercial)</li>
        <li>Azure Storage Lifecycle (Commercial)</li>
        <li>NetApp (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Gestion sécurisée des données tout au long de leur cycle de vie.</p>
    </div>
  </div>
</div>

## 5️⃣ **Phase de Déploiement**

### Sécurité du Pipeline
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="pipeline-security">
    <label for="pipeline-security">Pipeline CI/CD sécurisé (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Sécuriser le pipeline CI/CD pour éviter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Jenkins (Opensource)</li>
        <li>GitLab CI/CD (Freemium)</li>
        <li>CircleCI (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurisation du pipeline CI/CD.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="secrets-management">
    <label for="secrets-management">Gestion des secrets dans le pipeline (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Gérer les secrets dans le pipeline pour éviter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>HashiCorp Vault (Opensource)</li>
        <li>AWS Secrets Manager (Commercial)</li>
        <li>Google Cloud Secret Manager (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurisation des secrets.</p>
    </div>
  </div>
</div>

## 6️⃣ **Phase d'Exploitation**

### Sécurité Cloud
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="cspm">
    <label for="cspm">Configuration CSPM (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Configurer le CSPM pour détecter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>AWS Config (Commercial)</li>
        <li>Google Cloud Security Command Center (Commercial)</li>
        <li>Azure Security Center (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Détection des vulnérabilités.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="workload-protection">
    <label for="workload-protection">Protection des workloads (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Protéger les workloads pour éviter les vulnérabilités.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>AWS IAM (Commercial)</li>
        <li>Google Cloud IAM (Commercial)</li>
        <li>Azure Active Directory (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Sécurisation des workloads.</p>
    </div>
  </div>
</div>

## 7️⃣ **Phase de Réponse**

### Gestion des Incidents
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="incident-response">
    <label for="incident-response">Procédure de réponse définie (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Définir une procédure de réponse pour les incidents de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>NIST 800-61 (Gratuit)</li>
        <li>ISO 27035 (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Réponse efficace aux incidents de sécurité.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="incident-response-team">
    <label for="incident-response-team">Équipe d'intervention formée (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Former une équipe d'intervention pour les incidents de sécurité.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Cybersecurity and Infrastructure Security Agency (CISA) (Gratuit)</li>
        <li>SANS Institute (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Réponse efficace aux incidents de sécurité.</p>
    </div>
  </div>
</div>

## 8️⃣ **Aspects Transverses**

### Formation
<div class="security-section">
  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="3" id="awareness-training">
    <label for="awareness-training">Programme de sensibilisation (3)</label>
    <div class="details">
      <p><strong>Description</strong>: Mettre en place un programme de sensibilisation pour les employés.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>SANS Institute (Commercial)</li>
        <li>Cybersecurity and Infrastructure Security Agency (CISA) (Gratuit)</li>
      </ul>
      <p><strong>Impact</strong>: Sensibilisation des employés à la sécurité.</p>
    </div>
  </div>

  <div class="security-item">
    <input type="checkbox" class="security-check" data-weight="2" id="technical-training">
    <label for="technical-training">Formation technique régulière (2)</label>
    <div class="details">
      <p><strong>Description</strong>: Fournir une formation technique régulière pour les employés.</p>
      <p><strong>Outils recommandés</strong>:</p>
      <ul>
        <li>Udemy (Commercial)</li>
        <li>Coursera (Commercial)</li>
      </ul>
      <p><strong>Impact</strong>: Amélioration des compétences techniques des employés.</p>
    </div>
  </div>
</div>

<style>
.security-section {
    margin: 20px 0;
}

.security-item {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
}

.security-item:hover {
    background: #f8f9fa;
}

.security-item label {
    cursor: pointer;
    font-weight: bold;
}

.details {
    margin-top: 10px;
    padding: 10px;
    background: #f8f9fa;
    border-left: 3px solid #007bff;
    display: none;
}

.security-item:hover .details {
    display: block;
}

.phase-report {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 20px 0;
}

.overall-score {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
}

.phase-score {
    margin: 10px 0;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 0;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #ff4444 0%, #ffbb33 50%, #00C851 100%);
    transition: width 0.3s ease;
}

.maturity-level {
    font-size: 1.2em;
    font-weight: bold;
    margin: 10px 0;
}

.expert { color: #00C851; }
.advanced { color: #33b5e5; }
.intermediate { color: #ffbb33; }
.basic { color: #ff4444; }
.initial { color: #cc0000; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeScoring();
    
    // Ajouter les événements pour afficher/masquer les détails
    document.querySelectorAll('.security-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                const details = this.querySelector('.details');
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

function initializeScoring() {
    const phases = [
        { name: "Planification", maxScore: 30 },
        { name: "Développement", maxScore: 45 },
        { name: "Build", maxScore: 30 },
        { name: "Test", maxScore: 60 },
        { name: "Déploiement", maxScore: 35 },
        { name: "Exploitation", maxScore: 45 },
        { name: "Réponse", maxScore: 35 },
        { name: "Aspects Transverses", maxScore: 35 }
    ];

    const checkboxes = document.querySelectorAll('.security-check');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => updateReport(phases));
    });

    updateReport(phases);
}

function updateReport(phases) {
    let totalScore = 0;
    let totalMaxScore = 0;
    let phaseScores = [];

    phases.forEach(phase => {
        const phaseSection = document.querySelector(`h2:contains('${phase.name}')`);
        if (phaseSection) {
            let phaseScore = 0;
            const checkboxes = phaseSection.parentElement.querySelectorAll('.security-check');
            
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const weight = parseInt(checkbox.dataset.weight);
                    phaseScore += weight;
                }
            });

            phaseScores.push({
                name: phase.name,
                score: phaseScore,
                maxScore: phase.maxScore,
                percentage: (phaseScore / phase.maxScore) * 100
            });

            totalScore += phaseScore;
            totalMaxScore += phase.maxScore;
        }
    });

    const overallPercentage = (totalScore / totalMaxScore) * 100;
    const maturityLevel = getMaturityLevel(overallPercentage);
    
    let reportHTML = `
        <div class="phase-report">
            <h2> Rapport de Maturité DevSecOps</h2>
            <div class="overall-score">
                <h3>Score Global: ${totalScore}/${totalMaxScore} (${overallPercentage.toFixed(1)}%)</h3>
                <div class="maturity-level ${maturityLevel.class}">${maturityLevel.label}</div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${overallPercentage}%"></div>
                </div>
            </div>
            <div class="phase-scores">
                <h3>Scores par Phase</h3>
                ${phaseScores.map(phase => `
                    <div class="phase-score">
                        <h4>${phase.name}</h4>
                        <p>Score: ${phase.score}/${phase.maxScore} (${phase.percentage.toFixed(1)}%)</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${phase.percentage}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('phase-report-container').innerHTML = reportHTML;
}

function getMaturityLevel(percentage) {
    if (percentage >= 90) return { label: ' Expert - Sécurité de niveau entreprise', class: 'expert' };
    if (percentage >= 75) return { label: ' Avancé - Bonne sécurité', class: 'advanced' };
    if (percentage >= 50) return { label: ' Intermédiaire - Sécurité basique', class: 'intermediate' };
    if (percentage >= 25) return { label: ' Basique - À renforcer', class: 'basic' };
    return { label: ' Initial - Action urgente requise', class: 'initial' };
}
</script>
