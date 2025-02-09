document.addEventListener('DOMContentLoaded', function() {
    // Ajouter le bouton s'il n'existe pas déjà
    if (!document.querySelector('.report-button')) {
        const button = document.createElement('button');
        button.className = 'report-button';
        button.onclick = generateSecurityReport;
        button.textContent = 'Générer le Rapport de Posture de Sécurité';
        document.querySelector('#app').appendChild(button);
    }
});

function generateSecurityReport() {
    console.log("Génération du rapport..."); // Debug
    
    // Récupérer toutes les cases à cocher
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(`Nombre total de checkboxes: ${checkboxes.length}`); // Debug
    
    const totalItems = checkboxes.length;
    const checkedItems = Array.from(checkboxes).filter(cb => cb.checked).length;
    
    // Calculer le score
    const score = (checkedItems / totalItems) * 100;
    console.log(`Score: ${score}%`); // Debug

    // Générer le contenu du rapport
    const reportHTML = `
        <div class="security-report">
            <div class="executive-summary">
                <h2>📊 Résumé Exécutif</h2>
                <p><strong>Score Global:</strong> ${score.toFixed(1)}%</p>
                <p><strong>Contrôles Validés:</strong> ${checkedItems}/${totalItems}</p>
                <p><strong>Niveau de Risque:</strong> ${getRiskLevel(score)}</p>
            </div>

            <div class="risk-visualization">
                <h2>🎯 Visualisation du Risque</h2>
                <div class="risk-gauge">
                    <div class="gauge-fill" style="width: ${score}%"></div>
                </div>
            </div>

            <div class="domain-analysis">
                <h2>🔍 Analyse par Domaine</h2>
                ${generateDomainAnalysis()}
            </div>

            <div class="action-plan">
                <h2>📝 Plan d'Action Prioritaire</h2>
                ${generateActionPlan()}
            </div>

            <div class="risk-scenarios">
                <h2>🎯 Scénarios d'Évaluation des Risques</h2>
                ${generateRiskScenarios()}
            </div>
        </div>
    `;

    // Afficher le rapport
    const container = document.getElementById('security-report-container');
    container.innerHTML = reportHTML;
    container.style.display = 'block';
    
    // Scroll vers le rapport
    container.scrollIntoView({ behavior: 'smooth' });
}

function getRiskLevel(score) {
    if (score >= 80) return '🟢 Faible';
    if (score >= 60) return '🟡 Moyen';
    return '🔴 Élevé';
}

function generateDomainAnalysis() {
    const domains = [
        {name: 'Authentication', weight: 3},
        {name: 'Authorization', weight: 3},
        {name: 'Data Protection', weight: 2},
        {name: 'Infrastructure', weight: 2},
        {name: 'Monitoring', weight: 1}
    ];

    return domains.map(domain => {
        const stats = getDomainStats(domain.name);
        const score = (stats.checked / stats.total) * 100;
        
        return `
            <div class="domain-item">
                <h3>${domain.name}</h3>
                <p>Score: ${score.toFixed(1)}%</p>
                <p>Poids: ${domain.weight}</p>
                <p>Validé: ${stats.checked}/${stats.total}</p>
                <div class="risk-gauge">
                    <div class="gauge-fill" style="width: ${score}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function getDomainStats(domainName) {
    // Trouver la section correspondant au domaine
    const sections = document.querySelectorAll('h2, h3');
    let domainSection;
    
    for (const section of sections) {
        if (section.textContent.includes(domainName)) {
            domainSection = section;
            break;
        }
    }

    if (!domainSection) return { checked: 0, total: 0 };

    // Compter les checkboxes jusqu'à la prochaine section
    let checkboxes = [];
    let element = domainSection.nextElementSibling;
    
    while (element && !['H2', 'H3'].includes(element.tagName)) {
        const boxes = element.querySelectorAll('input[type="checkbox"]');
        checkboxes = [...checkboxes, ...boxes];
        element = element.nextElementSibling;
    }

    return {
        checked: checkboxes.filter(cb => cb.checked).length,
        total: checkboxes.length
    };
}

function generateActionPlan() {
    const uncheckedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(cb => {
        if (!cb.checked) {
            const label = cb.nextElementSibling.textContent;
            const priority = getPriority(label);
            uncheckedItems.push({ label, priority });
        }
    });

    // Trier par priorité
    uncheckedItems.sort((a, b) => b.priority - a.priority);

    return `
        <ul>
            ${uncheckedItems.map(item => `
                <li>
                    <span class="priority-indicator priority-${getPriorityClass(item.priority)}"></span>
                    ${item.label}
                </li>
            `).join('')}
        </ul>
    `;
}

function getPriority(label) {
    const text = label.toLowerCase();
    if (text.includes('critical') || text.includes('authentication')) return 3;
    if (text.includes('important') || text.includes('security')) return 2;
    return 1;
}

function getPriorityClass(priority) {
    switch(priority) {
        case 3: return 'high';
        case 2: return 'medium';
        default: return 'low';
    }
}

const riskScenarios = {
    mobilePaiement: {
        nom: "Application Mobile de Paiement",
        risques: [
            {
                type: "Injection SQL",
                severite: 4,
                probabilite: 3,
                impact: {
                    financier: 150000,
                    reglementaire: 100000,
                    reputation: 500000,
                    support: 50000
                }
            },
            {
                type: "Vol de données bancaires",
                severite: 5,
                probabilite: 2,
                impact: {
                    financier: 200000,
                    reglementaire: 150000,
                    reputation: 750000,
                    support: 75000
                }
            }
        ]
    },
    ecommerce: {
        nom: "Plateforme E-commerce",
        risques: [
            {
                type: "DDoS",
                severite: 3,
                probabilite: 4,
                impact: {
                    financier: 50000,
                    reputation: 100000,
                    support: 25000
                }
            },
            {
                type: "Fuite de données clients",
                severite: 4,
                probabilite: 3,
                impact: {
                    financier: 100000,
                    reglementaire: 200000,
                    reputation: 300000,
                    support: 50000
                }
            }
        ]
    },
    apiRH: {
        nom: "API Interne RH",
        risques: [
            {
                type: "Violation RGPD",
                severite: 4,
                probabilite: 2,
                impact: {
                    financier: 20000,
                    reglementaire: 100000,
                    reputation: 50000
                }
            },
            {
                type: "Accès non autorisé",
                severite: 3,
                probabilite: 3,
                impact: {
                    financier: 15000,
                    reglementaire: 75000,
                    reputation: 25000
                }
            }
        ]
    }
};

function generateRiskScenarios() {
    let scenariosHTML = '';
    
    for (const [key, scenario] of Object.entries(riskScenarios)) {
        let totalRisk = 0;
        let scenarioDetails = `<div class="risk-scenario">
            <h3>${scenario.nom}</h3>
            <table class="risk-table">
                <tr>
                    <th>Risque</th>
                    <th>Sévérité</th>
                    <th>Probabilité</th>
                    <th>Score</th>
                    <th>Impact Financier</th>
                </tr>`;
        
        scenario.risques.forEach(risque => {
            const riskScore = risque.severite * risque.probabilite;
            totalRisk += riskScore;
            const impactTotal = Object.values(risque.impact).reduce((a, b) => a + b, 0);
            
            scenarioDetails += `
                <tr>
                    <td>${risque.type}</td>
                    <td>${risque.severite}/5</td>
                    <td>${risque.probabilite}/5</td>
                    <td>${riskScore}/25</td>
                    <td>${formatMoney(impactTotal)}</td>
                </tr>`;
        });
        
        scenarioDetails += `</table></div>`;
        scenariosHTML += scenarioDetails;
    }
    
    return scenariosHTML;
}

function formatMoney(amount) {
    return new Intl.NumberFormat('fr-FR', { 
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}