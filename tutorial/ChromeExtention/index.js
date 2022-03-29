let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead)
}

function render(lead) {
    let listItems = ""

    for (let i = 0; i < lead.length; i++) {
        listItems += `<li>
                        <a target='_blank' href='${lead[i]}'>
                            ${lead[i]}
                        </a>
                    </li>`

        // const list = document.createElement("li")
        // list.textContent = myLead[i]
        // ulEl.append(list)
    }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value)
    render(myLead)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLead.push(tabs[0].url)
        render(myLead)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
    })


})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    render(myLead)
})