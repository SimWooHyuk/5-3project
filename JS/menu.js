const setMenuBtn = document.querySelector('.SetMenuBtn');
const setMenuList = document.querySelector('.SetMenuList');
const oneMenuBtn = document.querySelector('.OneMenuBtn');
const oneMenuList = document.querySelector('.OneMenuList');
const sideMenuBtn = document.querySelector('.SideMenuBtn');
const sideMenuList = document.querySelector('.SideMenuList');
const preMenuBtn = document.querySelector('.btn44')
const preMenuList = document.querySelector('.PreMenuList')


setMenuBtn.addEventListener('click', function () {
  if (setMenuList.style.display === 'flex') {
    setMenuList.style.display = 'none';
    oneMenuList.style.display = 'none';
    sideMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    preMenuBtn.style.display = 'none';
  } else {
    setMenuList.style.display = 'flex';
    preMenuBtn.style.dispaly = 'none';
    oneMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    sideMenuList.style.display = 'none';
  }
});
oneMenuBtn.addEventListener('click', function () {
  if (oneMenuList.style.display === 'flex') {
    oneMenuList.style.display = 'none';
    setMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    sideMenuList.style.display = 'none';
    preMenuBtn.style.display = 'none';
  } else {
    oneMenuList.style.display = 'flex';
    setMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    sideMenuList.style.display = 'none';
    preMenuBtn.style.display = 'block';

  }
});
sideMenuBtn.addEventListener('click', function () {
  if (sideMenuList.style.display === 'flex') {
    sideMenuList.style.display = 'none';
    setMenuList.style.display = 'none';
    oneMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    preMenuBtn.style.display = 'none';

  } else {
    sideMenuList.style.display = 'flex';
    preMenuList.style.display = 'none';
    setMenuList.style.display = 'none';
    oneMenuList.style.display = 'none';
    preMenuBtn.style.display = 'none';

  }
});
preMenuBtn.addEventListener('click', function () {
  if (preMenuList.style.display === 'flex') {
    sideMenuList.style.display = 'none';
    preMenuList.style.display = 'none';
    setMenuList.style.display = 'none';
    oneMenuList.style.display = 'none';
  } else {
    preMenuList.style.display = 'flex';
    sideMenuList.style.display = 'none';
    setMenuList.style.display = 'none';
    oneMenuList.style.display = 'none';
  }
});

