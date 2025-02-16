---
layout: post
title: Évaluation des Risques dans le SDLC - Guide Détaillé
date: 2025-02-08
categories: [Security, DevSecOps]
tags: [security, devsecops, risk-assessment, sdlc]
published: false
---

# 🎯 **Évaluation des Risques dans le SDLC**

## 📊 **Méthodologie d'Évaluation**

### Formule de Base
```
Risque = Probabilité × Impact
```

### Facteurs d'Évaluation
1. **Probabilité (P)**
   - 1: Rare (une fois par an)
   - 2: Possible (une fois par trimestre)
   - 3: Fréquent (une fois par mois)

2. **Impact (I)**
   - 1: Faible (pas d'interruption)
   - 2: Moyen (interruption mineure)
   - 3: Élevé (interruption majeure)

3. **Score de Risque (R = P × I)**
   - 1-2: 🟢 Faible
   - 3-4: 🟡 Moyen
   - 6-9: 🔴 Élevé

## 🎯 **Scénarios de Risque**

### 📱 **Cas 1: Application Mobile de Paiement**

#### Contexte
- Application de paiement mobile
- 100,000 utilisateurs actifs
- Transactions quotidiennes
- Données financières sensibles

#### Analyse Détaillée
```
1. Risques Identifiés:
   a) Vol de données de carte
      - Probabilité: 2 (Possible)
      - Impact: 3 (Élevé)
      - Score: 6 🔴
   
   b) Indisponibilité du service
      - Probabilité: 3 (Fréquent)
      - Impact: 2 (Moyen)
      - Score: 6 🔴
   
   c) Fraude utilisateur
      - Probabilité: 2 (Possible)
      - Impact: 2 (Moyen)
      - Score: 4 🟡

2. Impact Financier:
   - Perte par fraude = $100/incident
   - Coût indisponibilité = $1000/heure
   - Perte réputation = $10,000/incident majeur
```

### 🛒 **Cas 2: Plateforme E-commerce**

#### Contexte
- Site e-commerce B2C
- 50,000 produits
- 1M visites mensuelles
- Paiements en ligne

#### Analyse Détaillée
```
1. Risques Principaux:
   a) Injection SQL
      - Probabilité: 1 (Rare)
      - Impact: 3 (Élevé)
      - Score: 3 🟡
   
   b) XSS
      - Probabilité: 2 (Possible)
      - Impact: 2 (Moyen)
      - Score: 4 🟡
   
   c) CSRF
      - Probabilité: 2 (Possible)
      - Impact: 2 (Moyen)
      - Score: 4 🟡

2. Impact Business:
   - Perte vente = $5,000/heure
   - Support client = $500/incident
   - Remboursements = $200/client affecté
```

### 👥 **Cas 3: API RH Interne**

#### Contexte
- API gestion RH
- Données employés
- Accès interne uniquement
- Intégration multi-services

#### Analyse Détaillée
```
1. Évaluation des Actifs:
   - Données personnelles (RGPD)
   - Données salariales
   - Documents confidentiels

2. Vulnérabilités Potentielles:
   - Authentification simple facteur
   - Logs insuffisants
   - Pas de chiffrement en transit

3. Menaces Identifiées:
   - Accès non autorisé interne
   - Fuite de données
   - Modification non autorisée
```

#### Calcul Détaillé
```
Impact par incident:
- Violation RGPD = $20,000
- Perte de confiance = $10,000
- Coûts légaux = $15,000

ARO = 0.2 (une fois tous les 5 ans)
ALE = ($20,000 + $10,000 + $15,000) × 0.2
    = ($45,000) × 0.2
    = $9,000
```

### 🌐 **Cas 4: Service Cloud Public**

#### Contexte
- Service SaaS B2B
- 500 clients entreprises
- Infrastructure multi-cloud
- Données critiques business

#### Analyse Complète
```
1. Cartographie des Risques:
   a) Techniques:
      - Fuite de données
      - Interruption service
      - Corruption données
   
   b) Business:
      - Perte clients
      - Réputation
      - Conformité

2. Impact Financier:
   - Perte client = $50,000/client
   - SLA penalties = $10,000/heure
   - Support = $5,000/incident

3. Probabilités:
   - Fuite données: 0.1
   - Interruption: 0.3
   - Corruption: 0.05
```

#### Plan de Remédiation
```
Priorité 1: Sécurité Données
- Chiffrement bout-en-bout
- Contrôle accès IAM
- Audit logs

Coût Implementation = $100,000
ROI = (ALE avant - ALE après) / Coût
    = ($500,000 - $50,000) / $100,000
    = 450%
```

### 📊 **Cas 5: Microservices**

#### Contexte
- Architecture microservices
- 20 services différents
- Communication inter-services
- Données distribuées

#### Analyse par Service
```
Service Authentication:
1. Impact: 5 (critique)
2. Complexité: 3 (moyenne)
3. Exposition: 5 (publique)
Score = 13 → Critique 🔴

Service Logging:
1. Impact: 2 (faible)
2. Complexité: 1 (simple)
3. Exposition: 1 (interne)
Score = 4 → Faible 🟢
```

#### Matrice de Dépendances
```
Impact Cascade:
Auth → Paiement → Commandes → Notifications
Risque Propagation = Produit des probabilités
```

## 📈 **Recommandations**

### Priorité Haute
1. Implémentation MFA
2. Chiffrement données sensibles
3. Audit logs centralisés

### Priorité Moyenne
1. Tests de pénétration réguliers
2. Formation sécurité équipes
3. Revue code automatisée

### Priorité Basse
1. Documentation sécurité
2. Rotation des secrets
3. Surveillance proactive
