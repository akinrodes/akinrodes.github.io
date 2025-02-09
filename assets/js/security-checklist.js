document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé");
    initializeRiskAssessment();
});

function initializeRiskAssessment() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log("Checkbox changée, mise à jour du rapport");
            updateRiskReport();
        });
    });
}

function generateSecurityReport() {
    console.log("Génération du rapport...");
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalItems = checkboxes.length;
    const checkedItems = Array.from(checkboxes).filter(cb => cb.checked).length;
    const score = (checkedItems / totalItems) * 100;

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
        </div>
    `;

    const container = document.getElementById('security-report-container');
    if (container) {
        container.innerHTML = reportHTML;
        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth' });
    }
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
    const sections = document.querySelectorAll('h2, h3');
    let domainSection;
    
    for (const section of sections) {
        if (section.textContent.includes(domainName)) {
            domainSection = section;
            break;
        }
    }

    if (!domainSection) return { checked: 0, total: 0 };

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
