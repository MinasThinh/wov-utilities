import { setDS, getDS, analyzeDS } from './ds.js';
var players = document.querySelectorAll(".players button")
var properties = document.querySelector('.properties')

var database = []

var roles = [
    {
        "name": "Ác dịch",
        "filename": "Ác dịch.png",
        "abbrev": "dich",
    },
    {
        "name": "Bác sĩ",
        "filename": "Bác sĩ.png",
        "abbrev": "bs",
    },
    {
        "name": "Bảo vệ",
        "filename": "Bảo vệ.png",
        "abbrev": "bv",
    },
    {
        "name": "Người canh gác",
        "filename": "Người canh gác.png",
        "abbrev": "gac",
    },
    {
        "name": "Quản ngục",
        "filename": "Quản ngục.png",
        "abbrev": "nguc",
    },
    {
        "name": "Kỹ nữ",
        "filename": "Kỹ nữ.png",
        "abbrev": "ky",
    },
    {
        "name": "Mục sư",
        "filename": "Mục sư.png",
        "abbrev": "muc",
    },
    {
        "name": "Tiên tri",
        "filename": "Tiên tri.png",
        "abbrev": "tri",
    },
    {
        "name": "Thầy bói",
        "filename": "Thầy bói.png",
        "abbrev": "boi",
    },
    {
        "name": "Thám tử",
        "filename": "Thám tử.png",
        "abbrev": "tham",
    },
    {
        "name": "Cảnh sát trưởng",
        "filename": "Cảnh sát trưởng.png",
        "abbrev": "cst",
    },
    {
        "name": "Thầy đồng",
        "filename": "Thầy đồng.png",
        "abbrev": "cu",
    },
    {
        "name": "Kẻ gắn hồn",
        "filename": "Kẻ gắn hồn.png",
        "abbrev": "gan",
    },
    {
        "name": "Thị trưởng",
        "filename": "Thị trưởng.png",
        "abbrev": "thị",
    },
    {
        "name": "Phù thuỷ",
        "filename": "Phù thuỷ.png",
        "abbrev": "phu",
    },
    {
        "name": "Thợ săn quái thú",
        "filename": "Thợ săn quái thú.png",
        "abbrev": "bh",
    },
    {
        "name": "Cậu bé miệng bự",
        "filename": "Cậu bé miệng bự.png",
        "abbrev": "mieng",
    },
    {
        "name": "Hoa bé con",
        "filename": "Hoa bé con.png",
        "abbrev": "hoa",
    },
    {
        "name": "Thần tình yêu",
        "filename": "Thần tình yêu.png",
        "abbrev": "cp",
    },
    {
        "name": "Bán sói",
        "filename": "Bán sói.png",
        "abbrev": "ban",
    },
    {
        "name": "Sói trẻ",
        "filename": "Sói trẻ.png",
        "abbrev": "tre",
    },
    {
        "name": "Sói ác mộng",
        "filename": "Sói ác mộng.png",
        "abbrev": "mong",
    },
    {
        "name": "Sói pháp sư",
        "filename": "Sói pháp sư.png",
        "abbrev": "phap",
    },
    {
        "name": "Sói hắc ám",
        "filename": "Sói hắc ám.png",
        "abbrev": "hac",
    },
    {
        "name": "Sói hộ vệ",
        "filename": "Sói hộ vệ.png",
        "abbrev": "hv",
    },
    {
        "name": "Sói đầu đàn",
        "filename": "Sói đầu đàn.png",
        "abbrev": "alpha",
    },
    {
        "name": "Sói tiên tri",
        "filename": "Sói tiên tri.png",
        "abbrev": "trilong",
    },
    {
        "name": "Thằng ngố",
        "filename": "Thằng ngố.png",
        "abbrev": "ngo",
    },
    {
        "name": "Thợ săn người",
        "filename": "Thợ săn người.png",
        "abbrev": "hh",
    },
    {
        "name": "Sát nhân hàng loạt",
        "filename": "Sát nhân hàng loạt.png",
        "abbrev": "sat",
    },
    {
        "name": "Kẻ phóng hoả",
        "filename": "Kẻ phóng hoả.png",
        "abbrev": "hoả",
    },
    {
        "name": "Tin tặc",
        "filename": "Tin tặc.png",
        "abbrev": "tac",
    },
    {
        "name": "Côn đồ",
        "filename": "Côn đồ.png",
        "abbrev": "con",
    },
    {
        "name": "Người gác đêm",
        "filename": "Người gác đêm.png",
        "abbrev": "gac",
    },
    {
        "name": "Đồ tể",
        "filename": "Đồ tể.png",
        "abbrev": "te",
    },
    {
        "name": "Lực sĩ",
        "filename": "Lực sĩ.png",
        "abbrev": "luc",
    },
    {
        "name": "Tiên tri tập sự",
        "filename": "Tiên tri tập sự.png",
        "abbrev": "tritap",
    },
    {
        "name": "Xạ thủ",
        "filename": "Xạ thủ.png",
        "abbrev": "xa",
    },
    {
        "name": "Ná thủ",
        "filename": "Ná thủ.png",
        "abbrev": "na",
    },
    {
        "name": "Giám ngục",
        "filename": "Giám ngục.png",
        "abbrev": "nguc",
    },
    {
        "name": "Ma nữ",
        "filename": "Ma nữ.png",
        "abbrev": "ma",
    },
    {
        "name": "Thiện xạ",
        "filename": "Thiện xạ.png",
        "abbrev": "xa",
    },
    {
        "name": "Thẩm phán",
        "filename": "Thẩm phán.png",
        "abbrev": "tham",
    },
    {
        "name": "Nhà phân tích",
        "filename": "Nhà phân tích.png",
        "abbrev": "tich",
    },
    {
        "name": "Nhà ngoại cảm",
        "filename": "Nhà ngoại cảm.png",
        "abbrev": "cam",
    },
    {
        "name": "Con bạc",
        "filename": "Con bạc.png",
        "abbrev": "bac",
    },
    {
        "name": "Pháp y",
        "filename": "Pháp y.png",
        "abbrev": "phap",
    },
    {
        "name": "Nghệ sĩ vĩ cầm",
        "filename": "Nghệ sĩ vĩ cầm.png",
        "abbrev": "cam",
    },
    {
        "name": "Thầy cúng",
        "filename": "Thầy cúng.png",
        "abbrev": "cung",
    },
    {
        "name": "Người gọi hồn",
        "filename": "Người gọi hồn.png",
        "abbrev": "goi",
    },
    {
        "name": "Người lái đò",
        "filename": "Người lái đò.png",
        "abbrev": "do",
    },
    {
        "name": "Thợ làm bánh",
        "filename": "Thợ làm bánh.png",
        "abbrev": "banh",
    },
    {
        "name": "Bà già khó tính",
        "filename": "Bà già khó tính.png",
        "abbrev": "gia",
    },
    {
        "name": "Người thuyết giáo",
        "filename": "Người thuyết giáo.png",
        "abbrev": "giao",
    },
    {
        "name": "Thợ rèn",
        "filename": "Thợ rèn.png",
        "abbrev": "ren",
    },
    {
        "name": "Nhà thiên văn học",
        "filename": "Nhà thiên văn học.png",
        "abbrev": "van",
    },
    {
        "name": "Người đặt bẫy",
        "filename": "Người đặt bẫy.png",
        "abbrev": "trap",
    },
    {
        "name": "Người gắn cờ",
        "filename": "Người gắn cờ.png",
        "abbrev": "co",
    },
    {
        "name": "Kẻ báo thù",
        "filename": "Kẻ báo thù.png",
        "abbrev": "thu",
    },
    {
        "name": "Người rung chuông",
        "filename": "Người rung chuông.png",
        "abbrev": "chuong",
    },
    {
        "name": "Người khai mệnh",
        "filename": "Người khai mệnh.png",
        "abbrev": "menh",
    },
    {
        "name": "Người yêu hoà bình",
        "filename": "Người yêu hoà bình.png",
        "abbrev": "paci",
    },
    {
        "name": "Kẻ xúi giục",
        "filename": "Kẻ xúi giục.png",
        "abbrev": "xui",
    },
    {
        "name": "Kẻ hâm mộ ma sói",
        "filename": "Kẻ hâm mộ ma sói.png",
        "abbrev": "fan",
    },
    {
        "name": "Kẻ trộm mộ",
        "filename": "Kẻ trộm mộ.png",
        "abbrev": "mo",
    },
    {
        "name": "Kẻ vô danh",
        "filename": "Kẻ vô danh.png",
        "abbrev": "vô",
    },
    {
        "name": "Sói phân tách",
        "filename": "Sói phân tách.png",
        "abbrev": "tach",
    },
    {
        "name": "Sói mèo con",
        "filename": "Sói mèo con.png",
        "abbrev": "meo",
    },
    {
        "name": "Sói thao túng",
        "filename": "Sói thao túng.png",
        "abbrev": "túng",
    },
    {
        "name": "Sói tà thuật",
        "filename": "Sói tà thuật.png",
        "abbrev": "ta",
    },
    {
        "name": "Sói bão tố",
        "filename": "Sói bão tố.png",
        "abbrev": "bao",
    },
    {
        "name": "Sói đầm lầy",
        "filename": "Sói đầm lầy.png",
        "abbrev": "dam",
    },
    {
        "name": "Sói lừa đảo",
        "filename": "Sói lừa đảo.png",
        "abbrev": "lua",
    },
    {
        "name": "Sói mơ hồ",
        "filename": "Sói mơ hồ.png",
        "abbrev": "mo",
    },
    {
        "name": "Sói biên kịch",
        "filename": "Sói biên kịch.png",
        "abbrev": "kich",
    },
    {
        "name": "Sói điên cuồng",
        "filename": "Sói điên cuồng.png",
        "abbrev": "cuong",
    },
    {
        "name": "Sói độc tố",
        "filename": "Sói độc tố.png",
        "abbrev": "doc",
    },
    {
        "name": "Sói hoà bình",
        "filename": "Sói hoà bình.png",
        "abbrev": "paci",
    },
    {
        "name": "Sói thạch",
        "filename": "Sói thạch.png",
        "abbrev": "thach",
    },
    {
        "name": "Sói bướng bỉnh",
        "filename": "Sói bướng bỉnh.png",
        "abbrev": "buong",
    },
    {
        "name": "Sói chiêu hồn",
        "filename": "Sói chiêu hồn.png",
        "abbrev": "chieu",
    },
    {
        "name": "Sói ma",
        "filename": "Sói ma.png",
        "abbrev": "ma",
    },
    {
        "name": "Sói phù thuỷ",
        "filename": "Sói phù thuỷ.png",
        "abbrev": "phu",
    },
    {
        "name": "Sói mù",
        "filename": "Sói mù.png",
        "abbrev": "mu",
    },
    {
        "name": "Kẻ hỗn loạn",
        "filename": "Kẻ hỗn loạn.png",
        "abbrev": "hon",
    },
    {
        "name": "Kẻ ăn thịt người",
        "filename": "Kẻ ăn thịt người.png",
        "abbrev": "thit",
    },
    {
        "name": "Thám tử ác ma",
        "filename": "Thám tử ác ma.png",
        "abbrev": "tham",
    },
    {
        "name": "Kẻ đặt bom",
        "filename": "Kẻ đặt bom.png",
        "abbrev": "bom",
    },
    {
        "name": "Nhà giả kim",
        "filename": "Nhà giả kim.png",
        "abbrev": "kim",
    },
    {
        "name": "Nhân ngư",
        "filename": "Nhân ngư.png",
        "abbrev": "ngu",
    },
    {
        "name": "Sát nhân ảnh thuật",
        "filename": "Sát nhân ảnh thuật.png",
        "abbrev": "sat",
    },
    {
        "name": "Kẻ biến hình",
        "filename": "Kẻ biến hình.png",
        "abbrev": "bien",
    },
    {
        "name": "Giáo chủ",
        "filename": "Giáo chủ.png",
        "abbrev": "giao",
    },
    {
        "name": "Xác sống",
        "filename": "Xác sống.png",
        "abbrev": "xac",
    },
]
var auras = ["Thiện", "Ác", "Không rõ"]
var teams = ["Dân làng", "Ma sói", "Solo"]

var playerSeleteced = 0
var panelClicked = "none"

document.querySelector('#editrole').addEventListener("click", function() {
    if (panelClicked != "none") {
        document.querySelector('.' + panelClicked).style.left = innerWidth + "px"
        if (panelClicked == "rolepanel") {
            panelClicked = "none"
            return 
        } else panelClicked = "rolepanel"
    }
    else panelClicked = "rolepanel"

    let panel = document.querySelector('.rolepanel')
    panel.style.left = (innerWidth - panel.getBoundingClientRect().width) + "px"
})
document.querySelector('#editaura').addEventListener("click", function() {
    if (panelClicked != "none") {
        document.querySelector('.' + panelClicked).style.left = innerWidth + "px"
        if (panelClicked == "aurapanel") {
            panelClicked = "none"
            return
        } else panelClicked = "aurapanel"
        
    }
    else panelClicked = "aurapanel"

    let panel = document.querySelector('.aurapanel')
    panel.style.left = (innerWidth - panel.getBoundingClientRect().width) + "px"
})
document.querySelector('#editteam').addEventListener("click", function() {
    if (panelClicked != "none") {
        document.querySelector('.' + panelClicked).style.left = innerWidth + "px"
        if (panelClicked == "teampanel") {
            panelClicked = "none"
            return
        } else panelClicked = "teampanel"
        
    }
    else panelClicked = "teampanel"

    let panel = document.querySelector('.teampanel')
    panel.style.left = (innerWidth - panel.getBoundingClientRect().width) + "px"
})

function showproperties(playerID) {
    playerSeleteced = playerID
    let player = players[playerID]
    let db = database[playerID]
    players[playerID].style.borderColor = "yellowgreen"
    document.querySelector('.properties').style.width = (window.innerWidth/2 - parseInt(properties.style.left)/2) + "px"
    document.querySelector('.properties .id').textContent = "Player #" + (playerID + 1)
    document.querySelector('.properties .role').textContent = "Role: " + db["role"]
    document.querySelector('.properties .aura').textContent = "Aura: " + db["aura"]
    document.querySelector('.properties .team').textContent = "Team: " + db["team"]
    document.querySelector('.properties #editrole').style.left = (parseInt(document.querySelector('.properties').style.width + document.querySelector('.properties').getBoundingClientRect().left) - 60) + "px"
    document.querySelector('.properties #editrole').style.top = "78px"
    document.querySelector('.properties #editaura').style.left = (parseInt(document.querySelector('.properties').style.width + document.querySelector('.properties').getBoundingClientRect().left) - 60) + "px"
    document.querySelector('.properties #editaura').style.top = "138px"
    document.querySelector('.properties #editteam').style.left = (parseInt(document.querySelector('.properties').style.width + document.querySelector('.properties').getBoundingClientRect().left) - 60) + "px"
    document.querySelector('.properties #editteam').style.top = "198px"
    properties.style.visibility = 'visible';

}

for(let i = 0;i<players.length;++i) {
    players[i].addEventListener("click", function() {
        players[playerSeleteced].style.borderColor = "white"
        showproperties(i)
    })
    database[i] = {
        "role": "#",
        "aura": "#",
        "team": "#"
    }
}

window.onload = () => {
    console.log("window loading")
    const rect = players[3].getBoundingClientRect()
    properties.style.left = rect.left + rect.width + 30 + "px"
    properties.style.top = rect.top + "px"
    document.querySelector('.rolepanel').style.left = innerWidth + "px"
    document.querySelector('.aurapanel').style.left = innerWidth + "px"
    document.querySelector('.teampanel').style.left = innerWidth + "px"
    document.querySelector('.rolepanel').style.maxHeight = (innerHeight - 10) + "px"
    document.querySelector('.aurapanel').style.maxHeight = (innerHeight - 10) + "px"
    document.querySelector('.teampanel').style.maxHeight = (innerHeight - 10) + "px"
    for (let i = 0;i<roles.length;++i) {
        let elm = document.createElement("button")
        let img = document.createElement("img")
        let span = document.createElement("span")
        img.src = "assests/roles/" + roles[i].filename
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.marginRight = "10px";
        img.style.marginLeft = "0";
        img.style.border = "2px solid white";
        span.textContent = roles[i].name
        elm.appendChild(img)        
        elm.appendChild(span)
        elm.style.display = "flex"
        elm.style.alignItems = "center"
        elm.style.gap = "8px"
        elm.style.padding = "10px 16px"
        elm.style.border = "none"
        elm.style.borderRadius = "8px"
        elm.style.backgroundColor = "#4f46e5"
        elm.style.color = "white"
        elm.style.fontSize = "16px"
        elm.style.cursor = "pointer"
        elm.style.transition = "background 0.2 ease"
        elm.style.fontFamily = "'Huninn', sans-serif"
        elm.style.width = "200px"
        elm.addEventListener("click", function() {
            database[playerSeleteced].role = roles[i].name
            document.querySelector('.properties .role').textContent = "Role: " + roles[i].name
            players[playerSeleteced].style.background = "url(" + img.src + ")"
            players[playerSeleteced].style.backgroundSize = "contain"
            players[playerSeleteced].style.backgroundRepeat = "no-repeat"
            players[playerSeleteced].style.backgroundPosition = "center"
        })
        document.querySelector('.rolepanel').appendChild(elm)
    }
    for (let i = 0;i<auras.length;++i) {
        let elm = document.createElement("button")
        let img = document.createElement("img")
        let span = document.createElement("span")
        img.src = "assests/auras/" + auras[i] + ".png"
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.marginRight = "10px";
        img.style.marginLeft = "0";
        img.style.border = "2px solid white";
        span.textContent = auras[i]
        elm.appendChild(img)        
        elm.appendChild(span)
        elm.style.display = "flex"
        elm.style.alignItems = "center"
        elm.style.gap = "8px"
        elm.style.padding = "10px 16px"
        elm.style.border = "none"
        elm.style.borderRadius = "8px"
        elm.style.backgroundColor = "#4f46e5"
        elm.style.color = "white"
        elm.style.fontSize = "16px"
        elm.style.cursor = "pointer"
        elm.style.transition = "background 0.2 ease"
        elm.style.fontFamily = "'Huninn', sans-serif"
        elm.style.width = "200px"
        elm.addEventListener("click", function() {
            database[playerSeleteced].aura = auras[i]
            document.querySelector('.properties .aura').textContent = "Aura: " + auras[i]
        })
        document.querySelector('.aurapanel').appendChild(elm)
    }
    for (let i = 0;i<teams.length;++i) {
        let elm = document.createElement("button")
        let img = document.createElement("img")
        let span = document.createElement("span")
        img.src = "assests/teams/" + teams[i] + ".png"
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.marginRight = "10px";
        img.style.marginLeft = "0";
        img.style.border = "2px solid white";
        span.textContent = teams[i]
        elm.appendChild(img)        
        elm.appendChild(span)
        elm.style.display = "flex"
        elm.style.alignItems = "center"
        elm.style.gap = "8px"
        elm.style.padding = "10px 16px"
        elm.style.border = "none"
        elm.style.borderRadius = "8px"
        elm.style.backgroundColor = "#4f46e5"
        elm.style.color = "white"
        elm.style.fontSize = "16px"
        elm.style.cursor = "pointer"
        elm.style.transition = "background 0.2 ease"
        elm.style.fontFamily = "'Huninn', sans-serif"
        elm.style.width = "200px"
        elm.addEventListener("click", function() {
            database[playerSeleteced].team = teams[i]
            document.querySelector('.properties .team').textContent = "Team: " + teams[i]
        })
        document.querySelector('.teampanel').appendChild(elm)
    }
};

const searchInput = document.getElementById("searchInput")
const rolePanel = document.querySelector(".rolepanel")

function renderRoles(filterText = "") {
    rolePanel.querySelectorAll("button").forEach(e => e.remove())

    for (let i = 0; i < roles.length; ++i) {
        const role = roles[i]
        const query = filterText.toLowerCase()
        if (
            role.name.toLowerCase().includes(query) ||
            role.abbrev.toLowerCase().includes(query)
        ) {
            let elm = document.createElement("button")
            let img = document.createElement("img")
            let span = document.createElement("span")
            img.src = "assests/roles/" + role.filename
            img.style.width = "40px";
            img.style.height = "40px";
            img.style.marginRight = "10px";
            img.style.marginLeft = "0";
            img.style.border = "2px solid white";
            span.textContent = role.name
            elm.appendChild(img)
            elm.appendChild(span)
            elm.style.display = "flex"
            elm.style.alignItems = "center"
            elm.style.gap = "8px"
            elm.style.padding = "10px 16px"
            elm.style.border = "none"
            elm.style.borderRadius = "8px"
            elm.style.backgroundColor = "#4f46e5"
            elm.style.color = "white"
            elm.style.fontSize = "16px"
            elm.style.cursor = "pointer"
            elm.style.transition = "background 0.2 ease"
            elm.style.fontFamily = "'Huninn', sans-serif"
            elm.style.width = "200px"
            elm.addEventListener("click", function () {
                database[playerSeleteced].role = role.name
                document.querySelector('.properties .role').textContent = "Role: " + role.name
                players[playerSeleteced].style.background = "url(" + img.src + ")"
                players[playerSeleteced].style.backgroundSize = "contain"
                players[playerSeleteced].style.backgroundRepeat = "no-repeat"
                players[playerSeleteced].style.backgroundPosition = "center"
            })
            rolePanel.appendChild(elm)
        }
    }
}

searchInput.addEventListener("input", () => {
    renderRoles(searchInput.value)
})
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const firstButton = rolePanel.querySelector("button")
        if (firstButton) firstButton.click()
    }
})

renderRoles()