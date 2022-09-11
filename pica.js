console.log('dela')

const moka = document.querySelector('.moka')
const kvas = document.querySelector('.kvas')
const kvasZ = document.querySelector('.kvasZ')
const voda = document.querySelector('.voda')
const sladkor = document.querySelector('.sladkor')

const sol = document.querySelector('.sol')
const solZ = document.querySelector('.solZ')
const olje = document.querySelector('.olje')
const oljeZ = document.querySelector('.oljeZ')

const kolicina = document.querySelector('.kolicina')


console.log(moka)
moka.innerText = '300'

const faktorKvas = 0.015
const faktorVoda = 0.6
const faktorSol = 0.03
const faktorSladkor = 0.02
const faktorOlje = 0.03

const nastaviVrednosti = (vrednost) => {
  moka.innerText = vrednost + ' g';
  kvas.innerText = (vrednost * faktorKvas).toFixed(2) + ' g';
  kvasZ.innerText = (vrednost * faktorKvas * 0.363636363636364).toFixed(2)
  voda.innerText = vrednost * faktorVoda + ' g';
  sladkor.innerText = (vrednost * faktorSladkor).toFixed(2) + ' g';
  sol.innerText = (vrednost * faktorSol).toFixed(2) + ' g'
  solZ.innerText = (vrednost * faktorSol * 0.175747).toFixed(2)
  olje.innerText = vrednost * faktorOlje + ' g'
  oljeZ.innerText = vrednost * faktorOlje * 0.15
}

kolicina.addEventListener('DOMcontentLoaded', nastaviVrednosti(175))

kolicina.addEventListener('change', (e) => {
  let kolMoke = e.target.value
  nastaviVrednosti(kolMoke)
})
