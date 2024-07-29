function updateProfileInfo(profileData){
    const image = document.getElementById('profile.image')
    image.src = profileData.image
    image.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const cargo = document.getElementById('profile.cargo')
    cargo.innerText = profileData.cargo

    const cidade = document.getElementById('profile.cidade')
    cidade.innerText = profileData.cidade
    
    const telefone = document.getElementById('profile.telefone')
    telefone.innerText = profileData.telefone
    telefone.href = `tel:${profileData.telefone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateGoal(profileData){
    const objetivo = document.getElementById('profile.objetivo')
    objetivo.innerText = profileData.objetivo
}

function updateTechnologies(profileData){
    const tecnologias = document.getElementById('profile.skills.tecnologias')
    tecnologias.innerHTML = profileData.skills.tecnologias.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateTools(profileData){
    const ferramentas = document.getElementById('profile.skills.ferramentas')
    ferramentas.innerHTML = profileData.skills.ferramentas.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData){
    const idiomas = document.getElementById('profile.idiomas')
    idiomas.innerHTML = profileData.idiomas.map(idiomas => `<li>${idiomas}</li>`).join('')
}

function updateEducacao(profileData){
    const educacao = document.getElementById('profile.educacao')
    educacao.innerHTML = profileData.educacao.map(educacao => {
        return `
            <li>
                <h3>${educacao.curso}</h3>
                <span class="local">${educacao.localidade}</span>
                <span class="data">${educacao.periodo}</span>
            </li>
            <hr>
        `
    }).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => {
        return`
            <li>
                <span class="title">${portfolio.nome}</span>
                <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateGoal(profileData)
    updateTechnologies(profileData)
    updateTools(profileData)
    updateLanguages(profileData)
    updateEducacao(profileData)
    updatePortfolio(profileData)
})()