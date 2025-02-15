---
layout: post
title: Checklist DevSecOps Complète avec Sélection d'Outils
date: 2025-02-09
categories: [Security, DevSecOps]
tags: [security, devsecops, checklist, tools]
published: true
---

# 🛠️ **Checklist DevSecOps Complète avec Sélection d'Outils**

<div id="phase-report-container"></div>

<div class="tools-selection">
    <h2>🔧 Outils Sélectionnés</h2>
    <div id="selected-tools"></div>
    <button onclick="exportToolSelection()" class="export-btn">Exporter la Sélection</button>
</div>

## 1️⃣ **Phase de Planification**

### Modélisation des Menaces
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="threat-modeling">
        <label for="threat-modeling">Réalisation d'une analyse de menaces formelle (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Effectuer une analyse systématique des menaces potentielles.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="threat-modeling" data-type="opensource" value="owasp-threat-dragon">
                            OWASP Threat Dragon
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="threat-modeling" data-type="opensource" value="pytm">
                            PyTM
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Gestion des Exigences
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="security-requirements">
        <label for="security-requirements">Définition des exigences de sécurité (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Définir les exigences de sécurité du projet.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="requirements" data-type="opensource" value="owasp-asvs">
                            OWASP ASVS
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 2️⃣ **Phase de Développement**

### Analyse Statique (SAST)
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="sast">
        <label for="sast">Analyse Statique du Code (SAST) (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Analyser le code source pour détecter les vulnérabilités de sécurité pendant le développement.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="sonarqube">
                            SonarQube Community
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="semgrep">
                            Semgrep
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="pmd">
                            PMD
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="spotbugs">
                            SpotBugs
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="eslint">
                            ESLint (JavaScript)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="opensource" value="bandit">
                            Bandit (Python)
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="commercial" value="fortify">
                            Micro Focus Fortify
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="commercial" value="checkmarx">
                            Checkmarx SAST
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sast" data-type="commercial" value="veracode">
                            Veracode Static Analysis
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Analyse des Dépendances
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="sca">
        <label for="sca">Analyse des Composants (SCA) (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Détecter les vulnérabilités dans les dépendances et bibliothèques tierces.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sca" data-type="opensource" value="dependency-check">
                            OWASP Dependency-Check
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sca" data-type="opensource" value="snyk-os">
                            Snyk Open Source
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sca" data-type="opensource" value="retire-js">
                            Retire.js
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sca" data-type="commercial" value="blackduck">
                            Synopsys Black Duck
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="sca" data-type="commercial" value="whitesource">
                            WhiteSource
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Gestion des Secrets
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="secrets-scanning">
        <label for="secrets-scanning">Détection des Secrets (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Détecter et prévenir la fuite de secrets (clés API, mots de passe, etc.) dans le code.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="gitleaks">
                            Gitleaks
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="trufflehog">
                            TruffleHog
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="detect-secrets">
                            detect-secrets
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="commercial" value="gitguardian">
                            GitGuardian
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Sécurité des IDE
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="2" id="ide-security">
        <label for="ide-security">Plugins de Sécurité IDE (2)</label>
        <div class="details">
            <p><strong>Description</strong>: Intégrer des outils de sécurité directement dans l'environnement de développement.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ide" data-type="opensource" value="sonarlint">
                            SonarLint
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ide" data-type="opensource" value="snyk-ide">
                            Snyk IDE Plugin
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ide" data-type="commercial" value="checkmarx-ide">
                            Checkmarx IDE Plugin
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Revue de Code
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="code-review">
        <label for="code-review">Outils de Revue de Code (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Faciliter la revue de code avec des outils automatisés.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="review" data-type="opensource" value="gerrit">
                            Gerrit
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="review" data-type="opensource" value="reviewboard">
                            Review Board
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="review" data-type="commercial" value="crucible">
                            Atlassian Crucible
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Tests de Sécurité Unitaires
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="2" id="security-unit-tests">
        <label for="security-unit-tests">Tests Unitaires de Sécurité (2)</label>
        <div class="details">
            <p><strong>Description</strong>: Implémenter des tests unitaires spécifiques à la sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="unit-tests" data-type="opensource" value="junit">
                            JUnit (Java)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="unit-tests" data-type="opensource" value="pytest">
                            pytest (Python)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="unit-tests" data-type="opensource" value="mocha">
                            Mocha (JavaScript)
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 3️⃣ **Phase de Build**

### Sécurité des Conteneurs
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="container-security">
        <label for="container-security">Analyse des Images Conteneurs (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Scanner les vulnérabilités dans les images conteneurs.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="trivy">
                            Trivy
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="clair">
                            Clair
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 4️⃣ **Phase de Test**

### Tests Dynamiques (DAST)
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="dast">
        <label for="dast">Analyse Dynamique des Applications (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Tester l'application en cours d'exécution pour identifier les vulnérabilités.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="opensource" value="owasp-zap">
                            OWASP ZAP
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="opensource" value="nikto">
                            Nikto
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="opensource" value="w3af">
                            w3af
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="opensource" value="arachni">
                            Arachni
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="commercial" value="burp-suite">
                            Burp Suite Professional
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="commercial" value="acunetix">
                            Acunetix
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="commercial" value="netsparker">
                            Netsparker
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="dast" data-type="commercial" value="checkmarx-dast">
                            Checkmarx DAST
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Tests de Fuzzing
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="fuzzing">
        <label for="fuzzing">Tests de Fuzzing (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Tester l'application avec des données aléatoires pour identifier les vulnérabilités.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="fuzzing" data-type="opensource" value="afl">
                            American Fuzzy Lop (AFL)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="fuzzing" data-type="opensource" value="radamsa">
                            Radamsa
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="fuzzing" data-type="opensource" value="ffuf">
                            ffuf
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="fuzzing" data-type="opensource" value="wfuzz">
                            Wfuzz
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="fuzzing" data-type="commercial" value="peach-fuzzer">
                            Peach Fuzzer
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Tests d'API
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="api-testing">
        <label for="api-testing">Tests de Sécurité des API (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Tester la sécurité des API REST, GraphQL, et autres.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="opensource" value="postman">
                            Postman
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="opensource" value="soapui">
                            SoapUI
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="opensource" value="dredd">
                            Dredd
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="opensource" value="karate">
                            Karate
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="commercial" value="42crunch">
                            42Crunch
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="api" data-type="commercial" value="salt-security">
                            Salt Security
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Tests de Pénétration
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="pentest">
        <label for="pentest">Tests de Pénétration (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Effectuer des tests de pénétration manuels et automatisés.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="opensource" value="metasploit">
                            Metasploit Framework
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="opensource" value="sqlmap">
                            SQLMap
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="opensource" value="nmap">
                            Nmap
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="opensource" value="wireshark">
                            Wireshark
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="commercial" value="cobalt-strike">
                            Cobalt Strike
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pentest" data-type="commercial" value="core-impact">
                            Core Impact
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Tests de Charge Sécurisée
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="2" id="load-testing">
        <label for="load-testing">Tests de Charge et DoS (2)</label>
        <div class="details">
            <p><strong>Description</strong>: Tester la résistance aux attaques par déni de service.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="opensource" value="apache-jmeter">
                            Apache JMeter
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="opensource" value="gatling">
                            Gatling
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="opensource" value="locust">
                            Locust
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="opensource" value="siege">
                            Siege
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="commercial" value="blazemeter">
                            BlazeMeter
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="load" data-type="commercial" value="loadrunner">
                            Micro Focus LoadRunner
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 5️⃣ **Phase de Déploiement**

### Sécurité des Conteneurs
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="container-security">
        <label for="container-security">Sécurité des Conteneurs (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Sécuriser les conteneurs et leurs images.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="trivy">
                            Trivy
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="clair">
                            Clair
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="docker-bench">
                            Docker Bench Security
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="anchore">
                            Anchore Engine
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="opensource" value="falco">
                            Falco
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="commercial" value="aqua">
                            Aqua Security
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="commercial" value="twistlock">
                            Twistlock (Prisma Cloud)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="container" data-type="commercial" value="snyk-container">
                            Snyk Container
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Infrastructure as Code (IaC)
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="iac-security">
        <label for="iac-security">Sécurité de l'Infrastructure as Code (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Sécuriser les définitions d'infrastructure et les templates.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="opensource" value="checkov">
                            Checkov
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="opensource" value="tfsec">
                            tfsec
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="opensource" value="terrascan">
                            Terrascan
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="opensource" value="cfn-nag">
                            cfn-nag
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="commercial" value="snyk-iac">
                            Snyk Infrastructure as Code
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="iac" data-type="commercial" value="bridgecrew">
                            Bridgecrew
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Gestion des Secrets
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="secrets-management">
        <label for="secrets-management">Gestion des Secrets en Production (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Gérer de manière sécurisée les secrets en production.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="vault">
                            HashiCorp Vault
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="keywhiz">
                            Square Keywhiz
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="opensource" value="sealed-secrets">
                            Sealed Secrets
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial/Cloud</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="commercial" value="aws-secrets">
                            AWS Secrets Manager
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="commercial" value="azure-keyvault">
                            Azure Key Vault
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="secrets" data-type="commercial" value="gcp-secrets">
                            Google Cloud Secret Manager
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Sécurité du Pipeline CI/CD
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="pipeline-security">
        <label for="pipeline-security">Sécurité du Pipeline de Déploiement (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Sécuriser le pipeline CI/CD et ses composants.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pipeline" data-type="opensource" value="jenkins-security">
                            Jenkins Security Plugins
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pipeline" data-type="opensource" value="gitlab-security">
                            GitLab Security Features
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pipeline" data-type="opensource" value="tekton-chains">
                            Tekton Chains
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pipeline" data-type="commercial" value="github-advanced">
                            GitHub Advanced Security
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="pipeline" data-type="commercial" value="harness">
                            Harness Security
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Signature et Vérification
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="signing">
        <label for="signing">Signature et Vérification des Artefacts (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Signer et vérifier les artefacts de déploiement.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="signing" data-type="opensource" value="cosign">
                            Cosign
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="signing" data-type="opensource" value="notary">
                            Notary
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="signing" data-type="opensource" value="in-toto">
                            in-toto
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="signing" data-type="commercial" value="jfrog-xray">
                            JFrog Xray
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 6️⃣ **Phase de Surveillance**

### Détection d'Intrusion
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="ids-ips">
        <label for="ids-ips">Détection et Prévention d'Intrusion (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Détecter et prévenir les intrusions en temps réel.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="opensource" value="suricata">
                            Suricata
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="opensource" value="snort">
                            Snort
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="opensource" value="ossec">
                            OSSEC
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="opensource" value="wazuh">
                            Wazuh
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="commercial" value="crowdstrike">
                            CrowdStrike
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="commercial" value="paloalto">
                            Palo Alto Networks
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="ids" data-type="commercial" value="darktrace">
                            Darktrace
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Gestion des Logs
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="log-management">
        <label for="log-management">Gestion et Analyse des Logs (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Collecter, stocker et analyser les logs de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="opensource" value="elk">
                            ELK Stack
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="opensource" value="graylog">
                            Graylog
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="opensource" value="loki">
                            Grafana Loki
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="opensource" value="fluentd">
                            Fluentd
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="commercial" value="splunk">
                            Splunk
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="commercial" value="datadog">
                            Datadog
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="logs" data-type="commercial" value="sumologic">
                            Sumo Logic
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### SIEM
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="siem">
        <label for="siem">Gestion des Événements de Sécurité (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Collecter et analyser les événements de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="opensource" value="ossim">
                            AlienVault OSSIM
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="opensource" value="elasticsecurity">
                            Elastic Security
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="opensource" value="apache-metron">
                            Apache Metron
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="commercial" value="qradar">
                            IBM QRadar
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="commercial" value="sentinel">
                            Microsoft Sentinel
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="siem" data-type="commercial" value="exabeam">
                            Exabeam
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Surveillance des Performances
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="2" id="performance">
        <label for="performance">Surveillance des Performances et Anomalies (2)</label>
        <div class="details">
            <p><strong>Description</strong>: Détecter les anomalies de performance et de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="opensource" value="prometheus">
                            Prometheus
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="opensource" value="grafana">
                            Grafana
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="opensource" value="netdata">
                            Netdata
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="opensource" value="zabbix">
                            Zabbix
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="commercial" value="newrelic">
                            New Relic
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="commercial" value="dynatrace">
                            Dynatrace
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="apm" data-type="commercial" value="appdynamics">
                            AppDynamics
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Surveillance du Réseau
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="network-monitoring">
        <label for="network-monitoring">Surveillance du Trafic Réseau (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Surveiller et analyser le trafic réseau pour détecter les menaces.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="network" data-type="opensource" value="zeek">
                            Zeek (Bro)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="network" data-type="opensource" value="ntopng">
                            ntopng
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="network" data-type="opensource" value="nagios">
                            Nagios
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="network" data-type="commercial" value="extrahop">
                            ExtraHop
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="network" data-type="commercial" value="netscout">
                            NETSCOUT
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 7️⃣ **Phase de Réponse**

### Gestion des Incidents
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="incident-management">
        <label for="incident-management">Gestion et Coordination des Incidents (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Coordonner et gérer la réponse aux incidents de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="opensource" value="thehive">
                            TheHive
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="opensource" value="fir">
                            Fast Incident Response (FIR)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="opensource" value="dfir-orc">
                            DFIR ORC
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="commercial" value="servicenow-security">
                            ServiceNow Security Operations
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="commercial" value="demisto">
                            Demisto (Palo Alto)
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="incident" data-type="commercial" value="resilient">
                            IBM Resilient
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Analyse Forensique
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="forensics">
        <label for="forensics">Analyse Forensique et Investigation (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Analyser les systèmes compromis et collecter les preuves.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="opensource" value="volatility">
                            Volatility
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="opensource" value="autopsy">
                            Autopsy
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="opensource" value="sleuthkit">
                            The Sleuth Kit
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="opensource" value="plaso">
                            Plaso
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="commercial" value="encase">
                            EnCase
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="forensics" data-type="commercial" value="ftk">
                            Forensic Toolkit (FTK)
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Remédiation
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="remediation">
        <label for="remediation">Remédiation et Restauration (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Corriger les vulnérabilités et restaurer les systèmes.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="remediation" data-type="opensource" value="ansible">
                            Ansible
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="remediation" data-type="opensource" value="chef-inspec">
                            Chef InSpec
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="remediation" data-type="opensource" value="osquery">
                            osquery
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="remediation" data-type="commercial" value="rapid7-insightvm">
                            Rapid7 InsightVM
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="remediation" data-type="commercial" value="qualys-vm">
                            Qualys VM
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Communication de Crise
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="crisis-communication">
        <label for="crisis-communication">Communication et Coordination (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Gérer la communication pendant les incidents.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="opensource" value="matrix">
                            Matrix
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="opensource" value="mattermost">
                            Mattermost
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="opensource" value="rocket-chat">
                            Rocket.Chat
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="commercial" value="slack">
                            Slack
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="commercial" value="teams">
                            Microsoft Teams
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="crisis" data-type="commercial" value="pagerduty">
                            PagerDuty
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Documentation Post-Incident
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="2" id="documentation">
        <label for="documentation">Documentation et Retours d'Expérience (2)</label>
        <div class="details">
            <p><strong>Description</strong>: Documenter les incidents et les leçons apprises.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="documentation" data-type="opensource" value="mediawiki">
                            MediaWiki
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="documentation" data-type="opensource" value="bookstack">
                            BookStack
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="documentation" data-type="opensource" value="dokuwiki">
                            DokuWiki
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="documentation" data-type="commercial" value="confluence">
                            Confluence
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="documentation" data-type="commercial" value="notion">
                            Notion
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## 8️⃣ **Aspects Transverses**

### Formation Continue
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="training">
        <label for="training">Formation et Sensibilisation (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Former et sensibiliser les équipes à la sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="training" data-type="opensource" value="owasp-juice-shop">
                            OWASP Juice Shop
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="training" data-type="opensource" value="webgoat">
                            WebGoat
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="training" data-type="opensource" value="dvwa">
                            DVWA
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="training" data-type="commercial" value="securecode-warrior">
                            SecureCode Warrior
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="training" data-type="commercial" value="hackerone">
                            HackerOne Training
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Amélioration des Processus
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="process-improvement">
        <label for="process-improvement">Optimisation des Processus (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Améliorer continuellement les processus de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="process" data-type="opensource" value="jira">
                            Jira
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="process" data-type="opensource" value="gitlab">
                            GitLab
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="process" data-type="opensource" value="redmine">
                            Redmine
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="process" data-type="commercial" value="azure-devops">
                            Azure DevOps
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="process" data-type="commercial" value="servicenow">
                            ServiceNow DevOps
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Audit et Conformité
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="audit">
        <label for="audit">Audit et Évaluation de la Conformité (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Évaluer la conformité aux normes et standards de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="opensource" value="openscap">
                            OpenSCAP
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="opensource" value="compliance-masonry">
                            Compliance Masonry
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="opensource" value="inspec">
                            InSpec
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="commercial" value="securestack">
                            SecureStack
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="commercial" value="wiz">
                            Wiz
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="audit" data-type="commercial" value="vanta">
                            Vanta
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Mesure de la Maturité
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="maturity">
        <label for="maturity">Évaluation de la Maturité DevSecOps (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Mesurer et suivre la maturité des pratiques DevSecOps.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="maturity" data-type="opensource" value="owasp-samm">
                            OWASP SAMM
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="maturity" data-type="opensource" value="dsomm">
                            DevSecOps Maturity Model
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="maturity" data-type="opensource" value="bsimm">
                            BSIMM Framework
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="maturity" data-type="commercial" value="synopsys-bsimm">
                            Synopsys BSIMM Assessment
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="maturity" data-type="commercial" value="security-compass">
                            Security Compass
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Métriques et KPIs
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="metrics">
        <label for="metrics">Suivi des Métriques de Sécurité (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Collecter et analyser les métriques de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="metrics" data-type="opensource" value="prometheus">
                            Prometheus
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="metrics" data-type="opensource" value="grafana">
                            Grafana
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="metrics" data-type="opensource" value="elasticsearch">
                            Elasticsearch
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="metrics" data-type="commercial" value="datadog">
                            Datadog Security
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="metrics" data-type="commercial" value="new-relic">
                            New Relic
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Amélioration Continue
<div class="security-section">
    <div class="security-item">
        <input type="checkbox" class="security-check" data-weight="3" id="continuous-improvement">
        <label for="continuous-improvement">Amélioration Continue (3)</label>
        <div class="details">
            <p><strong>Description</strong>: Améliorer continuellement les processus de sécurité.</p>
            <div class="tools-section">
                <h4>Outils Disponibles</h4>
                <div class="tools-category">
                    <h5>Opensource/Gratuit</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="continuous-improvement" data-type="opensource" value="github-actions">
                            GitHub Actions
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="continuous-improvement" data-type="opensource" value="gitlab-ci">
                            GitLab CI/CD
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="continuous-improvement" data-type="opensource" value="jenkins">
                            Jenkins
                        </label>
                    </div>
                </div>
                <div class="tools-category">
                    <h5>Commercial</h5>
                    <div class="tool-options">
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="continuous-improvement" data-type="commercial" value="circleci">
                            CircleCI
                        </label>
                        <label class="tool-option">
                            <input type="checkbox" name="tool" data-category="continuous-improvement" data-type="commercial" value="travis-ci">
                            Travis CI
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.security-section {
    margin: 20px 0;
}

.security-item {
    margin: 10px 0;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: white;
}

.security-item:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.details {
    margin-top: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 5px;
    display: none;
}

.security-item:hover .details {
    display: block;
}

.tools-section {
    margin-top: 15px;
    border-top: 1px solid #eee;
    padding-top: 15px;
}

.tools-category {
    margin: 10px 0;
}

.tools-category h5 {
    color: #666;
    margin-bottom: 5px;
}

.tool-options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tool-option {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: #f8f9fa;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
}

.tool-option:hover {
    background: #e9ecef;
}

.tool-option input {
    margin-right: 5px;
}

.tools-selection {
    position: sticky;
    top: 20px;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.export-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.export-btn:hover {
    background: #0056b3;
}

#selected-tools {
    max-height: 200px;
    overflow-y: auto;
    margin: 10px 0;
}

.selected-tool-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background: #f8f9fa;
    border-radius: 4px;
    margin: 5px 0;
}

.remove-tool {
    color: #dc3545;
    cursor: pointer;
    padding: 2px 5px;
}

.remove-tool:hover {
    background: #dc3545;
    color: white;
    border-radius: 3px;
}

.phase-report {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.progress-bar {
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
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeChecklist();
});

function initializeChecklist() {
    // Initialiser les événements pour les cases à cocher de sécurité
    document.querySelectorAll('.security-check').forEach(checkbox => {
        checkbox.addEventListener('change', updateScore);
    });

    // Initialiser les événements pour la sélection d'outils
    document.querySelectorAll('input[name="tool"]').forEach(toolCheckbox => {
        toolCheckbox.addEventListener('change', function() {
            if (this.checked) {
                addSelectedTool(this.value, this.parentElement.textContent.trim());
            } else {
                removeSelectedTool(this.value);
            }
        });
    });

    updateScore();
}

function updateScore() {
    const sections = document.querySelectorAll('.security-section');
    let totalScore = 0;
    let maxScore = 0;

    sections.forEach(section => {
        const checks = section.querySelectorAll('.security-check');
        checks.forEach(check => {
            const weight = parseInt(check.dataset.weight);
            maxScore += weight;
            if (check.checked) {
                totalScore += weight;
            }
        });
    });

    const percentage = (totalScore / maxScore) * 100;
    const maturityLevel = getMaturityLevel(percentage);

    const reportHTML = `
        <div class="phase-report">
            <h2>📊 Rapport de Maturité DevSecOps</h2>
            <div class="score-section">
                <h3>Score Global: ${totalScore}/${maxScore} (${percentage.toFixed(1)}%)</h3>
                <div class="maturity-level ${maturityLevel.class}">${maturityLevel.label}</div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${percentage}%"></div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('phase-report-container').innerHTML = reportHTML;
}

function getMaturityLevel(percentage) {
    if (percentage >= 90) return { label: '🏆 Expert - Sécurité de niveau entreprise', class: 'expert' };
    if (percentage >= 75) return { label: '🥇 Avancé - Bonne sécurité', class: 'advanced' };
    if (percentage >= 50) return { label: '🥈 Intermédiaire - Sécurité basique', class: 'intermediate' };
    if (percentage >= 25) return { label: '🥉 Basique - À renforcer', class: 'basic' };
    return { label: '⚠️ Initial - Action urgente requise', class: 'initial' };
}

function addSelectedTool(toolId, toolName) {
    const selectedTools = document.getElementById('selected-tools');
    const toolElement = document.createElement('div');
    toolElement.className = 'selected-tool-item';
    toolElement.id = `selected-${toolId}`;
    toolElement.innerHTML = `
        <span>${toolName}</span>
        <span class="remove-tool" onclick="removeSelectedTool('${toolId}')">×</span>
    `;
    selectedTools.appendChild(toolElement);
}

function removeSelectedTool(toolId) {
    document.querySelector(`input[value="${toolId}"]`).checked = false;
    document.getElementById(`selected-${toolId}`).remove();
}

function exportToolSelection() {
    const selectedTools = [];
    document.querySelectorAll('input[name="tool"]:checked').forEach(tool => {
        selectedTools.push({
            id: tool.value,
            name: tool.parentElement.textContent.trim(),
            category: tool.dataset.category,
            type: tool.dataset.type
        });
    });

    const exportData = {
        date: new Date().toISOString(),
        tools: selectedTools
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'selected-devsecops-tools.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
</script>
