---
layout: post
title: TryHackMe DevSecOps Room
date: 2025-02-04
categories: [devsecops]
tags: [tryhackme, devsecops]     # TAG names should always be lowercase
---


# Intro to Pipeline Automation

This room provides an introduction to DevOps pipeline automation and the potential security concerns.

1. DevOps Pipelines 
- Source Code and Version Control
- Dependency Management
- Automated Testing
- Continuous Integration and Delivery
- Environments

2. Source Code and Version Control
    
- Source Code Storage

We need to consider several things when deciding where to store our code:

    How can we perform access control for our source code?
    How can we make sure that changes made are tracked?
    Can we integrate our source code storage system with our development tools?
    Can we store and actively use multiple different versions of our source code?
    Should we host our source code internally, or can we use an external third party to host our code?

The answers to these questions will help us choose the correct source code storage solution for our project.

**Tools :  Github, Gitlab, TortoiseSvn, ApacheSvn**

- Version Control

We need version control for two main reasons:

    We are often integrating new features in our software. Modern development approaches, such as Agile, means we are constantly updating our code. To keep all of these updates in check, we need version control.
    An entire development team is working on the code, not just one developer. To ensure that we can integrate the changes from multiple developers, version control is required.

Version control allows us to keep multiple versions of the code. This can be the specific version each developer is working on, but it can also be completely different versions of our application, including minor and major versions.

**Tools :  Git, Svn**

- Security Considerations

Our source code is often our secret sauce. 

-- Case Study: 
If an attacker got access to the repo, they could use a tool such as GittyLeaks, which would scan through the commits for sensitive information. Even if this information no longer exists in the current version, these tools can scan through all previous versions and uncover these secrets.

**Tools :  GittyLeaks**

3. Dependency Management



4. 
**Phase de déploiement** 
- Secret Management
-- Utiliser des variables d'environnement
--- Tools : HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Google Cloud Secrets Manager

5.
Cette tâche explorera les stratégies clés pour créer un environnement de développement sécurisé, en tenant compte des leçons tirées du cas d'utilisation de SolarWinds.

Un pipeline CI / CD typique

Alors, à quoi ressemble un pipeline typique compatible CI / CD ? Le diagramme de réseau de cette salle aide un peu à expliquer cela. Examinons les différents composants que l'on peut trouver dans ce pipeline :

- Postes de travail pour développeurs  – Là où la magie du codage se produit, les développeurs élaborent et construisent du code. Dans ce réseau, cela est simulé via votre AttackBox.
- Solution de stockage du code source  - Il s'agit d'un espace réservé central pour stocker et suivre différentes versions de code. Il s'agit du serveur Gitlab présent sur notre réseau.
- Orchestrateur de build  : coordonne et gère l'automatisation des environnements de build et de déploiement. Gitlab et Jenkins sont tous deux utilisés comme serveurs de build dans ce réseau.
- Agents de build  – Ces machines construisent, testent et empaquetent le code. Nous utilisons les exécuteurs GitLab et les agents Jenkins pour nos agents de build.
- Environnements  - Comme mentionné brièvement ci-dessus, il existe généralement des environnements de développement, de test (staging) et de production (live code). Le code est construit et validé au fil des étapes. Dans notre réseau, nous avons à la fois un environnement DEV et PROD.
