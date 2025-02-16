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

5. CI/CD and build security
Cette tâche explorera les stratégies clés pour créer un environnement de développement sécurisé, en tenant compte des leçons tirées du cas d'utilisation de SolarWinds.


# Fundamentals of CI/CD

According to Gitlab, there are eight fundamentals for CI/CD:

A single source repository - Source code management should be used to store all the necessary files and scripts required to build the application.
Frequent check-ins to the main branch - Code updates should be kept smaller and performed more frequently to ensure integrations occur as efficiently as possible.
Automated builds - Build should be automated and executed as updates are being pushed to the branches of the source code storage solution.
Self-testing builds - As builds are automated, there should be steps introduced where the outcome of the build is automatically tested for integrity, quality, and security compliance.
Frequent iterations - By making frequent commits, conflicts occur less frequently. Hence, commits should be kept smaller and made regularly.
Stable testing environments - Code should be tested in an environment that mimics production as closely as possible.
Maximum visibility - Each developer should have access to the latest builds and code to understand and see the changes that have been made.
Predictable deployments anytime - The pipeline should be streamlined to ensure that deployments can be made at any time with almost no risk to production stability.

## Un pipeline CI / CD typique

Alors, à quoi ressemble un pipeline typique compatible CI / CD ? Le diagramme de réseau de cette salle aide un peu à expliquer cela. Examinons les différents composants que l'on peut trouver dans ce pipeline :

- Postes de travail pour développeurs  – Là où la magie du codage se produit, les développeurs élaborent et construisent du code. Dans ce réseau, cela est simulé via votre AttackBox.
- Solution de stockage du code source  - Il s'agit d'un espace réservé central pour stocker et suivre différentes versions de code. Il s'agit du serveur Gitlab présent sur notre réseau.
- Orchestrateur de build  : coordonne et gère l'automatisation des environnements de build et de déploiement. Gitlab et Jenkins sont tous deux utilisés comme serveurs de build dans ce réseau.
- Agents de build  – Ces machines construisent, testent et empaquetent le code. Nous utilisons les exécuteurs GitLab et les agents Jenkins pour nos agents de build.
- Environnements  - Comme mentionné brièvement ci-dessus, il existe généralement des environnements de développement, de test (staging) et de production (live code). Le code est construit et validé au fil des étapes. Dans notre réseau, nous avons à la fois un environnement DEV et PROD.

''Utilisation de cas SolarWinds pour garantir la sécurité de notre environnement de construction. Ces mesures consistent à mettre en œuvre des techniques d'isolation et de segmentation et à configurer des contrôles d'accès et des autorisations appropriés pour limiter les accès non autorisés.''

## Mettre en œuvre des techniques d'isolement et de segmentation

L'incident de SolarWinds a mis en évidence l'importance d'isoler et de segmenter les composants critiques au sein du système de build. En séparant les différentes étapes du processus de build et en utilisant des contrôles d'accès stricts, vous pouvez atténuer le risque qu'un seul composant compromis compromette l'ensemble du système. L'isolement peut être obtenu grâce à des technologies de conteneurisation ou de virtualisation, créant des sandbox sécurisés pour exécuter les processus de build sans exposer l'ensemble de l'environnement.

## Configurer des contrôles d'accès et des autorisations appropriés

Il est essentiel de limiter l'accès non autorisé à l'environnement bâti pour maintenir l'intégrité et la sécurité du système. En suivant le principe du moindre privilège, accordez l'accès uniquement aux personnes ou aux groupes qui en ont besoin pour effectuer leurs tâches spécifiques. Mettez en œuvre des mécanismes d'authentification robustes tels que l'authentification multifacteur ( MFA ) et appliquez des politiques de mots de passe solides. De plus, examinez et mettez à jour régulièrement les contrôles d'accès pour vous assurer que les privilèges d'accès sont conformes au principe du moindre privilège.

Il est essentiel de mettre en œuvre des contrôles stricts sur les comptes privilégiés, notamment en limitant le nombre de personnes disposant d’un accès administratif et en mettant en place des mécanismes stricts de surveillance et d’audit des activités privilégiées.

## Une note sur la sécurité du réseau

La sécurité du réseau est essentielle pour protéger le système de construction contre les menaces externes. La mise en œuvre d'une segmentation réseau appropriée, comme la division de l'environnement bâti en zones réseau distinctes, peut aider à contenir les violations potentielles et à limiter les mouvements latéraux. Voici quelques autres points essentiels à prendre en compte :

Mettez en œuvre des canaux de communication sécurisés pour les mises à jour logicielles et assurez-vous que tous les composants ou dépendances tiers proviennent de sources fiables. 
Surveillez et évaluez régulièrement la sécurité de vos fournisseurs de logiciels pour identifier et traiter les risques ou vulnérabilités potentiels.
Les enseignements tirés d’incidents tels que l’attaque SolarWinds nous aident à reconnaître l’importance cruciale de sécuriser l’ensemble du processus de construction, du développement du code au déploiement, pour nous protéger contre les menaces potentielles et garantir la fiabilité de votre logiciel.