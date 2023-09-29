function createMenuHtml(){
    return /*HTML*/`        
        <button onclick="goToPage('day')">Dag</button>
        <button onclick="goToPage('week')">Uke</button>
        <button onclick="goToPage('addTask')">Legge til ny oppgave</button>
    `;
}
